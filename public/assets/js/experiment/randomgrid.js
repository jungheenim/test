let lineweight;
let xposition;
let yposition;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(255, 255, 255);

  lineweight = random(20);
}

function draw() {
  frameRate(1);

  xposition = random(lineweight/2, windowWidth - (lineweight/2));
  yposition = random(lineweight/2, windowHeight - (lineweight/2));
  stroke(0);
  strokeWeight(lineweight);
  let n = random(0, 1);
  if (n < 0.5) {
    line(xposition, 0, xposition, windowHeight);
  } else {
    line(0, yposition, windowWidth, yposition);
  }
}

function saveImage() {
 saveCanvas('RandomGrid', 'jpg');
}
