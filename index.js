let allPlace = [];
let size = 4;

document.onkeydown = (e) => {
  e = e || window.event;
  let arrowPressed = false;

  if (e.key === "ArrowUp") {
    console.log("up arrow pressed");
    arrowPressed = true;
  } else if (e.key === "ArrowDown") {
    console.log("down arrow pressed");
    arrowPressed = true;
  } else if (e.key === "ArrowLeft") {
    console.log("left arrow pressed");
    arrowPressed = true;
  } else if (e.key === "ArrowRight") {
    console.log("right arrow pressed");
    arrowPressed = true;
    rightMove();
  }

  if (arrowPressed) {
    genarateIndex();
  }
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

function rightMove() {}
