let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset-btn");
let newgame = document.querySelector("#New-btn");
let msgcontainer = document.querySelector(".msg-c");
let msg = document.querySelector("#msg");
let turn0 = true; // playerX , playerY

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetgame = () => {
  turn0 = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `Congratulations, the winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
  enableboxes();
};

const checkwinner = () => {
  for (let pattern of win) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos2val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newgame.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);
