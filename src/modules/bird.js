import { isColliding } from "./common";

const bird = document.querySelector(".bird");
const planeY = document.querySelector(".plane-y");
const planeX = document.querySelector(".plane-x");
const ground = document.querySelector(".ground");

let velocityY = 0;
let pos = 0;
let gravity;

function startGravity() {
  gravity = setInterval(() => {
    velocityY += 0.6;
  }, 25);
}
function stopGravity() {
  velocityY = 0;
  clearInterval(gravity);
}

function moveBird() {
  onGround();
  pos = parseInt(window.getComputedStyle(bird).top);
  if (pos <= 0) {
    pos = 0;
  }
  pos += velocityY;
  bird.style.top = `${pos}px`;
}

function flap() {
  velocityY = -12;
}

function onGround() {
  if (isColliding(bird, ground)) {
    stopGravity();
  }
}

startGravity();
export { startGravity, bird, moveBird, flap };
