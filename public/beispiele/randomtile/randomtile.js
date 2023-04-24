let ra, di;
let quad1, quad2, quad3, quad4, quad5, quad6, quad7, quad8, quad9, quad10, quad11, quad12, quad13, quad14, quad15;


let cols = ['red', 'green', 'blue', 'purple', 'white', 'yellow'];
let redcount, greencount, bluecount, purplecount, whitecount, yellowcount = [];
let li = [];

function randomColor() {
    for (i = 0; i < 15; i++) {
        li.push(cols[floor(random(6))]);

        redcount = li.filter(col => col === cols[0]);
        greencount = li.filter(col => col === cols[1]);
        bluecount = li.filter(col => col === cols[2]);
        purplecount = li.filter(col => col === cols[3]);
        whitecount = li.filter(col => col === cols[4]);
        yellowcount = li.filter(col => col === cols[5]);

        if (redcount.length > 3) {
            li.splice(li.lastIndexOf(cols[0]), 1);
            i--;
        } else if (greencount.length > 3) {
            li.splice(li.lastIndexOf(cols[1]), 1);
            i--;
        } else if (bluecount.length > 3) {
            li.splice(li.lastIndexOf(cols[2]), 1);
            i--;
        } else if (purplecount.length > 3) {
            li.splice(li.lastIndexOf(cols[3]), 1);
            i--;
        } else if (whitecount.length > 3) {
            li.splice(li.lastIndexOf(cols[4]), 1);
            i--;
        } else if (yellowcount.length > 3) {
            li.splice(li.lastIndexOf(cols[5]), 1);
            i--;
        }
    }
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 100);
    canvas.style('z-index', '-1');

    createCanvas(250, 370);
    background(200, 255, 200, 150);
    ra = 30;
    di = 30;

    button = createButton("Image Speichern");
    button.mousePressed(saveImage)
    button.position(windowWidth - 180, windowHeight - 50)
}

function draw() {
    stroke(0);
    strokeWeight(1);

    randomColor();

    fill(li[0]);
    quad1 = quad(ra + di, ra, ra + 2 * di, ra + di, ra + di, ra + 2 * di, ra, ra + di);
    fill(li[1])
    quad2 = quad(ra + di, ra + 2 * di, ra + 2 * di, ra + 3 * di, ra + di, ra + 4 * di, ra, ra + 3 * di);
    fill(li[2])
    quad3 = quad(ra + di, ra + 4 * di, ra + 2 * di, ra + 5 * di, ra + di, ra + 6 * di, ra, ra + 5 * di);
    fill(li[3])
    quad4 = quad(ra + di, ra + 6 * di, ra + 2 * di, ra + 7 * di, ra + di, ra + 8 * di, ra, ra + 7 * di);
    fill(li[4])
    quad5 = quad(ra + di, ra + 8 * di, ra + 2 * di, ra + 9 * di, ra + di, ra + 10 * di, ra, ra + 9 * di);
    fill(li[5])
    quad6 = quad(ra + 3 * di, ra, ra + 4 * di, ra + di, ra + 3 * di, ra + 2 * di, ra + 2 * di, ra + di);
    fill(li[6])
    quad7 = quad(ra + 3 * di, ra + 2 * di, ra + 4 * di, ra + 3 * di, ra + 3 * di, ra + 4 * di, ra + 2 * di, ra + 3 * di);
    fill(li[7])
    quad8 = quad(ra + 3 * di, ra + 4 * di, ra + 4 * di, ra + 5 * di, ra + 3 * di, ra + 6 * di, ra + 2 * di, ra + 5 * di);
    fill(li[8])
    quad9 = quad(ra + 3 * di, ra + 6 * di, ra + 4 * di, ra + 7 * di, ra + 3 * di, ra + 8 * di, ra + 2 * di, ra + 7 * di);
    fill(li[9])
    quad10 = quad(ra + 3 * di, ra + 8 * di, ra + 4 * di, ra + 9 * di, ra + 3 * di, ra + 10 * di, ra + 2 * di, ra + 9 * di);
    fill(li[10])
    quad11 = quad(ra + 5 * di, ra, ra + 6 * di, ra + di, ra + 5 * di, ra + 2 * di, ra + 4 * di, ra + di);
    fill(li[11])
    quad12 = quad(ra + 5 * di, ra + 2 * di, ra + 6 * di, ra + 3 * di, ra + 5 * di, ra + 4 * di, ra + 4 * di, ra + 3 * di);
    fill(li[12])
    quad13 = quad(ra + 5 * di, ra + 4 * di, ra + 6 * di, ra + 5 * di, ra + 5 * di, ra + 6 * di, ra + 4 * di, ra + 5 * di);
    fill(li[13])
    quad14 = quad(ra + 5 * di, ra + 6 * di, ra + 6 * di, ra + 7 * di, ra + 5 * di, ra + 8 * di, ra + 4 * di, ra + 7 * di);
    fill(li[14])
    quad15 = quad(ra + 5 * di, ra + 8 * di, ra + 6 * di, ra + 9 * di, ra + 5 * di, ra + 10 * di, ra + 4 * di, ra + 9 * di);
    noFill();
    rect(ra, ra, 6 * di, 10 * di);
    noLoop();
}

function saveImage() {
    saveCanvas('RandomKreis', 'jpg');
   }
   