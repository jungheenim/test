let theta = 0.0, r = 0.0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  //createCanvas(canvasSize, canvasSize);

  background(0);

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  background(0, 1);
  let x = width / 2 + r * cos(theta);
  let y = height / 2 - r * sin(theta);
  rectMode(CENTER);
  stroke(255);
  //strokeWeight(10);
  noFill();
  //line(width / 2, height / 2, x, y);
  ellipse(x, y, r, r);
  theta += 0.05;
  r += 0.2;
}

function saveImage() {
  saveCanvas('Fractal', 'jpg');
 }
 