let canvas;
let x, y;
let stepx, stepy;

function setup() {
    // put drawing code here
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    background(255);

    button = createButton("Image Speichern");
    button.mousePressed(saveImage)
    button.position(windowWidth - 180, windowHeight - 50)

    x = width / 2;
    y = height / 2;
}

function draw() {
    // put drawing code here
    stroke(0);
    strokeWeight(1);
    point(x, y)
    
    stepx = random(-1, 1);
    stepy = random(-1, 1);

    x += stepx;
    y += stepy;
}

function saveImage() {
    saveCanvas('RandomWalker', 'jpg');
}
