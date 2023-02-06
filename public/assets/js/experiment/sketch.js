var canvas;

function setup() {
  // put drawing code here
  canvas = createCanvas(windowWidth, windowHeight);
  background(255);

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  // put drawing code here
  stroke(255);
  strokeWeight(1);
  fill(0);
  if (mouseIsPressed === true) {
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else {
    stroke(255);
  }
}

function saveImage() {
 saveCanvas('Sketch', 'jpg');
}
