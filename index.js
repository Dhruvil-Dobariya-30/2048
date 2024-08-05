let div = document.getElementById("container");
let mainArray = [];
let allPlace = [];
let size = 4;
let score = 0;

document.onkeydown = (e) => {
  e = e || window.event;
  isChange = false;

  if (e.key === "ArrowUp") {
    topMove();
    topSum();
  } else if (e.key === "ArrowDown") {
    downMove();
    downSum();
  } else if (e.key === "ArrowLeft") {
    leftMove();
    leftSum();
  } else if (e.key === "ArrowRight") {
    rightMove();
    rightSum();
  }

  if (checkWin()) {
    document.getElementById("msg").innerHTML = "You Won!!!";
    document.onkeydown = null;
  } else {
    if (isChange) {
      generateIndex();
    }
  }
};

function displayBox() {
  let div = "";
  for (let i = 0; i < size; i++) {
    mainArray[i] = [];
    div += "<br/>";
    for (let j = 0; j < size; j++) {
      mainArray[i][j] = `${i}${j}`;
      div += `<div class="box" id="${mainArray[i][j]}"></div>`;
    }
  }
  document.getElementById("container").innerHTML = div;
  generateTwoNum();
}
displayBox();

function generateTwoNum() {
  generateIndex();
  generateIndex();
}

function generateIndex() {
  let randomRow = Math.floor(Math.random() * size);
  let randomCol = Math.floor(Math.random() * size);

  try {
    let position = `${randomRow}${randomCol}`;

    if (!allPlace.includes(position)) {
      allPlace.push(position);
      generateNumber(randomRow, randomCol);
    } else {
      generateIndex();
    }
  } catch (err) {
    console.log(err);
    // alert("GAME OVER!!!");
    // document.getElementById("msg").innerHTML = "GAME OVER!!!";
  }
}

function generateNumber(row, col) {
  let number;
  let num = Math.random().toFixed(3) * 1000;
  if (num % 2 === 0) {
    number = 2;
  } else {
    number = 4;
  }

  document.getElementById(mainArray[row][col]).innerHTML = number;
  document.getElementById(mainArray[row][col]).classList.add("change");

  mainArray[row][col] = number;

  if (allPlace.length >= 16) {
    document.getElementById("msg").innerHTML = "GAME OVER!!!";
    document.onkeydown = null;
    return;
  }
}

function rightMove() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i < size && mainArray[i][j + 1] == `${i}${j + 1}`) {
          mainArray[i][j + 1] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i}${j + 1}`).innerHTML =
            mainArray[i][j + 1];
          document.getElementById(`${i}${j + 1}`).classList.add("change");

          document.getElementById(`${i}${j}`).innerHTML = "";
          document.getElementById(`${i}${j}`).classList.remove("change");

          allPlace.push(`${i}${j + 1}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
          isChange = true;
        }
      }
    }
  }
}

function rightSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      rightMove();
      if (mainArray[i][j] === mainArray[i][j + 1]) {
        mainArray[i][j + 1] = mainArray[i][j] + mainArray[i][j + 1];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i}${j + 1}`).innerHTML = mainArray[i][j + 1];
        document.getElementById(`${i}${j + 1}`).classList.add("change");

        document.getElementById(mainArray[i][j]).innerHTML = "";
        document.getElementById(`${i}${j}`).classList.remove("change");

        document.querySelector(".score").innerHTML = `Score : ${(score +=
          mainArray[i][j + 1])}`;
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        isChange = true;
        checkHighScore();
      }
    }
  }
}

function leftMove() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i >= 0 && mainArray[i][j - 1] == `${i}${j - 1}`) {
          mainArray[i][j - 1] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i}${j - 1}`).innerHTML =
            mainArray[i][j - 1];
          document.getElementById(`${i}${j - 1}`).classList.add("change");

          document.getElementById(`${i}${j}`).innerHTML = "";
          document.getElementById(`${i}${j}`).classList.remove("change");

          allPlace.push(`${i}${j - 1}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
          isChange = true;
        }
      }
    }
  }
}

function leftSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      leftMove();
      if (mainArray[i][j] === mainArray[i][j - 1]) {
        mainArray[i][j - 1] = mainArray[i][j] + mainArray[i][j - 1];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i}${j - 1}`).innerHTML = mainArray[i][j - 1];
        document.getElementById(`${i}${j - 1}`).classList.add("change");

        document.getElementById(mainArray[i][j]).innerHTML = "";
        document.getElementById(`${i}${j}`).classList.remove("change");

        document.querySelector(".score").innerHTML = `Score : ${(score +=
          mainArray[i][j - 1])}`;
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        isChange = true;
        checkHighScore();
      }
    }
  }
}

