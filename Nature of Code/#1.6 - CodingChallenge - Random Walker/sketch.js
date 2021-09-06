let x;
let y;
let s = 2;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(3);
  point(x, y);

  let r = floor(random(4));

  switch(r){
    case 0:
      x = x + s;
      break;
    case 1:
      x = x - s;
      break;
    case 2:
      y = y + s;
      break;
    case 3:
      y = y - s;
      break;
  }
}
