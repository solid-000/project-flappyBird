"use strict";
import "./styles.css";
import { startGravity, moveBirdDown } from "./modules/bird";
import { startMovement } from "./modules/pipes";

let gameInterval;
let score = 0;

function scoreUp() {
  score++;
}

function startGameLoop() {
  gameInterval = setInterval(() => {
    moveBirdDown();
  }, 25);
}

startGameLoop();
startMovement();

export { scoreUp };
