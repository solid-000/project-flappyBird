import { bird, isColliding } from "./bird";
const planeX = document.querySelector(".plane-x");
const pipeColumn = document.querySelector(".pipe-column");
const wrapper = document.querySelector(".game-box");
let velocityX = 3;

function startMovement() {
  velocityX = 3;
}
function stopMovement() {
  velocityX = 0;
}

function Pipe() {
  let triggered = 0;
  let gapInterval;

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
  const moveColumnLeft = setInterval(() => {
    birdPipeCollision(bird, pipeTop, pipeBottom);
    let pos = parseInt(window.getComputedStyle(column).left);
    pos -= velocityX;
    column.style.left = `${pos}px`;
    if (pos < -200) {
      column.remove();
      clearInterval(moveColumnLeft);
    }

    // Triggers makePipe() once the column has scrolled far enough, then clears itself.
    gapInterval = setInterval(() => {
      if (triggered == 0) {
        let pos = parseInt(window.getComputedStyle(column).left);
        if (parseInt(window.getComputedStyle(wrapper).width) - pos >= 300) {
          triggered = 1;
          makePipe();
        }
      } else {
        clearInterval(gapInterval);
      }
    }, 1);
  }, 25);

  return column;
}

function makePipe() {
  const newPipe = Pipe();
  planeX.append(newPipe);
}

function birdPipeCollision(b, pTop, pBot) {
  //   console.log(isColliding(b, pTop) || isColliding(b, pBot));
}

makePipe();
export { startMovement };
