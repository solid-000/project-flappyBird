import { bird, isColliding } from "./bird";
import { scoreUp } from "..";

const planeX = document.querySelector(".plane-x");
const planeY = document.querySelector(".plane-y");
const pipeColumn = document.querySelector(".pipe-column");
const wrapper = document.querySelector(".game-box");
let velocityX = 0;

function startMovement() {
  velocityX = 3;
}
function stopMovement() {
  velocityX = 0;
}

function Pipe() {
  let gapTrigger = 0,
    scoreTrigger = 0,
    collisionTrigger = 0;

  const column = document.createElement("div");
  column.classList.add("pipe-column");
  const pipeTop = document.createElement("div");
  const pipeBottom = document.createElement("div");
  pipeTop.classList.add("pipe-top");
  pipeBottom.classList.add("pipe-bottom");
  pipeTop.style.height = `${Math.floor(Math.random() * 81) + 10}%`;
  column.append(pipeTop, pipeBottom);

  column.style.left = window.getComputedStyle(wrapper).width;

  //Pipes move constantly based on the velocity
  const moveColumn = setInterval(() => {
    let pos = parseInt(window.getComputedStyle(column).left);
    let wrapperWidth = parseInt(window.getComputedStyle(wrapper).width);

    pos -= velocityX;

    //Removes column once it has moved far enough.
    column.style.left = `${pos}px`;
    if (pos < -200) {
      column.remove();
      clearInterval(moveColumn);
    }

    //    Triggers makePipe() once the column has scrolled far enough.
    if (gapTrigger === 0) {
      if (wrapperWidth - pos >= 300) {
        makePipe();
        gapTrigger = 1;
      }
    }

    // Triggers scoreUp() once the bird has passed the column.
    if (scoreTrigger === 0) {
      if (arePipesLeftOfPlaneY(column, planeY)) {
        scoreUp();
        scoreTrigger = 1;
      }
    }
  }, 25);

  return column;
}

function makePipe() {
  const newPipe = Pipe();
  planeX.append(newPipe);
}

function birdPipeCollision(b, pTop, pBot) {
  return isColliding(b, pTop) || isColliding(b, pBot);
}

function arePipesLeftOfPlaneY(pipes, plane) {
  let rect1 = pipes.getBoundingClientRect();
  let rect2 = plane.getBoundingClientRect();
  const offset = rect2.width;

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left - offset ||
    rect1.left > rect2.right - offset
  );
}

makePipe();
export { startMovement };
