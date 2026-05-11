"use strict";
import "./styles.css";
import { startGravity, moveBirdDown } from "./modules/bird";
import { startMovement } from "./modules/pipes";

let gameInterval;

function startGameLoop() {
  gameInterval = setInterval(() => {
    moveBirdDown();
  }, 25);
}

startGameLoop();
