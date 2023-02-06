// var canvas;
//
// function setup() {
//   // put drawing code here
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.position(0, 0);
//   canvas.style('z-index', '-1');
//   background(255);
// }
//
// function draw() {
//   // put drawing code here
//   frameRate(1);
//   noStroke();
//   frameRate(10);
//   fill(random(255), random(255), random(255), 10);
//   ellipse(random(windowWidth), random(windowHeight), random(10, 500), random(10, 500));
// }
//
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

var canvas;
let a;
let b;
let c;

function setup() {
  // put drawing code here
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  a = random(255);
  b = random(255);
  c = random(255);
}

function draw() {
  // put drawing code here
  background(255, 30);
  noStroke();
  frameRate(10);
  fill(a, b, c, 50);
  ellipse(mouseX, mouseY, 50, 50);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
