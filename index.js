let size = 4;

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.key === "ArrowUp") {
    console.log("up arrow pressed");
  } else if (e.key === "ArrowDown") {
    console.log("down arrow pressed");
  } else if (e.key === "ArrowLeft") {
    console.log("left arrow pressed");
  } else if (e.key === "ArrowRight") {
    console.log("right arrow pressed");
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
      mainArray[i][j] = 0;
      div += `<div class="box" id="${mainArray[i][j]}" onkeyup="keyHandle(this.id)"></div>`;
    }
  }

  document.getElementById("container").innerHTML = div;
  console.log(mainArray);
}

displayBox();

function genarateRandomNumber() {
  let randomRow = Math.floor(Math.random() * size);
  let randomCol = Math.floor(Math.random() * size);

  console.log(randomRow, randomCol);
  mainArray[randomRow][randomCol] = "*";

  document.getElementById(mainArray[randomRow][randomCol]).innerHTML = "*";
}

genarateRandomNumber();
