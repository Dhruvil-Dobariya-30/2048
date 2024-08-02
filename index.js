let allPlace = [];
let size = 4;

document.onkeydown = (e) => {
  e = e || window.event;
  let arrowPressed = false;

  if (e.key === "ArrowUp") {
    arrowPressed = true;
    topShift();
    topSum();
    genarateIndex();
  } else if (e.key === "ArrowDown") {
    arrowPressed = true;
    downShift();
    downSum();
    genarateIndex();
  } else if (e.key === "ArrowLeft") {
    arrowPressed = true;
    leftShift();
    leftSum();
    genarateIndex();
  } else if (e.key === "ArrowRight") {
    arrowPressed = true;
    righShift();
    rightSum();
    genarateIndex();
  }

  // if (arrowPressed) {
  //   genarateIndex();
  // }
};

let mainArray = [];
let div = document.getElementById("container");

function displayBox() {
  let div = "";
  for (let i = 0; i < size; i++) {
    mainArray[i] = [];
    div += "<br/>";
    for (let j = 0; j < size; j++) {
      mainArray[i][j] = `${i}${j}`;
      div += `<div class="box" id="${mainArray[i][j]}" onkeyup="keyHandle(this.id)"></div>`;
    }
  }

  document.getElementById("container").innerHTML = div;
  console.log(mainArray);
  generateTwoNums();
}
displayBox();

function generateTwoNums() {
  genarateIndex();
  genarateIndex();
}

function genarateIndex() {
  let randomRow = Math.floor(Math.random() * size);
  let randomCol = Math.floor(Math.random() * size);

  let position = `${randomRow}${randomCol}`;

  if (!allPlace.includes(position)) {
    allPlace.push(position);
    genarateNumber(randomRow, randomCol);
  } else {
    genarateIndex();
  }
  console.log(allPlace);
}

function genarateNumber(row, col) {
  let number;
  let num = Math.random().toFixed(3) * 1000;
  if (num % 2 === 0) {
    number = 2;
  } else {
    number = 4;
  }

  document.getElementById(mainArray[row][col]).innerHTML = number;
  mainArray[row][col] = number;

  if (allPlace.length >= size * size) {
    console.log("No more empty positions");
    return;
  }
}

function rightSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      righShift();
      // if (mainArray[i][j] === 2 || mainArray[i][j] == 4) {
      if (mainArray[i][j] == mainArray[i][j + 1]) {
        mainArray[i][j + 1] = mainArray[i][j] + mainArray[i][j + 1];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i}${j + 1}`).innerHTML = mainArray[i][j + 1];
        document.getElementById(mainArray[i][j]).innerHTML = "";
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
      }
    }
  }
}
// }

function leftSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      leftShift();
      // if (mainArray[i][j] === 2 || mainArray[i][j] == 4) {
      if (mainArray[i][j] == mainArray[i][j - 1]) {
        mainArray[i][j - 1] = mainArray[i][j] + mainArray[i][j - 1];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i}${j - 1}`).innerHTML = mainArray[i][j - 1];
        document.getElementById(mainArray[i][j]).innerHTML = "";
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
      }
    }
  }
}
// }

function topSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      topShift();
      // if (mainArray[i][j] === 2 || mainArray[i][j] == 4) {
      if (i > 0 && mainArray[i][j] == mainArray[i - 1][j]) {
        mainArray[i - 1][j] = mainArray[i][j] + mainArray[i - 1][j];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i - 1}${j}`).innerHTML = mainArray[i - 1][j];
        document.getElementById(mainArray[i][j]).innerHTML = "";
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
      }
    }
  }
}

function downSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      downShift();
      if (i < 4 && i >= 0 && mainArray[i][j] == mainArray[i + 1][j]) {
        mainArray[i + 1][j] = mainArray[i][j] + mainArray[i + 1][j];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i + 1}${j}`).innerHTML = mainArray[i + 1][j];
        document.getElementById(mainArray[i][j]).innerHTML = "";
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
      }
    }
  }
}

function righShift() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i <= size && mainArray[i][j + 1] == `${i}${j + 1}`) {
          mainArray[i][j + 1] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;
          console.log(mainArray);

          document.getElementById(`${i}${j + 1}`).innerHTML =
            mainArray[i][j + 1];

          document.getElementById(`${i}${j}`).innerHTML = "";

          allPlace.push(`${i}${j + 1}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        }
      }
    }
  }
}

function leftShift() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i >= 0 && mainArray[i][j - 1] == `${i}${j - 1}`) {
          mainArray[i][j - 1] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i}${j - 1}`).innerHTML =
            mainArray[i][j - 1];

          document.getElementById(`${i}${j}`).innerHTML = "";

          allPlace.push(`${i}${j - 1}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        }
      }
    }
  }
}

function topShift() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i > 0 && mainArray[i - 1][j] == `${i - 1}${j}`) {
          mainArray[i - 1][j] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i - 1}${j}`).innerHTML =
            mainArray[i - 1][j];

          document.getElementById(`${i}${j}`).innerHTML = "";

          allPlace.push(`${i - 1}${j}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        }
      }
    }
  }
}

function downShift() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (mainArray[i + 1][j] == `${i + 1}${j}`) {
          mainArray[i + 1][j] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i + 1}${j}`).innerHTML =
            mainArray[i + 1][j];

          document.getElementById(`${i}${j}`).innerHTML = "";

          allPlace.push(`${i + 1}${j}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        }
      }
    }
  }
}
