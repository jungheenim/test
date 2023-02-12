var animate = true; //Turn this to true if your computer can handle it at the level of detail that you've set
var angle = 0; //You can change this manually, or use the slider in the output
var limit = 4; //Turn this up for less lag. A good number for smooth animation is 4
var scrub = 0.01; //Slider bar scrubbing detail
var animMult = 0.0002; //Multiply animation speed
var sizeMult = 0.26; //Fractal size relative to screen. Larger multipliers will increase detail
var brLenRatio = 0.67; //Size of child branch relative to parent
var canvasSize = 600;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  //createCanvas(canvasSize, canvasSize);
  slider = createSlider(0, TWO_PI, QUARTER_PI, scrub);

  button = createButton("Image Speichern");
  button.mousePressed(saveImage)
  button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
  stroke(200);
  strokeWeight(1);
  background(50);

  if (animate === true) {
    angle = slider.value() + (millis() * animMult);
  } else {
    angle = slider.value();
  }

  translate(width / 2, height);
  branch(height * sizeMult);
}

function branch(length) {
  line(0, 0, 0, -length);
  translate(0, -length);
  push();
  rotate(angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();
  push();
  rotate(-angle);
  if (length > limit) {
    branch(length * brLenRatio);
  }
  pop();
}

function saveImage() {
 saveCanvas('Fractal', 'jpg');
}
