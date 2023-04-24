let x = 15.0, y = 15.0, velocity_x = 4.0, velocity_y = 3.0
  ;
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
  background(0);
  ellipse(x, y, 30, 30);
  x += velocity_x;
  y += velocity_y;
  if (x < 15 || x > width - 15) {
    velocity_x *= -1;
  }
  if (y < 15 || y > height - 15) {
    velocity_y *= -1;
  }
}

function saveImage() {
  saveCanvas('Fractal', 'jpg');
 }