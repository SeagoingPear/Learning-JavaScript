function setup() {
  createCanvas(250, 250)  
  background(0)
}

function draw() {

  translate(width/2, height/2)

  // let v = createVector(random(-100, 100), random(-100, 100))
  v = p5.Vector.random2D()
  v.mult(random(50, 100))

  strokeWeight(2)
  stroke(255, 50)
  line(0, 0, v.x, v.y)
}
