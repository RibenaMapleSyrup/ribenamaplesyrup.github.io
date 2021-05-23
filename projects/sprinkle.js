let l = 18;
class Sprinkle {
  constructor(x,y,v,a,b,vv,c,d) {
    this.per = 0;
    this.vel = v;
    this.x = x;
    this.y = y;
    this.pos = createVector(a,b);

    this.per2 = 0;
    this.vel2 = vv;
    this.x2 = x;
    this.y2 = y;
    this.pos2 = createVector(c,d);

  }

  translate() {
    if (this.per < 0.25) {
      this.a = this.x+(this.per*l/0.25)-l/2
      this.b = this.y-(l/2)
    }
    else if (this.per > 0.25 && this.per < 0.5) {
      this.a = this.x+(l/2)
      this.b = this.y-l/2+((this.per-0.25)*l/0.25)
    }
    else if (this.per > 0.5 && this.per < 0.75) {
      this.a = this.x+(l/2)-(l*(this.per-0.5)/0.25)
      this.b = this.y+l/2
    }
    else if (this.per > 0.75 && this.per < 1) {
      this.a = this.x-l/2
      this.b = this.y+l/2-((this.per-0.75)*l/0.25)
    }

    if (this.per2 < 0.25) {
      this.c = this.x2+(this.per2*l/0.25)-l/2
      this.d = this.y2-(l/2)
    }
    else if (this.per2 > 0.25 && this.per2 < 0.5) {
      this.c = this.x2+(l/2)
      this.d = this.y2-l/2+((this.per2-0.25)*l/0.25)
    }
    else if (this.per2 > 0.5 && this.per2 < 0.75) {
      this.c = this.x2+(l/2)-(l*(this.per2-0.5)/0.25)
      this.d = this.y2+l/2
    }
    else if (this.per2 > 0.75 && this.per2 < 1) {
      this.c = this.x2-l/2
      this.d = this.y2+l/2-((this.per2-0.75)*l/0.25)
    }
  }

  update() {
    this.per = this.per + this.vel + random(0.0002,0.0001);
    this.per2 = this.per2 + this.vel2;
    if (this.per > 1) {
      this.per = 0;
    }
    if (this.per2 > 1) {
      this.per2 = 0;
    }
  }

  show() {
    stroke(15*(this.a-this.c)+80,10*abs(this.d-this.b)+50,5*abs(this.c-this.a)*abs(this.b-this.d)+50);
    strokeWeight(2);
    line(this.a,this.b, this.c,this.d);
  }
}
