let x = 15.0, y = 15.0, velocity_y = 3.0;
let slider;
function setup() {
  createCanvas(500, 500);
  background(0);
  slider_x = createSlider(-10, 10, 1, 1);
  slider_x.position(10, 10);
  slider_x.style('width', '80px');
  slider_y = createSlider(-10, 10, 1, 1);
  slider_y.position(200, 10);
  slider_y.style('width', '80px');
}

function draw() {
  let val_x = slider_x.value();
  let val_y = slider_y.value();

  ellipse(x, y, 30, 30);
  x += val_x;
  y += val_y;
 
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}