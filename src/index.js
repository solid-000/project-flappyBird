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
const gameStartButton = document.querySelector(".start-game");

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
  makePipe();
  startGameLoop();
  enableClick();
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

gameStartButton.addEventListener("click", () => {
  gameStartButton.remove();
  startGame();
});

export { reset, stopGameLoop, gameStartButton };
