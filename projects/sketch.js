let sprinkle;
const cake = [];
const sprinkles = 30

function setup() {
  createCanvas(800, 800);
  // background(0);

  w = 3/4*width
  h = 3/4*height

  for (let i=0; i<sprinkles; i++) {
    for (let j=0; j<sprinkles; j++) {
      cake.push(new Sprinkle(i*w/sprinkles+100,j*h/sprinkles+40,0.0005+j*0.0001,200,200,0.00051+i*0.0001,0,0))
    }
  }

}

function draw() {
  background('#171414');
  for (let sprinkle of cake) {
    sprinkle.update();
    sprinkle.translate();
    sprinkle.show();
  }
}
