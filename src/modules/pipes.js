const pipeColumn = document.querySelector(".pipe-column");

let velocityX = 3;

function startMovement() {
  velocityX = 3;
}
function stopMovement() {
  velocityX = 0;
}

const movePipesLeft = setInterval(() => {
  let pos = parseInt(window.getComputedStyle(pipeColumn).marginLeft);
  pos -= velocityX;
  pipeColumn.style.marginLeft = `${pos}px`;
}, 25);

startMovement();
export { startMovement };
