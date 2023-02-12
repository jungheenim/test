
// save this file as sketch.js

// Sketch Arc
var t = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
  };
};
var myp5 = new p5(t, 'arc');


// Sketch Ellipse
var s = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.ellipse(56, 46, 80, 55);
  };
};
var myp5 = new p5(s, 'ellipse');


// Sketch Circle
var r = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.circle(30, 30, 20);
  };
};
var myp5 = new p5(r, 'circle');


// Sketch Line
var u = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.line(30, 20, 85, 75);
  };
};
var myp5 = new p5(u, 'line');


// Sketch Point
var w = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.point(30, 20);
   p.strokeWeight(10);
   p.point(85, 20);
   p.point(85, 75);
   p.point(30, 75);
  };
};
var myp5 = new p5(w, 'point');


// Sketch Quad
var v = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.quad(38, 31, 86, 20, 69, 63, 30, 76);
  };
};
var myp5 = new p5(v, 'quad');


// Sketch Rect
var h = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.rect(30, 20, 40, 40);
   p.rect(80, 20, 40, 40, 20);
   p.rect(130, 20, 40, 40, 20, 15, 10, 5);
  };
};
var myp5 = new p5(h, 'rect');


// Sketch Square
var m = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.square(30, 20, 40);
   p.square(80, 20, 40, 20);
   p.square(130, 20, 40, 20, 15, 10, 5);
  };
};
var myp5 = new p5(m, 'square');


// Sketch Triangle
var n = function( p ) { // p could be any variable name
let xwidth = 200;
  p.setup = function() {
   p.createCanvas(xwidth, 200);
  };

  p.draw = function() {
   p.background(220);
   p.triangle(30, 75, 58, 20, 86, 75);
  };
};
var myp5 = new p5(n, 'triangle');
