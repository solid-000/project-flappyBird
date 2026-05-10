import { bird, isColliding } from "./bird";
const planeX = document.querySelector(".plane-x");
const pipeColumn = document.querySelector(".pipe-column");

let velocityX = 3;
let pipeInterval;

function startMovement() {
  velocityX = 3;
}
function stopMovement() {
  velocityX = 0;
}

// const movePipesLeft = setInterval(() => {
//   let pos = parseInt(window.getComputedStyle(pipeColumn).marginLeft);
//   pos -= velocityX;
//   pipeColumn.style.marginLeft = `${pos}px`;
// }, 25);

function Pipe() {
  const column = document.createElement("div");
  column.classList.add("pipe-column");
  const pipeTop = document.createElement("div");
  const pipeBottom = document.createElement("div");
  pipeTop.classList.add("pipe-top");
  pipeBottom.classList.add("pipe-bottom");
  pipeTop.style.height = `${Math.floor(Math.random() * 81) + 10}%`;
  column.append(pipeTop, pipeBottom);
  column.style.left = `${screen.width}px`;
  const moveColumnLeft = setInterval(() => {
    birdPipeCollision(bird, pipeTop, pipeBottom);
    let pos = parseInt(window.getComputedStyle(column).left);
    pos -= velocityX;
    column.style.left = `${pos}px`;
    if (pos < -200) {
      column.remove();
      clearInterval(moveColumnLeft);
    }
  }, 25);
  return column;
}

function startPipeFactory() {
  pipeInterval = setInterval(() => {
    const newPipe = Pipe();
    planeX.append(newPipe);
  }, 3000);
}
function stopPipeFactory() {
  clearInterval(pipeInterval);
}

function birdPipeCollision(b, pTop, pBot) {
  //   console.log(isColliding(b, pTop) || isColliding(b, pBot));
}

startPipeFactory();
export { startMovement };
