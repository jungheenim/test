let slider;
var canvas;
let pointx;
let pointy;
let range;
let button;

function setup() {
  // put drawing code here
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  background(random(255), random(255), random(255), 50);

  //textSize(16);
  sizeSlider = createSlider(10, 500, 100, 10);
  sizeSlider.position(windowWidth - 180, windowHeight - 120);
  sizeSlider.style('width', '150px');
  speedSlider = createSlider(0.1, 10, 1, 0.1);
  speedSlider.position(windowWidth - 180, windowHeight - 90);
  speedSlider.style('width', '150px');

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  // put drawing code here
  fill(0);
  //text('Geschwindigkeit', windowWidth - 300, windowHeight - 34);
  let speed = speedSlider.value();
  //text('Maximale Größe', windowWidth - 300, windowHeight - 64);
  let range = sizeSlider.value();
  frameRate(speed);
  noStroke();
  fill(random(255), random(255), random(255));
  pointx = random(windowWidth);
  pointy = random(windowHeight);
  quad(pointx, pointy, random(pointx - range, pointx + range), random(pointy - range, pointy + range), random(pointx - range, pointx + range), random(pointy - range, pointy + range), random(pointx - range, pointx + range), random(pointy - range, pointy + range));
}

function saveImage() {
 saveCanvas('UnendlicheVierecke', 'jpg');
}
