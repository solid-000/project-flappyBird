const bird = document.querySelector(".bird");
const planeY = document.querySelector(".plane-y");
const planeX = document.querySelector(".plane-x");
const ground = document.querySelector(".ground");
// const dummy = document.querySelector(".dummy");

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

const moveBirdDown = setInterval(() => {
  onGround();
  pos = parseInt(window.getComputedStyle(bird).top);
  if (pos <= 0) {
    pos = 0;
  }
  pos += velocityY;
  bird.style.top = `${pos}px`;
}, 25);

let click = planeX.addEventListener("click", () => {
  flap();
});

function flap() {
  velocityY = -12;
}

function isColliding(div1, div2) {
  let rect1 = div1.getBoundingClientRect();
  let rect2 = div2.getBoundingClientRect();

  return !(
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.left > rect2.right
  );
}

function onGround() {
  if (isColliding(bird, ground)) {
    stopGravity();
  }
}

startGravity();
export { startGravity };
