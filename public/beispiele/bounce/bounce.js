let a = 0, r = 300;
let theta = 0.0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  background(0, 15);
  a = Math.abs(sin(theta));
  let y = map(sin(theta), -1, 1, 15, height - 15);
  fill(255, 0, 200, 50)
  noStroke();
  ellipse(width / 2, height / 2, a * r, a * r);
  theta += 0.1;
}

function saveImage() {
  saveCanvas('Fractal', 'jpg');
 }