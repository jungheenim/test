
// save this file as sketch.js

// Sketch Mousexy
var t = function( p ) { // p could be any variable name
let xwidth = 800;
let yheight = 800;
  p.setup = function() {
   p.createCanvas(xwidth, yheight);
  };

  p.draw = function() {
   p.background(220);
   p.circle(winMouseX, winMouseY, 30);
  };
};
var myp5 = new p5(t, 'mousexy');
