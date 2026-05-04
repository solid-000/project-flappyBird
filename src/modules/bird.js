const bird = document.querySelector(".bird");
const planeY = document.querySelector(".plane-y");
const planeX = document.querySelector(".plane-x");
const ground = document.querySelector(".ground");
// const dummy = document.querySelector(".dummy");

let velocity = 0;
let pos = 0;
let gravity = -1000;

function startGravity() {
  gravity = setInterval(() => {
    velocity += 0.6;
  }, 25);
}
function stopGravity() {
  velocity = 0;
  clearInterval(gravity);
}

const moveBird = setInterval(() => {
  onGround();
  pos = parseInt(window.getComputedStyle(bird).top);
  if (pos <= 0) {
    pos = 0;
  }
  pos += velocity;
  bird.style.top = `${pos}px`;
}, 25);

planeX.addEventListener("click", () => {
  flap();
});

function flap() {
  velocity = -13;
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

export { startGravity };
