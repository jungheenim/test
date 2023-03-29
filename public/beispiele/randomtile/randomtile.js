let ra, di;
let quad1, quad2, quad3, quad4, quad5, quad6, quad7, quad8, quad9, quad10, quad11, quad12, quad13, quad14, quad15;
let col = ['red', 'green', 'blue', 'purple', 'white', 'yellow'];

function setup() {
  createCanvas(250, 370);
  background(0);
  ra = 30;
  di = 30;
}

function draw() {
  //background(0);
  fill(col[floor(random(6))])
  quad1 = quad(ra + di, ra       , ra + 2*di, ra +   di, ra + di, ra + 2 *di, ra, ra +    di);
  fill(col[floor(random(6))])
  quad2 = quad(ra + di, ra + 2*di, ra + 2*di, ra + 3*di, ra + di, ra + 4 *di, ra, ra + 3 *di);
  fill(col[floor(random(6))])
  quad3 = quad(ra + di, ra + 4*di, ra + 2*di, ra + 5*di, ra + di, ra + 6 *di, ra, ra + 5 *di);
  fill(col[floor(random(6))])
  quad4 = quad(ra + di, ra + 6*di, ra + 2*di, ra + 7*di, ra + di, ra + 8 *di, ra, ra + 7 *di);
  fill(col[floor(random(6))])
  quad5 = quad(ra + di, ra + 8*di, ra + 2*di, ra + 9*di, ra + di, ra + 10*di, ra, ra + 9 *di);
  fill(col[floor(random(6))])
  quad6 =  quad(ra + 3*di, ra       , ra + 4*di, ra +   di, ra + 3*di, ra + 2 *di, ra + 2*di, ra +    di);
  fill(col[floor(random(6))])
  quad7 =  quad(ra + 3*di, ra + 2*di, ra + 4*di, ra + 3*di, ra + 3*di, ra + 4 *di, ra + 2*di, ra + 3 *di);
  fill(col[floor(random(6))])
  quad8 =  quad(ra + 3*di, ra + 4*di, ra + 4*di, ra + 5*di, ra + 3*di, ra + 6 *di, ra + 2*di, ra + 5 *di);
  fill(col[floor(random(6))])
  quad9 =  quad(ra + 3*di, ra + 6*di, ra + 4*di, ra + 7*di, ra + 3*di, ra + 8 *di, ra + 2*di, ra + 7 *di);
  fill(col[floor(random(6))])
  quad10 = quad(ra + 3*di, ra + 8*di, ra + 4*di, ra + 9*di, ra + 3*di, ra + 10*di, ra + 2*di, ra + 9 *di);
  fill(col[floor(random(6))])
  quad11 = quad(ra + 5*di, ra       , ra + 6*di, ra +   di, ra + 5*di, ra + 2 *di, ra + 4*di, ra +    di);
  fill(col[floor(random(6))])
  quad12 = quad(ra + 5*di, ra + 2*di, ra + 6*di, ra + 3*di, ra + 5*di, ra + 4 *di, ra + 4*di, ra + 3 *di);
  fill(col[floor(random(6))])
  quad13 = quad(ra + 5*di, ra + 4*di, ra + 6*di, ra + 5*di, ra + 5*di, ra + 6 *di, ra + 4*di, ra + 5 *di);
  fill(col[floor(random(6))])
  quad14 = quad(ra + 5*di, ra + 6*di, ra + 6*di, ra + 7*di, ra + 5*di, ra + 8 *di, ra + 4*di, ra + 7 *di);
  fill(col[floor(random(6))])
  quad15 = quad(ra + 5*di, ra + 8*di, ra + 6*di, ra + 9*di, ra + 5*di, ra + 10*di, ra + 4*di, ra + 9 *di);
  noLoop();

}