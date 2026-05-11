//Score functions
let score = 0;
function scoreUp() {
  score++;
  console.log(score);
}

//Collision functions
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

//Click functions
let clickEnabled = 1;
function enableClick() {
  clickEnabled = 1;
}
function disableClick() {
  clickEnabled = 0;
}

export { isColliding, scoreUp, score, clickEnabled, enableClick, disableClick };