function topMove() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i > 0 && mainArray[i - 1][j] == `${i - 1}${j}`) {
          mainArray[i - 1][j] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i - 1}${j}`).innerHTML =
            mainArray[i - 1][j];
          document.getElementById(`${i - 1}${j}`).classList.add("change");

          document.getElementById(`${i}${j}`).innerHTML = "";
          document.getElementById(`${i}${j}`).classList.remove("change");

          allPlace.push(`${i - 1}${j}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
          isChange = true;
        }
      }
    }
  }
}

function topSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      topMove();
      if (i > 0 && mainArray[i][j] === mainArray[i - 1][j]) {
        mainArray[i - 1][j] = mainArray[i][j] + mainArray[i - 1][j];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i - 1}${j}`).innerHTML = mainArray[i - 1][j];
        document.getElementById(`${i - 1}${j}`).classList.add("change");

        document.getElementById(mainArray[i][j]).innerHTML = "";
        document.getElementById(`${i}${j}`).classList.remove("change");

        document.querySelector(".score").innerHTML = `Score : ${(score +=
          mainArray[i - 1][j])}`;
        allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
        isChange = true;
        checkHighScore();
      }
    }
  }
}

function downMove() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] !== `${i}${j}`) {
        if (i < size - 1 && mainArray[i + 1][j] == `${i + 1}${j}`) {
          mainArray[i + 1][j] = mainArray[i][j];
          mainArray[i][j] = `${i}${j}`;

          document.getElementById(`${i + 1}${j}`).innerHTML =
            mainArray[i + 1][j];
          document.getElementById(`${i + 1}${j}`).classList.add("change");

          document.getElementById(`${i}${j}`).innerHTML = "";
          document.getElementById(`${i}${j}`).classList.remove("change");

          allPlace.push(`${i + 1}${j}`);
          allPlace = allPlace.filter((data) => data !== mainArray[i][j]);
          isChange = true;
        }
      }
    }
  }
}

function downSum() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i < size - 1 && mainArray[i][j] === mainArray[i + 1][j]) {
        mainArray[i + 1][j] = mainArray[i][j] + mainArray[i + 1][j];
        mainArray[i][j] = `${i}${j}`;

        document.getElementById(`${i + 1}${j}`).innerHTML = mainArray[i + 1][j];
        document.getElementById(`${i + 1}${j}`).classList.add("change");

        document.getElementById(`${i}${j}`).innerHTML = "";
        document.getElementById(`${i}${j}`).classList.remove("change");

        document.querySelector(".score").innerHTML = `Score : ${(score +=
          mainArray[i + 1][j])}`;
        allPlace = allPlace.filter((data) => data !== `${i}${j}`);
        isChange = true;
        checkHighScore();
      }
    }
  }
}

function checkHighScore() {
  let highScore = localStorage.getItem("highScore") || 0;
  document.querySelector(".highScore").innerHTML = `High Score : ${highScore}`;
  if (score > highScore) {
    localStorage.setItem("highScore", score);
    document.querySelector(".highScore").innerHTML = `High Score : ${score}`;
  }
}
checkHighScore();

function checkWin() {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (mainArray[i][j] === 2048) {
        return true;
      }
    }
  }
  return false;
}

function restart() {
  location.reload();
}
