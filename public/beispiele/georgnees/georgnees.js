var rows = 24;
var cols = 12;
var rectsize = 30;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  background(255);

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)

  noFill();
  strokeWeight(1);
  rectMode(CENTER);

  for (var r = 0; r <= rows; r++) {
    for (var c = 0; c <= cols; c++) {
      push();
      translate(c * rectsize, r * rectsize);
      rotate(radians(random(-r * 3, r * 3)) / 5);
      rect(0 + random(-r + rectsize * 2, r + rectsize * 2) / 2, 0 + random(-r + rectsize * 2, r + rectsize * 2) / 2, rectsize, rectsize);
      pop();
    }
  }
}

function saveImage() {
 saveCanvas('GeorgNees', 'jpg');
}
