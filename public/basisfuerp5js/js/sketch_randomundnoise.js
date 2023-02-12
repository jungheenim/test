
// save this file as sketch.js

// Sketch Random
var t = function( p ) { // p could be any variable name
let xoff = 0.0;
let xwidth = 800;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   xoff = xoff + 0.01;
   let n = random(xoff) * xwidth;
   p.fill(255);
   p.circle(n, 100, 50);
  };
};
var myp5 = new p5(t, 'random');


// Sketch Noise
var s = function( p ) { // p could be any variable name
let xoff = 0.0;
let xwidth = 800;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   xoff = xoff + 0.01;
   let n = noise(xoff) * xwidth;
   p.fill(255);
   p.circle(n, 100, 50);
  };
};
var myp5 = new p5(s, 'noise');
