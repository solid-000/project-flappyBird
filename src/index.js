"use strict";
import "./styles.css";
import {
  startGravity,
  moveBird,
  flap,
  bird,
  stopGravity,
} from "./modules/bird";
import { startMovement, makePipe, stopMovement } from "./modules/pipes";
import { clickEnabled, disableClick, enableClick } from "./modules/common";

let gameInterval;

document.querySelector("body").addEventListener("click", () => {
  if (clickEnabled) {
    flap();
  }
});

function startGameLoop() {
  gameInterval = setInterval(() => {
    moveBird();
  }, 25);
  startGravity();
  startMovement();
}
function stopGameLoop() {
  clearInterval(gameInterval);
  stopGravity();
  stopMovement();
}

function startGame() {
  reset();
  setTimeout(() => {
    makePipe();
    startGameLoop();
    enableClick();
  }, 1000);
}

function reset() {
  disableClick();
  stopGameLoop();
  const pipes = document.querySelectorAll(".pipe-column");
  pipes.forEach((pipe) => {
    pipe.remove();
  });
  bird.style.top = "40%";
}

document.querySelector(".start-game").addEventListener("click", () => {
  startGame();
});

export { reset, stopGameLoop };
