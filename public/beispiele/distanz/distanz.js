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
  let d = dist(width/2, height/2, mouseX, mouseY);
  stroke(255);
  strokeWeight(5);
  point(width/2, height/2);
  strokeWeight(1);
  fill(255);
  textSize(29);
  text(d, mouseX, mouseY);
  point(mouseX, mouseY);
  line(width/2, height/2, mouseX, mouseY);
}

function saveImage() {
  saveCanvas('Fractal', 'jpg');
 }
 