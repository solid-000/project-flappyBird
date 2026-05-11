"use strict";
import "./styles.css";
import { startGravity, moveBird, flap } from "./modules/bird";
import { startMovement } from "./modules/pipes";
import { clickEnabled } from "./modules/common";

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
}

startGameLoop();
startMovement();
