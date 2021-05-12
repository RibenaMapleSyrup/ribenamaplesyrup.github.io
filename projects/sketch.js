let dancer;
const waves = [];
const ocean = 30

function setup() {
  createCanvas(800, 800);
  background(0);

  w = 3/4*width
  h = 3/4*height

  for (let i=0; i<ocean; i++) {
    for (let j=0; j<ocean; j++) {
      waves.push(new Dancer(i*w/ocean+100, j*h/ocean+100, 600/(2*ocean),0.06,9*(j*j+i*i)))
    }
  }
}

function draw() {
  background('#171414');
  stroke(255);
  strokeWeight(1);

  for (let dancer of waves) {
    dancer.transform()
    dancer.illuminate()
  }
}
