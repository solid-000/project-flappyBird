import { stopMovement } from "./pipes";
import { stopGravity } from "./bird";
import { reset, stopGameLoop } from "..";

const scoreBoard = document.querySelector(".score-board");

//Score functions
let score = 0;
function scoreUp() {
  score++;
  scoreBoard.textContent = score;
  scoreBoard.style.top = "20px";
}

//Collision functions
function isColliding(div1, div2) {
  let rect1 = div1.getBoundingClientRect();
  let rect2 = div2.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

//Click functions
let clickEnabled = 0;
function enableClick() {
  clickEnabled = 1;
}
function disableClick() {
  clickEnabled = 0;
}

function gameOver() {
  stopGameLoop();
  stopGravity();
  stopMovement();
  disableClick();
  // setTimeout(() => {
  //   reset();
  // }, 2000);
}

export {
  isColliding,
  scoreUp,
  score,
  clickEnabled,
  enableClick,
  disableClick,
  gameOver,
};
