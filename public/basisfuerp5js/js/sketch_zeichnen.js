
// save this file as sketch.js

// Sketch Zeichnen
var t = function( p ) { // p could be any variable name
let xwidth = 800;
let yheight = 800;
  p.setup = function() {
   //p.createCanvas(xwidth, yheight);
   p.background(200);
  };

  p.draw = function() {
   p.background(255);
   p.stroke(255);
   p.strokeWeight(1);
   p.fill(0);
   if (mouseIsPressed === true) {
     stroke(0);
     line(mouseX, mouseY, pmouseX, pmouseY);
   } else {
     stroke(255);
   }
  };
};
var myp5 = new p5(t, 'zeichnen');
