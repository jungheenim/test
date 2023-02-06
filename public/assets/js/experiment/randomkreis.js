var canvas;

function setup() {
  // put drawing code here
  canvas = createCanvas(windowWidth, windowHeight);
  background(random(255), random(255), random(255), 50);

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  // put drawing code here
  frameRate(2)
  noStroke();
  fill(random(255), random(255), random(255), 70);
  ellipse(random(windowWidth), random(windowHeight), random(10, 300), random(10, 300));
}

function saveImage() {
 saveCanvas('RandomKreis', 'jpg');
}
