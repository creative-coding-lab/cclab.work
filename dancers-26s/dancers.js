class AmyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color = color(255);
    this.baseY = startY;
    this.bounce = 0;
    this.wind = 0;
    this.rightArm = 0;
    this.leftArm = 0;

    // add properties for your dancer here:

    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // this.x = this.x + 1;
    // this.y = this.y - 1;

    this.bounce += 0.05;

    this.wind += 0.04;

    // whole flower moves up and down
    this.y = this.baseY + sin(this.bounce) * 20;

    // arms wave sideways
    this.rightArm = sin(this.bounce) * 0.8;
    this.leftArm = -sin(this.bounce) * 0.8;

    this.leaf = this.wind * 0.8;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    fill(this.color);
    rect(this.x, this.y, 200, 200);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //stem
    push();
    stroke("rgb(0,163,0)");
    strokeWeight(2);
    fill("green");
    rect(0, 50, 5, 50);

    pop();
    //leaf
    push();
    translate(0, 50);

    rotate(this.leaf);
    fill("rgb(88,195,88)");
    stroke("green");

    beginShape();
    curveVertex(0, 0);
    curveVertex(20, -10);
    curveVertex(50, 0);
    curveVertex(20, 15);
    curveVertex(0, 0);

    endShape(CLOSE);
    fill("green");
    strokeWeight(2);
    line(10, 0, 40, 2);
    line(10, -2, 20, -8);
    line(20, -1, 30, -6);
    line(10, 0, 30, 12);

    pop();
    //flower petalll
    push();

    stroke("rgb(169,84,179)");
    strokeWeight(3);
    fill("rgb(230,167,222)");
    circle(5, 20, 70);
    circle(5, -20, 70);
    circle(-20, 0, 70);
    circle(25, 0, 70);

    //  circle(30,15,60);
    // circle(-20,20,60);
    pop();
    //middle flower
    push();
    stroke("#887A04");
    strokeWeight(3);
    fill("rgb(238,238,123)");
    circle(0, 0, 60);

    pop();
    //facee
    push();

    fill("rgb(31,26,26)");
    circle(16, 0, 8);

    circle(-16, 0, 8);

    ellipse(0, 14, 6, 3);

    pop();
    //arms

    // right armm
    push();
    translate(25, 10);
    rotate(this.rightArm);

    stroke("rgba(252,105,161,0.53)");
    strokeWeight(5);
    line(0, 0, 30, 30);
    circle(30, 30, 10);

    pop();

    // left armmm
    push();
    translate(-20, 10);
    rotate(this.leftArm);

    stroke("rgba(250,95,141,0.53)");
    strokeWeight(5);
    line(0, 0, -30, 30);
    circle(-30, 30, 10);

    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    // line(-5, 0, 5, 0);
    // line(0, -5, 0, 5);
    // stroke(255);
    // rect(-100, -100, 200, 200);
    // fill(255);
    // stroke(0);
  }
}

class AshleyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.starPhases = [0, PI, PI * 0.5, PI * 1.5, PI * 2, PI * 2.5];
    this.starX = [80, 80, 70, 70, 60, 60];
    this.starY = [26, 26, 20, 20, 14, 14];
    this.starSize = [7, 6, 5, 4, 3, 2];
    this.starSpd = [1, 1, 1.6, 1.6, 2, 2];
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.t += 0.03;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    // Ghost dancer body
    let t = this.t;
    let rise = sin(t) * 7;
    let rott = sin(t) * 10;

    push();
    translate(0, rise);
    rotate(radians(rott));

    // Body
    fill(120, 75, 220);
    beginShape();
    vertex(0, -30);
    vertex(16, -4);
    vertex(0, 22);
    vertex(-16, -4);
    endShape(CLOSE);

    // Torso
    noStroke();
    fill(75, 35, 160, 230);
    beginShape();
    vertex(0, -40);
    vertex(30, 10);
    vertex(0, 62);
    vertex(-30, 10);
    endShape(CLOSE);

    // Head
    fill(200, 180, 255);
    beginShape();
    vertex(0, -80);
    vertex(16, -60);
    vertex(0, -40);
    vertex(-16, -60);
    endShape(CLOSE);

    // Eyes
    fill(50, 20, 90);
    let blink = sin(t * 3);
    if (blink > 0.94) {
      ellipse(-5, -60, 4, 1);
      ellipse(5, -60, 4, 1);
    } else {
      ellipse(-5, -60, 4, 4);
      ellipse(5, -60, 4, 4);
    }

    // Arms
    let wave = sin(t * 2) * 18;
    fill(100, 55, 190);
    push();
    translate(-30, -10 + wave);
    rotate(radians(-30 + wave));
    beginShape();
    vertex(0, -18);
    vertex(6, 0);
    vertex(0, 18);
    vertex(-6, 0);
    endShape(CLOSE);
    pop();

    push();
    translate(30, -10 - wave);
    rotate(radians(30 - wave));
    beginShape();
    vertex(0, -18);
    vertex(6, 0);
    vertex(0, 18);
    vertex(-6, 0);
    endShape(CLOSE);
    pop();

    // Orbit stars
    for (let i = 0; i < 6; i++) {
      let angle = t * this.starSpd[i] + this.starPhases[i];
      let sx = cos(angle) * this.starX[i];
      let sy = sin(angle) * this.starY[i];
      let depth = sin(angle);
      let sz = this.starSize[i] * map(depth, -1, 1, 0.6, 1);
      let alpha = map(depth, -1, 1, 60, 220);

      fill(255, 215, 90, alpha);
      noStroke();
      push();
      translate(sx, sy);
      rotate(angle * 1.5);
      beginShape();
      vertex(0, -sz * 1.5);
      vertex(sz, 0);
      vertex(0, sz * 1.5);
      vertex(-sz, 0);
      endShape(CLOSE);
      pop();
    }
    pop();
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class BrendanDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    //..
    //..
    //..
    this.startX = startX;
    this.startY = startY;

    this.floatOffsetX = 0;
    this.floatOffsetY = 0;
    this.bodyTilt = 0;
    this.armSwing = 0;
    this.legSwing = 0;
  }
  update() {
    this.floatOffsetX = sin(frameCount * 0.03) * 25;
    this.floatOffsetY = cos(frameCount * 0.04) * 18;

    this.x = this.startX + this.floatOffsetX;
    this.y = this.startY + this.floatOffsetY;

    this.bodyTilt = sin(frameCount * 0.025) * 0.12;
    this.armSwing = sin(frameCount * 0.06) * 0.2;
    this.legSwing = cos(frameCount * 0.06) * 0.12;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer here ⬇️

    rotate(this.bodyTilt);

    this.drawBody();
    this.drawHead();
    this.drawLegs();
    this.drawArms();

    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    //this.drawHead();
    pop();

    push();
    translate(this.x, this.y);
    // this.drawReferenceShapes()
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }

  drawBody() {
    fill(250);
    rect(-35, -10, 70, 80, 20);
    rect(-38, 40, 75, 10, 15);
    rect(-14, 38, 25, 15, 5);
    rect(-1, 38, 15, 15, 5);
    noStroke();
    fill("#adcfe6");
    circle(-7, 45, 10);
  }
  drawHead() {
    noStroke();

    fill(245);
    ellipse(0, -30, 95, 95);

    ellipse(38, -30, 22, 38);
    ellipse(-38, -30, 22, 38);

    fill(50, 70, 95);
    ellipse(0, -25, 70, 50);

    fill(180, 210, 230, 160);
    ellipse(12, -37, 12, 8);
  }
  drawLegs() {
    push();
    translate(-12, 55);
    rotate(this.legSwing);
    fill(245);
    rect(-8, 0, 16, 35, 8);
    pop();

    push();
    translate(12, 55);
    rotate(-this.legSwing);
    fill(245);
    rect(-8, 0, 16, 35, 8);
    pop();
  }
  drawArms() {
    push();
    translate(-35, 12);
    rotate(-this.armSwing);
    fill(245);
    rect(-28, -6, 28, 12, 8);
    pop();

    push();
    translate(35, 12);
    rotate(this.armSwing);
    fill(245);
    rect(0, -6, 28, 12, 8);
    pop();
  }
}

class BrianDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
  }
  update() {
    this.angle += 0.1;
  }
  display() {
    push();
    translate(this.x, this.y);
    strokeWeight(2);
    fill("red");
    let moveBody = sin(this.angle) * 15;
    beginShape();
    curveVertex(this.x - 830, this.y - 360);
    curveVertex(this.x - 830 + moveBody, this.y - 430);
    curveVertex(this.x - 830 - moveBody, this.y - 475);
    curveVertex(this.x - 830 + moveBody, this.y - 525);
    curveVertex(this.x - 815, this.y - 550);
    curveVertex(this.x - 815 + moveBody, this.y - 525);
    curveVertex(this.x - 800 - moveBody, this.y - 475);
    curveVertex(this.x - 800 + moveBody, this.y - 430);
    curveVertex(this.x - 800, this.y - 360);
    endShape(CLOSE);

    fill(255);
    strokeWeight(0.5);
    ellipse(this.x - 825 + moveBody * 0.5, this.y - 505, 5, 5);
    ellipse(this.x - 815 + moveBody * 0.5, this.y - 505, 5, 5);
    fill(255);
    arc(this.x - 820 + moveBody * 0.2, this.y - 495, 15, 10, 0, PI);
    //this.drawReferenceShapes()
    pop();

    push();
    let armSwing = sin(this.angle * 1.8) * 0.5;
    translate(this.x, this.y);
    noStroke();
    fill("red");
    rotate(PI + armSwing);
    rect(this.x - 815, this.y - 475, 50, 10);
    rotate(PI + armSwing);
    pop();

    push();
    let armSwing2 = sin(this.angle * 1.8) * 0.5;
    translate(this.x, this.y);
    noStroke();
    fill("red");
    rotate(PI - armSwing2);
    rect(this.x - 870, this.y - 475, 50, 10);
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class ChaeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.size = 160;
    this.bodyCol = color(random(0, 255), random(0, 255), random(0, 255));
    this.baseSway = 0;
    this.middleSway = 0;
    this.topSway = 0;
    this.xShift = 0;
    this.leftSway1 = 0;
    this.leftSway2 = 0;
    this.rightSway1 = 0;
    this.rightSway2 = 0;
    this.mouseOver = false;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //prof gohai helped
    // this.baseSway = map(sin(frameCount / 20), -1, 1, -30, 30);
    // this.middleSway = map(sin(frameCount / 20), -1, 1, -10, 10);

    this.xShift = map(sin(frameCount / 20), -1, 1, -5, 5);
    this.baseSway = map(sin(frameCount / 20), -1, 1, -15, 15); //15
    this.middleSway = map(sin(frameCount / 20), -1, 1, -10, 10);
    this.topSway = map(sin(frameCount / 20), -1, 1, -5, 5);

    this.leftSway1 = map(cos(frameCount / 20), -1, 1, -20, 20);
    this.leftSway2 = map(sin(frameCount / 20), -1, 1, -5, 5);
    this.rightSway1 = map(sin(frameCount / 30), -1, 1, -20, 20);
    this.rightSway2 = map(sin(frameCount / 20), -1, 1, 5, -5);

    //console.log("x: " + mouseX + ", y: " + mouseY);
    //console.log("thisx: " + this.x + ", this.y: " + this.y);
    if (
      mouseX > this.x - 35 &&
      mouseX < this.x + 35 &&
      mouseY > this.y - this.size / 2 &&
      mouseY < this.y + this.size / 2
    ) {
      this.mouseOver = true;
      //console.log("this is true");
      this.leftSway2 = map(sin(frameCount / 15), -1, 1, -10, 10);
      this.rightSway2 = map(sin(frameCount / 15), -1, 1, 10, -10);

      this.xShift = map(sin(frameCount / 15), -1, 1, -5, 5);
      this.baseSway = map(sin(frameCount / 15), -1, 1, -15, 15); //15
      this.middleSway = map(sin(frameCount / 15), -1, 1, -10, 10);
      this.topSway = map(sin(frameCount / 15), -1, 1, -5, 5);
    } else {
      this.mouseOver = false;
    }
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    fill(this.bodyCol);
    noStroke();

    /* 
    * prof gohai examlpe
    *

    // push();
    // translate(0, 100);
    // console.log(this.baseSway);
    // rotate(radians(this.baseSway));
    // rect(-20, -100, 40, 100);

    // push();
    // translate(0, -100);
    // rotate(radians(this.middleSway));
    // rect(-15, -80, 30, 80);
    // pop();

    // pop();
    */

    //EXPERIMENTING MOVING BODY PARTS
    //BASE
    push();
    translate(this.xShift, 0);
    rect(0, 55, this.size / 6, this.size / 5); //bottom not moving
    pop();

    //MOVING BODY PARTS
    push();

    translate(0, 80);
    rotate(radians(this.baseSway));
    rect(0, -100, this.size / 6, this.size / 2);

    push();

    translate(0, -80);
    rotate(radians(this.middleSway));
    rect(0, -40, this.size / 6, this.size / 4);

    push();
    translate(0, -40);
    rotate(radians(this.topSway));
    rect(0, -30, this.size / 6, this.size / 4);

    //face
    //cheeks
    fill(255, 201, 244);
    ellipse(6, -8, 6, 5);
    ellipse(22, -8, 6, 5);
    fill(0);
    if (this.mouseOver == true) {
      text(">", 5, -11);
      text("<", 15, -11);
    } else {
      ellipse(8, -15, 5, 10);
      ellipse(20, -15, 5, 10);
    }
    arc(14, -5, 15, 20, 0, PI);

    //hair
    push();
    translate(0, -29);
    fill(this.bodyCol);
    let t = 5;
    for (let i = 1; i < 25; i = i + 5) {
      triangle(i, 0, i + 5, 0, i + 2, -10);
    }
    pop(); //end of hair

    //LEFT ARM
    fill(this.bodyCol);
    push();
    rotate(radians(this.leftSway1));
    //rect(-this.size / 2, 10, this.size / 2, this.size / 20);
    rect(-this.size / 4 + 10, 10, this.size / 4, this.size / 20);
    // rotate(this.leftSway2);
    // rect(0, 0, this.size / 4, this.size / 20);

    push();
    translate(-this.size / 4 + 13, 14);
    rotate(this.leftSway2);
    rect(0, -5, this.size / 4, this.size / 20);
    pop(); //end leftSway2
    pop(); //end leftSway1

    //right arm
    push();
    //translate(0, 0);
    rotate(radians(this.rightSway1));
    rect(20, 15, this.size / 4, this.size / 20);

    push();
    translate(this.size / 4 + 15, 18);
    rotate(this.rightSway2);
    rect(0, -5, this.size / 4, this.size / 20);
    pop();

    pop(); //end rightsway1

    pop(); //end of topsway
    pop(); //end of middlesway
    pop(); //end of base sway

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class GavynDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:
    this.t = 0;
    this.armAngle = 0;
    this.elbowAngle = 0;
    this.legAngle = 0;
    this.kneeAngle = 0;
    this.bounce = 0;
    this.bodyShift = 0;
    this.armMove = 0.8;
    this.elbowMove = 0.4;
    this.legMove = 0.4;
    this.kneeMove = 0.4;
    this.bounceMove = 8;
    this.speed = 0.02;
  }

  update() {
    this.t += this.speed;

    if (frameCount % 60 === 0) {
      this.armMove = random(0.5, 0.9);
      this.elbowMove = random(0.3, 0.5);
      this.legMove = random(0.2, 0.5);
      this.kneeMove = random(0.2, 0.5);
      this.bounceMove = random(5, 8);
      this.speed = random(0.07, 0.11);
    }

    this.armAngle = sin(this.t) * this.armMove;
    this.elbowAngle = sin(this.t * 2) * this.elbowMove;
    this.legAngle = sin(this.t * 1.3) * this.legMove;
    this.kneeAngle = abs(sin(this.t * 2.2)) * this.kneeMove;
    this.bounce = sin(this.t * 2) * this.bounceMove;
    this.bodyShift = sin(this.t) * 6;
  }

  display() {
    push();
    translate(this.x + this.bodyShift, this.y + this.bounce);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    rectMode(CENTER);

    // body
    noStroke();
    fill(34, 139, 34);
    rect(0, 0, 40, 60, 10);

    // shirt
    fill(34, 139, 34);
    rect(0, 5, 16, 35, 4);

    // left arm
    push();
    translate(-20, -20);
    stroke(210, 180, 140);
    strokeWeight(8);
    rotate(this.armAngle);
    line(0, 0, 0, 25);

    translate(0, 25);
    rotate(this.elbowAngle);
    line(0, 0, 0, 20);
    pop();

    // right arm
    push();
    translate(20, -20);
    stroke(210, 180, 140);
    strokeWeight(8);
    rotate(-this.armAngle);
    line(0, 0, 0, 25);

    translate(0, 25);
    rotate(-this.elbowAngle);
    line(0, 0, 0, 20);
    pop();

    // left leg
    push();
    translate(-10, 30);
    stroke(30);
    strokeWeight(8);
    rotate(this.legAngle);
    line(0, 0, 0, 25);

    translate(0, 25);
    rotate(this.kneeAngle);
    line(0, 0, 0, 20);

    // left shoe
    noStroke();
    fill(255);
    ellipse(4, 22, 16, 8);
    pop();

    // right leg
    push();
    translate(10, 30);
    stroke(30);
    strokeWeight(8);
    rotate(-this.legAngle);
    line(0, 0, 0, 25);

    translate(0, 25);
    rotate(this.kneeAngle);
    line(0, 0, 0, 20);

    // right shoe
    noStroke();
    fill(255);
    ellipse(4, 22, 16, 8);
    pop();

    // head
    push();
    translate(0, -50);

    // face
    noStroke();
    fill(210, 180, 140);
    ellipse(0, 0, 40, 40);

    // hair
    fill(95, 55, 25);
    arc(0, -6, 42, 28, PI, TWO_PI);
    ellipse(-18, -5, 8, 18);
    ellipse(18, -5, 8, 18);

    // eyes
    fill(0);
    ellipse(-7, -2, 4, 4);
    ellipse(7, -2, 4, 4);

    // mouth
    noFill();
    stroke(0);
    strokeWeight(2);
    arc(0, 6, 12, 8, 0, PI);

    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class JackDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.timer = 0;
    this.yOffset = 0;
    this.wobble = 0;
    this.snowflakes = [];
    for (let i = 0; i < 20; i++) {
      this.snowflakes.push({
        x: random(-100, 100),
        y: random(-100, 100),
        size: random(2, 5),
        speed: random(0.5, 2),
      });
    }
  }

  update() {
    this.timer += 0.04;
    this.yOffset = sin(this.timer * 4) * 15;
    this.wobble = sin(this.timer * 2) * 0.1;

    for (let f of this.snowflakes) {
      f.y += f.speed;
      if (f.y > 100) f.y = -100;
    }
  }

  display() {
    push();
    translate(this.x, this.y + this.yOffset);

    for (let f of this.snowflakes) {
      noStroke();
      fill(255, 150);
      ellipse(f.x, f.y, f.size);
    }

    rotate(this.wobble);

    noStroke();
    fill(255);
    ellipse(0, 20, 70, 65);
    ellipse(0, -15, 55, 50);

    fill(255, 180, 180, 150);
    ellipse(-12, -52, 10, 5);
    ellipse(12, -52, 10, 5);

    stroke(90, 60, 40);
    strokeWeight(3);

    push();
    rotate(-PI / 4 + sin(this.timer * 5) * 0.4);
    line(-25, -15, -45, -15);
    noStroke();
    fill(255, 100, 150);
    ellipse(-45, -15, 12, 15);
    ellipse(-42, -12, 6, 8);
    pop();

    stroke(90, 60, 40);
    strokeWeight(3);
    push();
    rotate(PI / 4 + cos(this.timer * 5) * 0.4);
    line(25, -15, 45, -15);
    noStroke();
    fill(255, 100, 150);
    ellipse(45, -15, 12, 15);
    ellipse(42, -12, 6, 8);
    pop();

    push();
    translate(0, -45);
    noStroke();
    fill(255);
    ellipse(0, 0, 45, 42);

    fill(50);
    ellipse(-10, 0, 6, 8);
    ellipse(10, 0, 6, 8);
    fill(255);
    ellipse(-11, -1, 2, 2);
    ellipse(9, -1, 2, 2);

    fill(255, 150, 0);
    triangle(0, 2, 0, 8, 12, 5);

    fill(100, 150, 255);
    arc(0, -12, 46, 40, PI, TWO_PI, CHORD);
    rect(-25, -14, 50, 8, 4);
    fill(255);
    ellipse(0, -34, 12, 12);
    pop();

    fill(100, 150, 255);
    ellipse(0, -22, 6, 6);
    ellipse(0, -10, 6, 6);
    ellipse(0, 2, 6, 6);

    pop();
  }
}

class JeffDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:

    this.headPointX = 0;
    this.headPointY = 0;

    this.hipPointX = 0;
    this.angle = 0;

    this.kneePointX = 0;
    this.kneeAngle = 0;

    this.elbowPointX = 0;
    this.elbowPointY = 0;
    this.armAngle = 0;

    this.armPointX = 0;
    this.armPointY = 0;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.hipPointX = sin(this.angle) * 30;
    this.angle += 0.1;

    this.kneePointX = sin(this.kneeAngle) * 10;
    this.kneeAngle += 0.1;

    this.headPointX = sin(this.angle) * 5;
    this.headPointY = -40 + sin(this.angle) * 2;

    this.armAngle += 0.1;
    this.elbowPointX = sin(this.angle) * -20;
    this.elbowPointY = sin(this.armAngle) * 15;

    this.armPointX = sin(this.angle) * -40;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    push();
    strokeWeight(12);
    stroke(255);

    //head
    push();
    translate(this.headPointX, this.headPointY);
    rotate(frameCount * 0.07);
    rectMode(CENTER);
    rect(0, 0, 50, 50);

    //eyes
    push();
    rotate(-frameCount * 0.07);
    fill(0);
    noStroke();
    circle(-12, -8, 10);
    circle(12, -8, 10);
    pop();

    pop();

    //body
    line(0, -30, this.hipPointX, 20);

    //right leg
    line(this.hipPointX, 20, this.kneePointX + 20, 50);
    line(this.kneePointX + 20, 50, 30, 80);

    //left leg (mirrored)
    line(this.hipPointX, 20, -this.kneePointX - 20, 50);
    line(-this.kneePointX - 20, 50, -30, 80);

    //right arm
    line(5, -20, this.elbowPointX + 30, this.elbowPointY + 15);
    line(
      this.elbowPointX + 30,
      this.elbowPointY + 15,
      this.armPointX + 50,
      this.armPointY
    );

    //left arm
    line(5, -20, -this.elbowPointX - 30, this.elbowPointY + 7);
    line(
      -this.elbowPointX - 30,
      this.elbowPointY + 7,
      this.armPointX - 25,
      this.armPointY + 30
    );

    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class KevinDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.bounce = 0;
    this.leftArmSwing = 0;
    this.rightArmSwing = 0;
    this.leftLegSwing = 0;
    this.rightLegSwing = 0;
  }
  update() {
    this.t = this.t + 0.08;
    this.bounce = sin(this.t * 2) * 5;
    this.leftArmSwing = sin(this.t) * 10;
    this.rightArmSwing = sin(this.t + 3.14) * 10;
    this.leftLegSwing = sin(this.t) * 6;
    this.rightLegSwing = sin(this.t + 3.14) * 6;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y + this.bounce);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    stroke(224, 161, 189);
    strokeWeight(8);

    // left arm
    line(-38, -5, -50 - this.leftArmSwing, -22);
    line(-50 - this.leftArmSwing, -22, -62 - this.leftArmSwing, -42);

    // right arm
    line(38, -5, 50 + this.rightArmSwing, -22);
    line(50 + this.rightArmSwing, -22, 62 + this.rightArmSwing, -42);

    // left leg
    line(-18, 38, -26 - this.leftLegSwing, 56);
    line(-26 - this.leftLegSwing, 56, -16 - this.leftLegSwing, 72);

    // right leg
    line(18, 38, 26 + this.rightLegSwing, 56);
    line(26 + this.rightLegSwing, 56, 16 + this.rightLegSwing, 72);

    noStroke();

    // donut body
    fill(226, 87, 153);
    let angle = 0;
    for (let i = 0; i < 18; i++) {
      let donutX = cos(angle) * 26;
      let donutY = sin(angle) * 26;
      ellipse(donutX, donutY, 28, 28);
      angle = angle + 0.35;
    }

    // sprinkles
    strokeWeight(3);

    stroke(random(255), random(255), random(255));
    line(-22, -26, -17, -21);

    stroke(random(255), random(255), random(255));
    line(20, -18, 25, -13);

    stroke(random(255), random(255), random(255));
    line(-8, 26, -3, 30);
    line(-30, 4, -24, 9);

    stroke(random(255), random(255), random(255));
    line(24, 10, 30, 15);
    line(-3, -34, 2, -29);

    stroke(random(255), random(255), random(255));
    line(11, 31, 16, 36);
    line(-32, -8, -26, -3);

    stroke(random(255), random(255), random(255));
    line(28, -4, 34, 1);
    line(-14, 36, -8, 41);

    stroke(random(255), random(255), random(255));
    line(4, -22, 9, -17);
    line(-36, 15, -30, 20);

    noStroke();

    // eyes white part
    fill(255);
    ellipse(-22, -6, 16, 22);
    ellipse(22, -6, 16, 22);

    // eyes black
    fill(0);
    ellipse(-22, -6, 10, 16);
    ellipse(22, -6, 10, 16);

    // mouth
    fill(0);
    arc(0, 16, 30, 25, 0, 3.14);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class NancyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }
  update() {
    this.d = 72;
    this.num = 16;
    this.bodyY = map(sin(frameCount / 10), -1, 1, 0, 18);
    this.directionDist = map(mouseX - this.x, -300, 300, 0.625, -0.625);
    if (mouseX - this.x < -300) {
      this.directionDist = 0.625;
    } else if (mouseX - this.x > 300) {
      this.directionDist = -0.625;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    this.drawLeg(-this.d / 2.6, this.d * 1.2);
    this.drawFluff(this.num);
    this.drawBody(this.d);
    this.drawLeg(this.d / 2.6, this.d * 1.2);

    pop();
  }

  drawBody(d) {
    noStroke();
    fill("#86cecb");
    circle(0, this.bodyY, d);
  }
  drawFluff(num) {
    push();
    translate(0, this.bodyY);
    stroke("#137a7f");
    strokeWeight(3);
    fill("#86cecb");
    for (let i = 0; i < num; i++) {
      push();
      rotate(((2 * PI) / num) * i);
      circle(this.d / 2, 0, 14);
      pop();
    }
    pop();
  }
  drawLeg(x, y) {
    stroke("#137a7f");
    strokeWeight(10);
    line(
      x,
      this.bodyY,
      x - this.bodyY * this.directionDist,
      (this.bodyY + y) / 2
    );
    line(x - this.bodyY * this.directionDist, (this.bodyY + y) / 2, x, y);
    line(x, y, x - 22 * this.directionDist, y);
  }
}

class JingyiDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.wingx = 60;
    this.wingy = 20;
    this.legx1 = 30;
    this.legy1 = 60;
    this.featherx = 50;
    this.feathery = -70;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    angleMode(DEGREES);
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //body
    let off = sin(frameCount) * 30;

    noStroke();
    circle(0, 30, 100);
    this.headlength = 100 + off;
    ellipse(0, -20, 70, this.headlength);
    fill(10, 52, 99);
    //feather
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    arc(-this.featherX, -40 - off / 2, 200, 80, 30, 150);
    arc(this.featherX, -40 - off / 2, 200, 80, 240, 360);
    rotate(sin(frameCount / 1) * 10);
    arc(60, -50 - off, 100, 120, 180, 270);
    pop();
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    rotate(-sin(frameCount / 1) * 10);
    arc(-60, -50 - off, 100, 120, 270, 360);
    pop();
    //face
    arc(0, -40 - off / 2, 70, 60, 215, 325);

    //wings
    fill(255);
    push();
    rotate(sin(frameCount / 1) * 20);
    ellipse(this.wingx, this.wingy, 100, 10);
    pop();
    push();
    rotate(-sin(frameCount / 1) * 20);
    ellipse(-this.wingx, this.wingy, 100, 10);
    pop();
    //legs
    push();
    stroke(255, 255, 0);
    strokeWeight(3);
    line(this.legx1, this.legy1, this.legx1 + 5, this.legy1 + 50 - off / 2);
    line(-this.legx1, this.legy1, -this.legx1 - 5, this.legy1 + 50 - off / 2);
    pop();

    //eyes
    fill(0);
    circle(12, -40 - off / 2, 12);
    circle(-12, -40 - off / 2, 12);
    fill(255);
    circle(12, -40 - off / 2.3, 4);
    circle(-12, -40 - off / 2.3, 4);
    //beak
    fill(0);
    push();
    rotate(arc(180));
    triangle(-8, -30 - off / 2, 8, -30 - off / 2, 0, 5 - off / 2);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class MandyDancer {
  constructor(startX, startY, headSize, r, g, b, reflect = false) {
    this.x = startX;
    this.y = startY;
    this.headSize = 50;
    this.reflect = random(10) > 5;

    // animation variables
    this.bobX = 0;
    this.bobY = 0;
    this.legStep = 0;
    this.armL = 0;
    this.armR = 0;

    this.bodyColor = color(random(255), random(255), random(255));
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    let choppyTime = floor(frameCount / 10) * 0.7;
    let armTime = floor(frameCount / 13) * 0.6;

    // bobbing head motion
    this.bobX = map(cos(choppyTime), -1, 1, -2.8, 2);
    this.bobY = map(cos(choppyTime), -1, 1, -2.8, 2);

    // leg movement variable
    this.legStep = map(cos(choppyTime), -1, 1, -3, 8);

    // arm movement variables (opposite movement)
    this.armL = map(sin(armTime), -1, 1, 0, this.headSize - 10);
    this.armR = map(-sin(armTime), -1, 1, 0, this.headSize - 10);
  }

  display() {
    push();
    translate(this.x, this.y);
    if (this.reflect) {
      translate(this.headSize / 1.5, 0);
      scale(-1, 1);
    } else {
      translate(-this.headSize / 1.5, 0);
    }

    fill(this.bodyColor);
    stroke(10);
    this.drawLegs();
    this.drawArms();

    fill(this.bodyColor);
    beginShape();
    curveVertex(-this.headSize / 2.8, this.headSize / 3);
    curveVertex(-this.headSize / 2.8 + this.bobX, this.headSize / 3);

    curveVertex(-this.headSize / 3 + this.bobX / 2, this.headSize * 1.1);
    curveVertex(this.headSize / 3 + this.bobX / 2, this.headSize * 1.1);

    curveVertex(this.headSize / 2.8 + this.bobX, this.headSize / 3);
    curveVertex(this.headSize / 2.8, this.headSize / 3);
    endShape();

    circle(this.bobX, this.bobY, this.headSize);
    this.drawFace();

    this.drawFace();
    if (!this.reflect) {
      this.drawHeart();
      // this.drawRefer enceShapes();
    }
    pop();
  }

  drawLegs() {
    triangle(
      -this.headSize / 3,
      this.headSize * 1.1,
      -this.headSize / 2.4 + this.legStep,
      this.headSize * 1.45,
      -this.headSize / 8,
      this.headSize * 1.2
    );

    triangle(
      this.headSize / 3,
      this.headSize * 1.1,
      this.headSize / 2.4 + this.legStep,
      this.headSize * 1.45,
      this.headSize / 8,
      this.headSize * 1.2
    );
  }

  drawArms() {
    let differY = (this.headSize * 1.1 - this.headSize / 3) * 0.96;

    triangle(
      -this.headSize / 3,
      differY,
      -this.headSize / 1.4,
      differY * 0.2 + this.armL,
      -this.headSize / 3,
      differY * 0.68
    );

    triangle(
      this.headSize / 3,
      differY,
      this.headSize / 1.4,
      differY * 0.2 + this.armR,
      this.headSize / 3,
      differY * 0.68
    );
  }

  drawFace() {
    textAlign(CENTER, CENTER);
    textSize(this.headSize / 3);
    fill(0);
    noStroke();

    //  screen position for face hover to change expression
    let currentX =
      this.x + (this.reflect ? this.headSize / 1.5 : -this.headSize / 1.5);
    let d = dist(mouseX, mouseY, currentX + this.bobX, this.y + this.bobY);

    if (d < this.headSize / 2) {
      text(" ͡= ㅅ ͡=", this.bobX, this.bobY);
    } else {
      text(" ͡• ㅅ ͡•", this.bobX, this.bobY);
    }
  }

  drawHeart() {
    push();
    translate(this.headSize / 1.5, 0);

    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(this.headSize / 3);
    text(
      "˚ʚ♡ɞ˚",
      0,
      (-this.headSize * 2) / 3 + map(sin(frameCount / 50), -1, 1, -1, -5)
    );

    pop();
  }

  drawReferenceShapes() {
    push(); // new translation
    translate(this.headSize / 1.5, 0);

    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
    pop();
  }
}

class LindaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.dir = 1;

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    if (frameCount % 20 == 0) {
      this.dir = this.dir * -1;
    }
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    scale(this.dir, 1);
    //
    triangle(20 * noise(frameCount / 30), -50, -50, 50, 50, 50);
    ellipse(noise(frameCount / 30), 0, 40, 20);
    push();
    //eye
    fill("black");
    ellipse(10 * noise(frameCount / 20), 0, 10, 20);
    pop();
    //line
    for (let y = 170; y <= 200; y += 10) {
      let x1 = map(y, 100, 200, 200, 150);
      let x2 = map(y, 100, 200, 200, 250);
      line(x1, y, x2, y);
    }
    //hat
    push();
    fill("white");
    rect(-10 + 20 * noise(frameCount / 30), -100, 20, 50);
    rect(-30 + 20 * noise(frameCount / 30), -60, 60, 10);
    push();
    fill("black");
    triangle(-25 + 20 * noise(frameCount / 30), 25, -25, 40, 0, 32.5);
    triangle(0, 32.5, 25, 25, 25, 40);
    pop();
    pop();
    //left hand
    beginShape();
    push();
    noFill();
    stroke(255);
    curveVertex(-35, 18);
    curveVertex(-35, 18);
    curveVertex(-83, 27);
    curveVertex(-88, -5);
    curveVertex(-88, -5);
    endShape();
    pop();
    //right hand
    beginShape();
    push();
    noFill();
    stroke(255);
    curveVertex(33, 18);
    curveVertex(33, 18);
    curveVertex(77, 33);
    curveVertex(95, 0);
    curveVertex(95, 0);
    endShape();
    pop();
    //leg
    beginShape();
    push();
    noFill();
    stroke(255);
    curveVertex(-21, 49);
    curveVertex(-21, 49);
    curveVertex(-24, 87);
    curveVertex(-24, 87);
    endShape();
    line(15, 49, 24, 83);
    pop();

    //
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class OliviaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.startX = startX;
    this.startY = startY;
    this.leg1turn = 1;
    this.leg2turn = -1;
    this.t = 0;
  }
  update() {
    this.x = this.startX + sin(frameCount * 0.03) * 50;
    this.y = this.startY + sin(frameCount * 0.05) * 30;
  }
  display() {
    push();
    translate(this.x, this.y);
    this.leg1();
    this.leg2();
    this.body1();
    this.body2();
    //this.drawReferenceShapes();
    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }

  body1() {
    push();
    let n = 12;
    fill("white");
    beginShape();
    for (let i = 0; i < n; i++) {
      let angle = map(i, 0, n, 0, 360);
      let offset = map(i, 0, n, 0, 15);
      let rad = 60 + sin(frameCount / 10 + offset) * 10;
      let x = cos(radians(angle)) * rad;
      let y = -10 + sin(radians(angle)) * rad;
      curveVertex(x, y);
    }

    endShape(CLOSE);
    pop();
  }

  body2() {
    let xc = map(sin(frameCount / 10), -1, 1, -5, 5);
    push();
    noStroke();
    fill(255, 182, 46);
    circle(xc, -15, 50);
    pop();

    push();
    stroke("black");
    strokeWeight(3);
    line(-15 + xc, -18, -10 + xc, -20);
    line(10 + xc, -20, 15 + xc, -18);
    pop();

    push();
    noStroke();
    fill(252, 250, 240);
    circle(xc, -5, map(sin(frameCount / 10), -1, 1, 5, 10));
    pop();

    push();
    noStroke();
    fill(255, 224, 231);
    ellipse(-20 + xc, -9, 10, 5);
    ellipse(20 + xc, -9, 10, 5);
    pop();
  }

  leg1() {
    push();
    translate(0, 40);
    rotate(sin(frameCount * 0.05) * 0.5 * this.leg1turn);
    stroke(255, 182, 46);
    strokeWeight(4);
    noFill();
    line(-5, 0, -8, 30);
    line(-8, 30, -4, 55);
    stroke(255, 140, 0);
    strokeWeight(5);
    line(-4, 55, -12, 60);
    pop();
  }

  leg2() {
    push();
    translate(0, 40);
    rotate(sin(frameCount * 0.05) * 0.5 * this.leg2turn);
    stroke(255, 182, 46);
    strokeWeight(4);
    noFill();
    line(5, 0, 8, 30);
    line(8, 30, 4, 55);
    stroke(255, 140, 0);
    strokeWeight(5);
    line(4, 55, 12, 60);
    pop();
  }
}

class TemieDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.headPos = 0;
    this.wobble = 0;
    this.size = 8;
    this.shuffle = 0;
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    this.headPos = map(sin(frameCount / 10), -1, 1, -12, 12);
    this.wobble = noise(frameCount * 0.7, noise(frameCount + 0.05)) * 25;
    this.mouseEye = map(mouseX, 0, width, -10, 10);
    this.shuffle = sin(frameCount / 2) * 10;
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // randomness - random colors of skeleton
    // skeleton head, on a bird? dead bird// tomato with legs
    //transparent movement
    //sin (-1,1, angle) for first leg part
    //body and leg up and down movement same

    //legs

    stroke(255);
    strokeWeight(6);
    line(-15, this.headPos + 20, -15 + this.shuffle, 60);
    line(-15 + this.shuffle, 60, -5 + this.shuffle, 60);

    line(15, this.headPos + 20, 15 + this.shuffle, 60);
    line(15 + this.shuffle, 60, 25 + this.shuffle, 60);

    //line(-10, this.headPos, -10, 50);
    //line(10, this.headPos, +10, 50);

    //arms
    strokeWeight(4);
    noFill();
    //left
    line(-40, this.headPos, -60, this.headPos + 10, this.headPos + 15);
    //right
    line(40, this.headPos, 60, this.headPos + 10, this.headPos + 15);

    //tomato body
    fill("#9D0616");
    stroke("#7E0511");
    strokeWeight(4);
    ellipse(0, this.headPos, 80, 65);

    //leafs
    fill("#2C773D");
    stroke("#235F30");
    strokeWeight(4);
    triangle(
      -5,
      this.headPos - 30,
      -32 + this.wobble,
      this.headPos - 45,
      -15,
      this.headPos - 20
    );
    triangle(
      -10,
      this.headPos - 25,
      0,
      this.headPos - 55 + this.wobble,
      10,
      this.headPos - 35
    );
    triangle(
      5,
      this.headPos - 30,
      30,
      this.headPos - 45 + this.wobble,
      15,
      this.headPos - 20
    );

    //eyes
    fill("black");
    noStroke();
    circle(this.mouseEye - 19, this.headPos, this.size);
    circle(this.mouseEye + 19, this.headPos, this.size);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

class YuqiLiangDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.size = random(80, 150);
    this.offset = random(1000);
    this.col = color(30, 30, 30, 200);
    this.t = random(1000);
  }
  update() {
    this.x += map(noise(this.t), 0, 1, -1, 1);
    this.y += map(noise(this.t + 100), 0, 1, -1, 1);
    this.y += sin(frameCount * 0.05) * 0.5;
    this.t += 0.01;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    noStroke();
    let d = dist(mouseX, mouseY, this.x, this.y);
    let react = map(d, 0, 200, 1.5, 1, true);

    scale(react);
    fill(this.col);

    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.3) {
      let r = this.size * 0.4;
      let n = noise(cos(angle) + this.offset, sin(angle) + this.offset);
      let flow = map(n, 0, 1, -20, 20);

      let x = (r + flow) * cos(angle);
      let y = (r + flow) * sin(angle);

      vertex(x, y);
    }
    endShape(CLOSE);

    for (let i = 0; i < 6; i++) {
      let x = map(i, 0, 5, -this.size * 0.3, this.size * 0.3);

      let wave = sin(frameCount * 0.1 + i) * 10;

      fill(20, 20, 20, 180);
      ellipse(x, this.size * 0.3 + wave, this.size * 0.2, this.size * 0.4);
    }

    fill(0);
    ellipse(-10, -10, 10, 15);
    ellipse(10, -10, 10, 15);

    pop();
  }
  // ⬆️ draw your dancer above ⬆️
  // ******** //

  // the next function draws a SQUARE and CROSS
  // to indicate the approximate size and the center point
  // of your dancer.
  // it is using "this" because this function, too,
  // is a part if your Dancer object.
  // comment it out or delete it eventually.

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

//harper
class HarpersDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;


    this.angle = 0;

    this.wingC = color(255, 100, 200, 200);
    this.bodyC = color(237, 199, 145)
  }

  update() {

    this.angle = map(sin(frameCount * 0.01), -1, 1, -PI / 4, PI / 4);
    this.angle1 = map(sin(frameCount * 0.1), -1, 1, -PI / 8, PI / 8);
    this.width = 200 * sin(frameCount * 0.05)
    this.w2 = 100 * sin(frameCount * 0.01)

    //this.x = startX + 20 * cos(frameCount*0.01)
    //this.y = startY +20 * sin(frameCount*0.01)
  }

  display() {

    // push();
    // translate(this.x+this.width, this.y);
    // for(let i = 20; i<=40; i+=10){

    // circle(0- 100 * cos(frameCount *0.05),0-80 * sin(frameCount*0.05) ,20)
    // ellipse(0,0,20,40)
    // }
    noStroke()
    push()
    translate(this.x + 20 * cos(frameCount * 0.1), this.y + 20 * sin(frameCount * 0.1))

    rotate(this.angle)
    fill(250)
    arc(90, -20, 100, 80, this.angle1, PI, CHORD)
    scale(-1, 1)
    arc(90, -20, 100, 80, this.angle1, PI, CHORD)
    fill(200)
    circle(0, 0, 100)
    pop()

    push()
    strokeWeight(50)
    stroke(100)
    line(this.x + 20 * cos(frameCount * 0.1), this.y + 20 * sin(frameCount * 0.1),
      this.x - this.w2 * cos(frameCount * 0.1), this.y - this.w2 * sin(frameCount * 0.1))
    pop()

    push()
    noStroke()
    fill(200)
    translate(this.x - this.w2 * cos(frameCount * 0.1), this.y - this.w2 * sin(frameCount * 0.1))
    circle(0, 0, 60)
    fill(252, 205, 48)
    beginShape()
    vertex(20, 20)
    vertex(-20, 20)
    vertex(0, 40)
    endShape()
    fill(255)
    circle(-15, 0, 20)
    circle(15, 0, 20)
    fill(0)
    circle(-15, 0, 10)
    circle(15, 0, 10)
    stroke(0)
    strokeWeight(3)
    noFill()
    arc(-15, -10, 20, 20, PI + PI / 4, PI + PI / 2)
    scale(-1, 1)
    arc(-15, -10, 20, 20, PI + PI / 4, PI + PI / 2)
    pop()
    //     push();
    //     translate(this.x+this.width, this.y+this.w2);

    //   let swing = map(sin(this.angle), -1, 1, 0.2, 1.0);



    //     noStroke();
    //     fill(this.wingC);


    //     push();
    //     scale(swing, 0.5); 
    //     ellipse(-30, -10, 50, 80); 
    //     ellipse(-25, 20, 40, 60);  

    // //scale(swing, 1.0);
    //     ellipse(30, -10, 50, 80);
    //     ellipse(25, 20, 40, 60);
    //     pop();

    //     push()
    //     fill(this.bodyC);
    //     rotate(0.1*sin(frameCount*0.1))
    //  ellipse(0, 0, 15, 60);
    //     stroke(this.bodyC)
    //     strokeWeight(2);

    //   noFill();
    //     line(0, -25, -15,-45);
    //     line(0, -25, 15,-45)

    //     pop()

    //    fill(255, 255,255, 150);
    //     noStroke();
    //     circle(-30 * swing,-15, 10)
    //     circle(30 * swing, -15, 10);


    //     pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//shakira
class Shakira {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.hm = 0;
    this.em = 0;
    //..
    //..
  }
  update() {
    this.hm = sin(frameCount * 0.1) * 20;
    this.em = map(this.hm, -20, 20, 0.1, 1)
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke()
    //head
    fill(255)
    ellipse(0, this.hm * 0.2, 80, 60)
    fill(165, 227, 250)
    arc(0, this.hm * 0.2, 80, 60, 3.1, 0.12)
    //ear
    fill(165, 227, 250)
    arc(-30, -42 + this.hm * 0.2, 40, 40, PI / 2.2, PI * 1.2)
    arc(22, -42 + this.hm * 0.2, 40, 40, PI * 1.7, PI / 2.1)
    //body
    fill(255)
    ellipse(-10, 60, 30 + this.hm, 67)
    arc(20, 93, 125 + this.hm, 135, PI * 1.5, 0)
    rect(-10, 26, 40 + this.hm * 0.2, 67)
    //body details
    push()
    fill(0, 87, 153)
    arc(30 + this.hm * 0.1, 70, 5, 20 + this.hm * 0.1, PI * 1.01, PI)
    pop()

    push()
    fill(0, 87, 153)
    rotate(-0.1)
    scale(-1, 1)
    arc(-6 + this.hm * 0.1, 70, 5, 20 + this.hm * 0.1, PI * 1.001, PI * 0.9)
    pop()

    push()
    translate(-40, 15)
    fill(0, 87, 153)
    rotate(-0.5)
    scale(-1, 1)
    arc(-6 + this.hm * 0.1, 70, 5, 20 + this.hm * 0.1, PI * 1.001, PI * 0.9)
    pop()
    //eyes
    fill(0, 78, 196)
    ellipse(-20, 1 + this.hm * 0.2, 10, 20 * this.em)
    ellipse(10, 1 + this.hm * 0.2, 10, 20 * this.em)
  }
}
//naransuvd
class BankharDancer {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.s = 1;
    this.dy = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour


    for (let a = 0; a < 2 * PI; a += PI / 4) {
      this.dy = 30 * sin(frameCount * 0.05) + 50;

      if (mouseIsPressed) {
        this.x += 1;
        this.y += 1;
      }
    }
  }
  display() {
    push();
    push();
    translate(this.x, this.y + this.dy);

    rotate(frameCount * 0.005);
    this.drawEars();
    this.drawFace();
    this.drawBody();
    pop();

    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    // push();
    // translate(this.x, this.y + this.dy);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️


    pop();
  }
  drawFace() {

    //translate(0,-40);
    fill(123, 63, 0)
    ellipse(5, 5, 60, 70);
    //humsog
    push();
    fill(210, 125, 45)
    noStroke();
    translate(-10, -10);
    rotate(80);
    ellipse(0, 0, 5, 10);
    pop();

    push();
    fill(210, 125, 45)
    noStroke();
    translate(10, -10);
    rotate(80);
    ellipse(0, 0, 5, 10);
    pop();
    //eyes
    push();
    fill(0)
    noStroke();
    translate(5, 0);
    ellipse(0, 0, 5, 10);
    pop();

    push();
    fill(0)
    noStroke();
    translate(-5, 0);
    ellipse(0, 0, 5, 10);
    pop();

    //nose

    push();
    fill(0)
    noStroke();
    translate(5, 15);
    rotate(80)
    ellipse(0, 0, 5, 10);
    pop();

  }
  drawBody() {
    fill(123, 63, 0)
    ellipse(5, 75, 80, 90);
    push();
    fill(123, 63, 0);
    strokeWeight(2);
    let wave = sin(frameCount * 0.05) * 5;
    ellipse(25, 50 + wave, 25, 50);

    //hand2

    ellipse(-20, 50 - wave, 25, 50);
    pop();
    //dress
    for (let i = 0; i < 8; i++) {
      push();
      fill(random(255), random(100), random(100));
      let swing = sin(frameCount * 5 + i) * 5
      translate(-10, 20)
      //triangle(55, 75, 38, 40, 86, 75)
      triangle(15, 48, 55 + swing, 90, -55 + swing, 90);
      pop();
    }
    //legs
    push();
    noStroke();
    ellipse(25, 125, 25, 30);
    ellipse(-20, 125, 25, 30);
    pop();
  }

  drawEars() {
    push();
    fill(123, 63, 0)
    let swing = sin(frameCount * 0.05) * 5;
    //translate(50,0);
    triangle(-25 + swing, -15, -5, -25, -40, 25);
    triangle(35 - swing, -15, 15, -25, 50, 25);
    pop();
  }
}
//evan
class EvanDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.bounceY = 0;
    this.armAngle = 0;
    this.eyeColor = 0;
    this.logo = loadImage('48309331.png');
    this.legAngle = 0;
    this.headAngle = 0;
  }
  update() {
    this.bounceY = sin(frameCount * 0.08) * 6;
    this.legAngle = sin(frameCount * 0.1) * 0.3;
    this.armAngle = sin(frameCount * 0.1) * 1.0 - radians(90);
    this.x = this.x + sin(frameCount * 0.05) * 2;

    let totalMillis = millis();
    let secondsTime = totalMillis / 1000;
    let cycleTime = 10;
    let currentTime = secondsTime % cycleTime;

    if (currentTime < 3) {
      this.headAngle = (currentTime / 3) * TWO_PI;
    } else if (currentTime < 5) {
      this.headAngle = 0;
    } else if (currentTime < 8) {
      let spinTime = currentTime - 5;
      this.headAngle = (1 - (spinTime / 3)) * TWO_PI;
    } else {
      this.headAngle = 0;
    }

    if (frameCount % 60 < 30) {
      this.eyeColor = color(30);
    } else {
      this.eyeColor = color(220, 40, 40);
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    translate(0, this.bounceY);
    scale(1.5);

    strokeWeight(2);
    stroke(80);

    push();
    translate(-28, -42);
    rotate(-this.armAngle);
    fill(100, 180, 255);
    rect(-6, 0, 12, 36, 4);
    pop();

    push();
    translate(28, -42);
    rotate(this.armAngle);
    fill(100, 180, 255);
    rect(-6, 0, 12, 36, 4);
    pop();

    fill(70, 140, 210);
    push();
    translate(-14, 8);
    rotate(-this.legAngle);
    rect(-8, 0, 16, 30, 4);
    pop();

    push();
    translate(14, 8);
    rotate(this.legAngle);
    rect(-8, 0, 16, 30, 4);
    pop();

    fill(100, 180, 255);
    rect(-30, -50, 60, 60, 6);

    image(this.logo, -21, -41, 42, 42);

    push();
    translate(0, -68);
    rotate(this.headAngle);

    fill(180, 220, 255);
    rect(-22, -22, 44, 44, 6);

    fill(this.eyeColor);
    noStroke();
    rect(-14, -12, 10, 8, 2);
    rect(4, -12, 10, 8, 2);

    fill(30);
    rect(-10, 6, 20, 5, 2);

    stroke(180, 220, 255);
    strokeWeight(2);
    line(0, -22, 0, -37);
    fill(255, 220, 80);
    noStroke();
    circle(0, -40, 8);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//august
class Hubert {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.x1 = startX;
    this.y1 = startY;
    this.t = 0;
    this.c = color(230, 185, 140)
    this.h = 0
  }

  update() {
    this.t += 0.1;
    this.x = this.x1 + sin(this.t * 1) * 50;
    this.y = this.y1 + sin(this.t * 2) * 20;
    if (mouseIsPressed) {
      this.c = color(random(255), random(255), random(255))
      this.h = map(sin(this.t * 1.0), -1, 1, 0, 360);
    } else {
      this.c = color(28, 39, 90)
    }
  }

  display() {
    push();
    colorMode(HSB);
    translate(this.x, this.y);
    noStroke();

    // Legs
    let lKick = sin(this.t * 2) * 30;
    let rKick = sin(this.t * 2 + PI) * 30;


    stroke(210, 160, 110);
    strokeWeight(6);
    line(-18, 40, -18, 38 + lKick);  // left leg
    line(18, 40, 18, 38 + rKick);  // right leg


    noStroke();
    fill(210, 160, 110);
    ellipse(-18, 38 + lKick, 22, 14);
    ellipse(18, 38 + rKick, 22, 14);

    // Body 
    fill(this.h, 100, 100);
    circle(0, 0, 110);
    fill(245, 220, 190);
    ellipse(0, 10, 58, 52);

    // Ears
    fill(this.h, 100, 100);
    circle(-32, -46, 26);
    circle(32, -46, 26);
    fill(240, 165, 165);
    circle(-32, -46, 14);
    circle(32, -46, 14);

    // Eyes
    let pupilX = map(mouseX, 0, width, -3, 3);
    let pupilY = map(mouseY, 0, height, -3, 3);

    fill(255);
    circle(-18, -10, 10);
    circle(18, -10, 10);
    fill(0);
    circle(-18 + pupilX, -10 + pupilY, 6);
    circle(18 + pupilX, -10 + pupilY, 6);

    // Nose
    fill(210, 100, 100);
    ellipse(0, 2, 9, 7);

    pop();
  }
}
//dio
class MonkeyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;

    // Body bounce
    this.bounceY = 0;
    this.bodyTilt = 0;

    // Arm & leg angles
    this.leftArmAngle = 0;
    this.rightArmAngle = 0;
    this.leftLegAngle = 0;
    this.rightLegAngle = 0;

    // Head wiggle
    this.headWiggle = 0;

    // Ear flap
    this.earFlap = 0;

    // Eye blink
    this.blinkTimer = 0;
    this.isBlinking = false;

    // Tail wave
    this.tailAngle = 0;

    // Colors (self-contained, no globals)
    this.bodyColor = [139, 90, 43];
    this.faceColor = [210, 160, 110];
    this.darkBrown = [80, 40, 10];
  }

  update() {
    this.t += 0.07;

    // Body bounce (up-down bop)
    this.bounceY = sin(this.t * 2) * 12;

    // Body tilt side to side
    this.bodyTilt = sin(this.t * 2) * 0.18;
    // Arms flailing wildly (funny floss-like motion)
    this.leftArmAngle = sin(this.t * 2 + PI) * 1.4 - 0.5;
    this.rightArmAngle = sin(this.t * 2) * 1.4 + 0.5;

    // Legs kicking alternately
    this.leftLegAngle = sin(this.t * 2) * 0.6;
    this.rightLegAngle = sin(this.t * 2 + PI) * 0.6;

    // Head wiggle (extra silly)
    this.headWiggle = sin(this.t * 3) * 0.25;

    // Ear flap
    this.earFlap = sin(this.t * 4) * 0.3;

    // Tail wave
    this.tailAngle = sin(this.t * 2.5) * 0.8;

    // Blink every ~2 seconds
    this.blinkTimer++;
    if (this.blinkTimer > 90) {
      this.isBlinking = true;
      if (this.blinkTimer > 95) {
        this.isBlinking = false;
        this.blinkTimer = 0;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y + this.bounceY);
    rotate(this.bodyTilt);

    // --- Tail ---
    push();
    translate(0, 30);
    rotate(this.tailAngle + 0.3);
    noFill();
    stroke(...this.bodyColor);
    strokeWeight(5);
    beginShape();
    for (let i = 0; i < 12; i++) {
      let a = i * 0.25 + this.tailAngle;
      let r = 20 + i * 4;
      vertex(cos(a) * r * 0.5, r);
    }
    endShape();
    pop();

    // --- Left leg ---
    push();
    translate(-18, 40);
    rotate(this.leftLegAngle);
    fill(...this.bodyColor); noStroke();
    rect(-7, 0, 14, 38, 7);
    // foot
    fill(...this.darkBrown);
    ellipse(0, 42, 18, 10);
    pop();

    // --- Right leg ---
    push();
    translate(18, 40);
    rotate(this.rightLegAngle);
    fill(...this.bodyColor); noStroke();
    rect(-7, 0, 14, 38, 7);
    fill(...this.darkBrown);
    ellipse(0, 42, 18, 10);
    pop();

    // --- Body ---
    fill(...this.bodyColor); noStroke();
    ellipse(0, 20, 70, 80);

    // Belly patch
    fill(...this.faceColor);
    ellipse(0, 25, 40, 50);

    // --- Left arm (flailing) ---
    push();
    translate(-35, 5);
    rotate(this.leftArmAngle);
    fill(...this.bodyColor); noStroke();
    rect(-7, 0, 14, 45, 7);
    // hand
    fill(...this.faceColor);
    ellipse(0, 52, 18, 16);
    pop();

    // --- Right arm (flailing) ---
    push();
    translate(35, 5);
    rotate(this.rightArmAngle);
    fill(...this.bodyColor); noStroke();
    rect(-7, 0, 14, 45, 7);
    fill(...this.faceColor);
    ellipse(0, 52, 18, 16);
    pop();

    // --- Head ---
    push();
    translate(0, -38);
    rotate(this.headWiggle);

    // Left ear (flapping)
    push();
    translate(-32, 0);
    rotate(-0.2 + this.earFlap);
    fill(...this.bodyColor); noStroke();
    ellipse(0, 0, 24, 22);
    fill(...this.faceColor);
    ellipse(0, 0, 14, 13);
    pop();

    // Right ear (flapping)
    push();
    translate(32, 0);
    rotate(0.2 - this.earFlap);
    fill(...this.bodyColor); noStroke();
    ellipse(0, 0, 24, 22);
    fill(...this.faceColor);
    ellipse(0, 0, 14, 13);
    pop();

    // Head shape
    fill(...this.bodyColor); noStroke();
    ellipse(0, 0, 65, 62);

    // Face patch
    fill(...this.faceColor);
    ellipse(2, 6, 44, 40);

    // Eyes
    fill(255); noStroke();
    ellipse(-13, -4, 16, this.isBlinking ? 2 : 14);
    ellipse(13, -4, 16, this.isBlinking ? 2 : 14);
    if (!this.isBlinking) {
      fill(30);
      ellipse(-12, -4, 8, 8);
      ellipse(14, -4, 8, 8);
      // Pupils gleam
      fill(255);
      ellipse(-10, -6, 3, 3);
      ellipse(16, -6, 3, 3);
    }

    // Eyebrows (expressive!)
    stroke(this.darkBrown[0], this.darkBrown[1], this.darkBrown[2]);
    strokeWeight(2.5); noFill();
    let browWiggle = sin(this.t * 3) * 4;
    line(-20, -14 + browWiggle, -6, -16 + browWiggle);
    line(6, -16 + browWiggle, 20, -14 + browWiggle);

    // Nose
    fill(...this.darkBrown); noStroke();
    ellipse(0, 8, 16, 10);
    fill(80, 30, 5);
    ellipse(-4, 9, 5, 4);
    ellipse(4, 9, 5, 4);

    // Mouth (big goofy grin that changes)
    noFill();
    stroke(...this.darkBrown);
    strokeWeight(2);
    let mouthOpen = abs(sin(this.t * 2)) * 10;
    arc(0, 17, 26, 14 + mouthOpen, 0, PI);

    // Tongue (pops out rhythmically)
    if (sin(this.t * 2) > 0.7) {
      fill(220, 80, 100); noStroke();
      ellipse(0, 23, 12, 10);
    }

    pop(); // end head

    pop(); // end dancer
  }
}
//tim
class RobotDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.headCol = color(70, 30, 180);
    this.neckCol = color(109, 129, 150);
    this.bodyCol = color(120, 160, 200);
    this.eyeCol = color(255, 240, 120);
    this.armCol = color(180, 180, 220);
    this.legCol = color(160, 160, 190);

    this.swayAngle = 0;
    this.swaySpeed = 0.05;

    this.armLength = 55;
    this.legLength = 45;

    this.headOffset = 0;
    this.armWave = 0;
    this.bodyBounce = 0;
  }

  update() {
    this.swayAngle += this.swaySpeed;

    this.headOffset = sin(this.swayAngle) * 10;
    this.armWave = sin(this.swayAngle * 2) * 25;
    this.bodyBounce = sin(this.swayAngle * 3) * 6;
  }

  display() {
    push();
    translate(this.x, this.y + this.bodyBounce);

    rectMode(CENTER);
    angleMode(RADIANS);

    // body
    noStroke();
    fill(this.bodyCol);
    rect(0, 10, 60, 70, 10);

    // neck
    fill(this.neckCol);
    rect(0, -35, 14, 20, 4);

    // head
    push();
    translate(this.headOffset, -60);
    fill(this.headCol);
    rect(0, 0, 55, 40, 8);

    // eyes
    fill(this.eyeCol);
    ellipse(-12, -5, 10, 10);
    ellipse(12, -5, 10, 10);

    // mouth
    stroke(255);
    strokeWeight(2);
    line(-10, 10, 10, 10);
    pop();

    // left arm
    push();
    translate(-30, -10);
    rotate(radians(-20) + sin(this.swayAngle * 2) * 0.5);
    stroke(this.armCol);
    strokeWeight(8);
    line(0, 0, -this.armLength, this.armWave);
    pop();

    // right arm
    push();
    translate(30, -10);
    rotate(radians(20) - sin(this.swayAngle * 2) * 0.5);
    stroke(this.armCol);
    strokeWeight(8);
    line(0, 0, this.armLength, -this.armWave);
    pop();

    // left leg
    push();
    translate(-15, 45);
    rotate(sin(this.swayAngle * 2) * 0.3);
    stroke(this.legCol);
    strokeWeight(9);
    line(0, 0, -8, this.legLength);
    pop();

    // right leg
    push();
    translate(15, 45);
    rotate(-sin(this.swayAngle * 2) * 0.3);
    stroke(this.legCol);
    strokeWeight(9);
    line(0, 0, 8, this.legLength);
    pop();

    //this.drawReferenceShapes();
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rectMode(CENTER);
    rect(0, 0, 200, 200);
    fill(255);
    stroke(0);
  }
}
//Jiayin
class Nono {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    //constructer.head
    this.bArray = [];
    this.aArray = [];
    //this.sArray = []; 
    for (let i = 0; i < 50; i++) {
      this.bArray[i] = map(i, 0, 40, 0, 140);
      //this.sArray[i] = map(i, 0, 40, 5, 30);      
      this.aArray[i] = 0;
      this.head = 0
    }
    //constructer.arms
    // this.dArray = [];  
    // this.eArray = [];  
    // this.sArray = []; 
    // for (let i = 0; i < 50; i++) {
    //   this.dArray[i] = map(i, 0, 40, 60, 100);  
    //   //this.tArray[i] = map(i, 0, 40, 5, 30);       
    //   this.eArray[i] = 0;  
    //   this.arm=0
    // }

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    let speed;

    if (mouseIsPressed === true) {
      speed = 0.3;
      this.bounceY = -30 * sin(frameCount * 0.15)
      //this.c = map(i, 0, 40, 5, 150);
    } else {
      speed = 0.1;
      this.bounceY = 0
    }

    this.head = 20 * sin(frameCount * speed)
    for (let i = 0; i < 50; i++) {
      this.aArray[i] = 20 * sin(frameCount * speed + i * 0.05);
    }
    // this.s = map(i, 0, 40, 5, 150);
    // }
    // this.b = cos(frameCount)*0.5; //how long
    // this.a = sin(frameCount)*10;
    //this.s = sin(frameCount)*100;
    // this.arm=10 * sin(frameCount * 0.05)
    //  for (let i = 0; i < 50; i++) {
    //     this.eArray[i] = 20 * sin(frameCount * 0.1 + i * 0.05);
    //     //this.dArray[i] = 30 * sin(frameCount * 0.05 + i * 0.05);
    //   }

    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {

    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y + this.bounceY);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //pedestal
    noStroke()
    fill(0)
    //rect(-50,100,100,60)
    rect(-60, 90, 120, 70)

    //body
    for (let i = 0; i < 50; i++) {
      this.a = this.bArray[i] - 50;
      this.b = this.aArray[i];
      this.c = 60
      fill(35);
      noStroke();
      circle(this.b, this.a, this.c);
    }

    //arms
    //right arm
    //push();
    // for (let i = 0; i < 50; i++) {
    //   this.e = this.dArray[i] - 50;    
    //   this.d = this.eArray[i];     
    //   this.f = 30  
    //   fill(255);
    //   noStroke();
    //   circle(this.e, this.d, this.f);      
    //pop();
    //}
    push();
    let moveX = 20 * noise(frameCount * 0.1)
    translate(moveX, 0);
    beginShape();
    let lineLength = 50;
    noFill();
    stroke(35)

    for (let armI = 0; armI <= lineLength; armI += lineLength / 200) {
      strokeWeight(25);
      let armV = 20 * sin(frameCount * 0.1 - armI / 20);
      vertex(armI, 20 + armV);
    }
    endShape();
    pop();

    //leftarm
    push();
    moveX = 0 * noise(frameCount * 0.1)
    scale(-1, 1)
    translate(moveX, 0);
    beginShape();
    //let lineLength = 70;
    noFill();
    stroke(35)

    for (let armI = 0; armI <= lineLength; armI += lineLength / 200) {
      strokeWeight(25);
      let armV = 20 * sin(frameCount * 0.1 - armI / 25);
      vertex(armI + 10, 20 + armV);
    }
    endShape();
    pop();




    //face 1
    fill(35)
    strokeWeight(25)
    stroke(219, 138, 72)
    line(this.head + 30, 30 - 50, this.head + 50, 40 - 50)
    noStroke()
    circle(this.head, -50, 105)

    //face
    fill(100)
    circle(this.head, -50, 80)
    //nose
    fill(250, 182, 182)
    circle(this.head, -42, 10)
    //eyes
    //left eye
    for (let i = 0; i < 2 * PI; i += PI / 3.5) {
      push();
      fill(255)
      translate(this.head - 20, -55)
      rotate(i);
      circle(7, 7, 13);
      pop();
    }
    for (let i = 0; i < 2 * PI; i += PI / 4) {
      push();
      fill(255)
      translate(this.head - 20, -55)
      rotate(i);
      circle(7, 8, 13);
      pop();
    }
    fill(255)
    circle(this.head - 20, -55, 25)
    fill(247, 244, 52)
    circle(this.head - 20, -55, 15)

    //right eye
    for (let i = 0; i < 2 * PI; i += PI / 3.5) {
      push();
      fill(255)
      translate(this.head + 20, -55)
      rotate(i);
      circle(7, 7, 13);
      pop();
    }
    for (let i = 0; i < 2 * PI; i += PI / 4) {
      push();
      fill(255)
      translate(this.head + 20, -55)
      rotate(i);
      circle(7, 8, 13);
      pop();
    }
    fill(255)
    circle(this.head + 20, -55, 25)
    fill(247, 244, 52)
    circle(this.head + 20, -55, 15)

    //mouth
    stroke(219, 2, 2)
    noFill()
    strokeWeight(8)
    arc(this.head, -36, 40, 30, 0 + 0.3, PI - 0.3)
    arc(this.head, -40, 33, 23, 0 + 0.4, PI - 0.4)
    stroke(0)
    strokeWeight(1)
    arc(this.head, -38, 40, 30, 0 + 0.3, PI - 0.3)

    //eyebrow
    strokeWeight(5)
    stroke(0)
    line(this.head + 10, -75, this.head + 22, -80)
    line(this.head - 10, -75, this.head - 22, -80)

    //pedestal
    noStroke()
    fill(27)
    rect(-50, 100, 100, 60)
    //rect(-50,90,110,70)
    noStroke()
    fill(20)
    beginShape()
    vertex(-60, 90)
    vertex(-50, 100)
    vertex(-50, 100 + 60)
    vertex(-60, 160)
    vertex(-60, 90)
    endShape()
    noStroke()
    fill(20)
    beginShape()
    vertex(-60 + 120, 90)
    vertex(-50 + 110, 100)
    vertex(-50 + 110, 100 + 60)
    vertex(-60 + 110, 100 + 60)
    vertex(-60 + 110, 100)
    endShape(-60 + 120, 90)
    push();
    textSize(30);
    textFont('AkayaKanadaka')
    fill(255, 200);
    noStroke();
    textAlign(CENTER, CENTER);

    text("Nono🍳", 0, 140);

    pop();
  }

  // ⬆️ draw your dancer above ⬆️
  // ******** //

  // the next function draws a SQUARE and CROSS
  // to indicate the approximate size and the center point
  // of your dancer.
  // it is using "this" because this function, too, 
  // is a part if your Dancer object.
  // comment it out or delete it eventually.
  //   this.drawReferenceShapes()


  //   pop();
  // }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}
//joella
class JoellaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // wing attributes
    this.leftWingX = 0;
    this.leftWingY = 0;
    this.rightWingX = 0;
    this.rightWingY = 0;
    // attenna
    this.antennaLeftAngle = -PI / 4;
    this.antennaRightAngle = -(3 * PI / 4);
    this.antennaLength = 25;

    // wing flap angle
    this.leftWingAngle = 0;
    this.rightWingAngle = 0;
    this.wingSpeed = 0.04;

    //movement code
    this.bounceY = 0;
    this.legKick = 0;

    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    // wing movement
    // abs so wings don't go positive
    this.leftWingAngle = -abs(sin(frameCount * this.wingSpeed)) * 0.6;
    this.rightWingAngle = -abs(sin(frameCount * this.wingSpeed)) * 0.6;

    // moving on the y-axis
    this.bounceY = sin(frameCount * 0.15) * 17.5;
    // legs movement
    this.legKick = sin(frameCount * 0.1) * 8;

    if (frameCount % 200 == 0) {
      this.wingSpeed = random(0.02, 0.08);
    }

  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    translate(0, this.bounceY);

    // push();
    // rectMode(CENTER);
    // rect(0, 0, 200, 200);
    // pop();

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // LEGS
    stroke(0);
    stroke(255);
    strokeWeight(2);
    // left legs
    line(-40, -10, -65, -5 + this.legKick);
    line(-40, 0, -65, 8 + this.legKick);
    line(-40, 12, -65, 22 + this.legKick);
    // right legs
    line(40, -10, 65, -5 + this.legKick);
    line(40, 0, 65, 8 + this.legKick);
    line(40, 12, 65, 22 + this.legKick);

    // body
    push();

    // red body for ladybug
    stroke(255);
    strokeWeight(2);
    fill(0);
    circle(0, -35, 40);
    circle(0, 0, 80);
    // circle(0, 0, 80);

    // LEFT WING

    push();
    translate(0, -40);
    rotate(-this.leftWingAngle);
    translate(0, 40);
    fill(207, 27, 0);
    stroke(5);

    arc(this.leftWingX, this.leftWingY, 80, 80, PI / 2, (3 * PI / 2));

    // black spots
    fill(0);
    // left side wings
    circle(this.leftWingX - 12, this.leftWingY + 22, 10);
    circle(this.leftWingX - 25, this.leftWingY, 10);
    circle(this.leftWingX - 12, this.leftWingY - 22, 10);

    pop();

    // RIGHT WING STUFF

    push();

    translate(0, -40);
    rotate(this.rightWingAngle);
    translate(0, 40);
    fill(207, 27, 0);
    stroke(5);
    arc(this.rightWingX, this.rightWingY, 80, 80, (3 * PI / 2), PI / 2);

    // right wing spots
    fill(0);
    circle(this.rightWingX + 12, this.rightWingY + 22, 10);
    circle(this.rightWingX + 25, this.rightWingY, 10);
    circle(this.rightWingX + 12, this.rightWingY - 22, 10);

    pop();

    // antennas
    strokeWeight(2);
    stroke(0);
    stroke(255);
    // left antenna
    let lAntX = cos(this.antennaLeftAngle) * this.antennaLength;
    let lAntY = sin(this.antennaLeftAngle) * this.antennaLength;
    line(5, -55, lAntX, -55 + lAntY);
    // fill(0);
    fill(255);
    noStroke();
    circle(lAntX, -55 + lAntY, 6);

    // right antenna
    stroke(0);
    stroke(255);
    let rAntX = cos(this.antennaRightAngle) * this.antennaLength;
    let rAntY = sin(this.antennaRightAngle) * this.antennaLength;
    line(-5, -55, rAntX, -55 + rAntY);
    // fill(0);
    fill(255);
    noStroke();
    circle(rAntX, -55 + rAntY, 6);


    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//ashley
class Ashley {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.Hx = 0;
    this.Hy = 0;
    this.Lx = -90;
    this.Ly = 0;
    this.Rx = 90;
    this.Ry = 0;
    this.Haty = -30;
  }
  update() {
    this.Hx = 0 + 70 * cos(frameCount * 0.01);
    this.Hy = 0 + 20 * sin(frameCount * 0.05);
    // this.Lx =
    this.Ly = 10 * sin(frameCount * 0.1) + noise(frameCount * 0.05) * 20;
    // this.Rx =
    this.Ry = 10 * sin(frameCount * 0.1) + noise(frameCount * 0.05) * 20;
    this.Haty = -40 + sin(frameCount * 0.1) * 10;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    this.DrawHatter(this.Hx, this.Hy);
    // ******** //
    // ⬇️ draw your dancer from here ⬇️



    pop();

  }
  DrawHatter(Hx, Hy) {
    push();
    translate(Hx, Hy);
    let s = map(sin(frameCount * 0.1), -1, 1, 0.5, 1);
    scale(s);
    //face
    push();
    colorMode(HSB, 100);
    noStroke();
    fill(50, 0, 100, 50);
    circle(0, -10, 120);
    pop();
    //glasses and hat

    this.DrawGlasses(0, -10);
    this.DrawHat(0, this.Haty);
    this.DrawMouth(0, 20);
    this.DrawLeftArm(this.Lx, this.Ly);
    this.DrawRightArm(this.Rx, this.Ry);
    pop();
  }

  DrawGlasses(p, q) {
    push();
    colorMode(HSB, 100);
    translate(p, q);
    noStroke();
    fill(100, 100, 0);
    beginShape();
    vertex(-50, -10);
    vertex(-50, 20);
    vertex(-10, 20);
    vertex(-10, 0);
    vertex(10, 0);
    vertex(10, 20);
    vertex(50, 20);
    vertex(50, -10);
    endShape();
    pop();
  }
  DrawHat(a, b) {
    push();
    colorMode(HSB, 100);
    translate(a, b);
    rectMode(CENTER);
    noStroke();
    fill(100, 1, 33);
    rect(0, -5, 150, 15);
    rect(0, -35, 100, 50);
    pop();
  }
  DrawMouth(c, d) {
    push();
    translate(c, d);
    strokeWeight(1);
    stroke(255, 255, 255);
    fill(255, 255, 255);
    arc(0, 0, 70, 50, 0, PI);
    stroke(0, 0, 0);
    strokeWeight(3)
    line(-25, 0, -25, 18);
    line(0, 0, 0, 25);
    line(25, 0, 25, 18);

    pop();
  }
  DrawLeftArm(e, f) {
    push();
    translate(e, f);
    //rectMode(CENTER);
    let angle = sin(frameCount * 0.1) * 0.15 * PI;
    if (sin(frameCount * 0.01) > 0) {
      rotate(PI * 0.6 - angle);
    } else {
      rotate(-(PI * 0.6 + angle));
    }
    fill(255, 255, 255);
    rect(0, 0, 30, 70);
    fill(0, 0, 0);
    rect(0, 0, 30, 60);
    fill(130, 127, 127);
    beginShape();
    vertex(0, 70);
    vertex(0, 100);
    vertex(5, 100);
    vertex(10, 80);
    vertex(15, 100);
    vertex(20, 100);
    vertex(25, 80);
    vertex(30, 75);
    vertex(30, 70);
    endShape();
    pop();
  }
  DrawRightArm(g, h) {
    push();
    translate(g, h);
    //rectMode(CENTER);
    let angle = sin(frameCount * 0.1) * 0.15 * PI;
    if (sin(frameCount * 0.01) > 0) {
      rotate(PI * 0.3 + angle);
    } else {
      rotate(-(PI * 0.6 + angle));
    }
    fill(255, 255, 255);
    rect(0, 0, 30, 70);
    fill(0, 0, 0);
    rect(0, 0, 30, 60);
    fill(130, 127, 127);
    beginShape();
    vertex(0, 70);
    vertex(0, 100);
    vertex(5, 100);
    vertex(10, 80);
    vertex(15, 100);
    vertex(20, 100);
    vertex(25, 80);
    vertex(30, 75);
    vertex(30, 70);
    endShape();
    pop();
  }




  // ⬆️ draw your dancer above ⬆️
  // ******** //

  // the next function draws a SQUARE and CROSS
  // to indicate the approximate size and the center point
  // of your dancer.
  // it is using "this" because this function, too, 
  // is a part if your Dancer object.
  // comment it out or delete it eventually.
  //this.drawReferenceShapes()


  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//andrew
class TrafficTwins {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.angle = 0;
    this.red = true;
    this.green = true;
    this.redangle = PI / 10;
    this.greenwalk = 0.5;
    this.greenx = 0
    this.greeny = 0
    this.t = 0





  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.angle = map(sin(frameCount * 0.05), -1, 1, -PI / 10, PI / 10)
    this.greenwalk = sin(frameCount * 0.2) * 0.5;
    this.redangle = this.redangle + PI / 100;
    if (frameCount % 20 == 0) {
      this.greenx = sin(this.t - frameCount % 1000) * 10;
      this.greeny = cos(this.t + frameCount % 1000) * 10;
    }
    if (frameCount % 10 == 0) {
      this.t = noise(frameCount) * 1000;
      if (noise(this.t) >= 0.5) {
        this.red = true;
      } else {
        this.red = false;
      }
      if (noise(-this.t + frameCount) <= 0.5) {
        this.green = true;
      } else {
        this.green = false;
      }
    }


  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    rotate(this.angle);
    noStroke();
    //main body
    push();
    fill(150, 150, 150)
    rect(-50, -100, 100, 200);
    pop();
    //led screens
    push();
    fill(0);
    rect(-40, -90, 80, 180);
    pop();
    // seperator
    push();
    fill(150, 150, 150);
    rect(-50, -10, 100, 20);
    pop();
    // Red.Jr
    push();
    if (this.red) {
      translate(0, -45); // move to top half of screen
      rotate(this.redangle);
      fill(255, 0, 0);
      // head
      ellipse(0, -20, 12, 12);
      // body
      rect(-3, -15, 6, 20);
      // arms (straight down)
      rect(-8, -15, 4, 15);
      rect(4, -15, 4, 15);
      // legs (together)
      rect(-4, 5, 4, 15);
      rect(0, 5, 4, 15);
    }
    pop();
    //Green.Jr
    push();
    if (this.green) {
      translate(this.greenx, this.greeny + 45); // move to bottom half of screen
      fill(0, 255, 0);
      // head
      ellipse(0, -20, 12, 12);
      // body (slightly tilted forward)
      push();
      rotate(-0.2);
      rect(-3, -15, 6, 20);
      pop();
      // arms (opposite swing)
      push();
      rotate(this.greenwalk * 0.4);
      rect(-8, -10, 4, 15);
      pop();
      push();
      rotate(-this.greenwalk * 0.4);
      rect(4, -10, 4, 15);
      pop();
      // legs (walking split)
      push();
      rotate(-this.greenwalk);
      rect(-2, 5, 4, 15);
      pop();
      push();
      rotate(this.greenwalk);
      rect(2, 5, 4, 15);
      pop();
    }
    pop();
    pop();






    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//Brena
class Brena {

  constructor(startX, startY) {

    this.x = startX;

    this.y = startY;

    // add properties for your dancer here:

    //..

    //..

    //..

  }

  update() {

    // update properties here to achieve

    // your dancer's desired moves and behaviour

    this.y = noise(frameCount * 0.01) * height;

  }

  display() {

    // the push and pop, along with the translate

    // places your whole dancer object at this.x and this.y.

    // you may change its position on line 19 to see the effect.

    push();

    translate(this.x, this.y);




    // ******** //

    // ⬇️ draw your dancer from here ⬇️

    push();

    fill(113, 50, 168);

    circle(45, -45, 58);

    circle(-45, -45, 58);

    pop();

    push();

    fill(133, 50, 168);

    circle(0, 0, 100);

    pop();

    push();

    fill(153, 50, 168);

    circle(-20, -5, 12);

    circle(20, -5, 12);

    pop();








    // ⬆️ draw your dancer above ⬆️

    // ******** //


    // the next function draws a SQUARE and CROSS

    // to indicate the approximate size and the center point

    // of your dancer.

    // it is using "this" because this function, too,

    // is a part if your Dancer object.

    // comment it out or delete it eventually.

    //this.drawReferenceShapes()


    pop();

  }

  drawReferenceShapes() {

    noFill();

    stroke(255, 0, 0);

    line(-5, 0, 5, 0);

    line(0, -5, 0, 5);

    stroke(255);

    rect(-100, -100, 200, 200);

    fill(255);

    stroke(0);

  }

}
//MB
class RoboDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color1 = 220;
    this.color2 = 240;
    this.color3 = 180;
    this.color4 = 160;
    this.colorr = 255;
    this.colorb = 0;
    this.colorw = 255;
    this.headcolor = color(255, 0, 0);
  }
  update() {
    if (mouseIsPressed) {
      this.headcolor = color(random(255), random(255), random(255));
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    noStroke();
    rectMode(CENTER);
    ellipseMode(CENTER);

    let bodymove = map(sin(frameCount * 0.1), -1, 1, -PI / 10, PI / 10);
    let headmove = sin(frameCount * 0.1) * 5;
    let move = sin(frameCount * 0.2)

    //arms
    push()
    translate(0, move - 30)
    push();
    translate(-12 + headmove, 13);
    for (let i = 0; i < 4; i++) {
      let angle = map(sin(frameCount * 0.1), -1, 1, -0.4, 0.8);
      rotate(angle + PI / 10);
      fill(this.color1);
      rect(0, 10, 10, 15);
      translate(0, 14);
    }
    rotate(PI / 10)
    pop();
    push();
    translate(12 + headmove, 13);
    for (let i = 0; i < 4; i++) {
      let angle = map(sin(frameCount * 0.1 + PI), -1, 1, -0.4, 0.8);
      rotate(-angle - PI / 10);
      fill(this.color1);
      rect(0, 10, 10, 15);
      translate(0, 14);
    }
    rotate(PI / 10)
    pop();

    // legs
    push();
    translate(5 - headmove * 2, 70);
    for (let i = 0; i < 2; i++) {
      let angle = map(sin(frameCount * 0.1), -0, 1, 0, 0.2);
      rotate(-angle);
      fill(this.color1);
      rect(0, 0, 10, 30);
      translate(0, 30);
    }
    pop();
    push();
    translate(-5 - headmove * 2, 70);
    for (let i = 0; i < 2; i++) {
      let angle = map(sin(frameCount * 0.1), -0, 1, 0, 0.2);
      rotate(-angle);
      fill(this.color1);
      rect(0, 0, 10, 30);
      translate(0, 30);
    }
    pop();

    // body
    push();
    translate(0, 30);
    rotate(bodymove);
    fill(this.color1);
    ellipse(0, 20, 25, 25);

    fill(this.color1);
    rect(0, 0, 25, 40);

    fill(this.color3);
    rect(0, -10, 15, 10);
    pop();

    // head
    push();
    translate(headmove, move);
    fill(this.color3);
    ellipse(-20, 0, 15, 15);
    ellipse(20, 0, 15, 15);

    fill(this.color1);
    rect(0, -2.5, 40, 35);
    rect(0, -22, 5, 5);

    fill(this.headcolor);
    ellipse(0, -28, 10, 10);

    // face
    fill(this.color4);
    ellipse(-9, -3, 16);
    ellipse(9, -3, 16);

    fill(this.colorr);
    ellipse(-9, -3, 12);
    ellipse(9, -3, 12);

    fill(this.colorb);
    rect(-9, -3, 5, 5);
    rect(9, -3, 5, 5);

    fill(this.colorw);
    rect(0, 7, 10, 7);

    fill(this.color3);
    rect(-2, 7, 1, 7);
    rect(2, 7, 1, 7);
    pop();
    pop()
    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    rectMode(CORNER);
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
//yasmine
class YasmineDancer {

  constructor(startX, startY) {

    this.x = startX;

    this.y = startY;

    this.m = 0

    this.eyeball = color(0)

    this.eyeColor = color(255)

    this.bodycolor = color(252, 186, 3)

    this.wingcolor = color(242, 237, 223, 100)

    // add properties for your dancer here:

    //..

    //..

    //..

  }

  update() {



    // update properties here to achieve

    // your dancer's desired moves and behaviour

  }

  display() {

    // the push and pop, along with the translate

    // places your whole dancer object at this.x and this.y.

    // you may change its position on line 19 to see the effect.

    push();

    noStroke()

    translate(this.x + 50 * sin(frameCount * 0.1), this.y + 20 * sin(frameCount * 0.05));

    fill(this.bodycolor)

    ellipse(0, 0, 20, 40)

    fill(this.wingcolor)

    arc(-25, -10, 40, 40, 0, PI + PI / 4 + 20 * sin(frameCount * 0.05), CHORD)

    scale(-1, 1)

    arc(-25, -10, 40, 40, 0, PI + PI / 4 + 20 * sin(frameCount * 0.05), CHORD)

    arc()

    push()

    fill(this.eyeColor)

    circle(-5, -20, 10)

    fill(this.eyeball)

    circle(-5, -20, 5)

    scale(-1, 1)

    fill(this.eyeColor)

    circle(-5, -20, 10)

    fill(this.eyeball)

    circle(-5, -20, 5)

    pop()

    stroke(255)

    line(10, 10, 20, 30)

    line(20, 30, 20, 120)

    ellipse(25, 120, 20, 10)

    scale(-1, 1)

    line(10, 10, 20, 30)

    line(20, 30, 20, 120)

    ellipse(25, 120, 20, 10)

    //arc(-20,0,30,30,0,PI)







    // ******** //

    // ⬇️ draw your dancer from here ⬇️













    // ⬆️ draw your dancer above ⬆️

    // ******** //



    // the next function draws a SQUARE and CROSS

    // to indicate the approximate size and the center point

    // of your dancer.

    // it is using "this" because this function, too,

    // is a part if your Dancer object.

    // comment it out or delete it eventually.

    //this.drawReferenceShapes()



    pop();

  }

  drawReferenceShapes() {

    noFill();

    stroke(255, 0, 0);

    line(-5, 0, 5, 0);

    line(0, -5, 0, 5);

    stroke(255);

    rect(-100, -100, 200, 200);

    fill(255);

    stroke(0);

  }

}
//renata
class Makabaka {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.r = random(100, 150);
    this.g = random(150, 180);
    this.b = random(100, 160);
    this.angle = 0;
    this.clap = 0;
    this.jumpVal = 0;
    this.jumpY = 0;
    this.armLen = 36;

  }
  update() {
    this.angle += 0.03;
    this.clap += 0.08;

    this.r += 1;
    this.g += 1;
    this.b += 1;
    if (this.r > 255) {
      this.r = random(100, 150);
    }
    if (this.g > 255) {
      this.g = random(150, 200);
    }
    if (this.r > 255) {
      this.b = random(100, 160);
    }

    if (mouseIsPressed) {
      dancer.jumpVal = -10;
    }
    this.jumpVal += 0.8;
    this.jumpY += this.jumpVal;
    if (this.jumpY >= 0) {
      this.jumpY = 0;
      this.jumpVal = 0;
    }

    this.flashColor = [this.r, this.g, this.b];

  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    let bounce = sin(this.angle * 2) * 5;
    translate(this.x, this.y + bounce + this.jumpY);

    // ⬇️ draw your dancer from here ⬇️

    let d = dist(mouseX, mouseY, this.x, this.y);
    let mouseFactor = map(d, 0, 200, 0.8, 0.2);
    this.clap += mouseFactor * 0.06;

    let s = sin(this.clap);
    let leanAngle = s * 0.35;
    rotate(leanAngle);
    let clapClose = s;
    if (s < 0) {
      clapClose = -s;
    }
    let side;
    if (s > 0) {
      side = 1;
    } else {
      side = -1;
    }

    let inAir = false;
    if (this.jumpY < -5) {
      inAir = true;
    }

    if (inAir == true) {
      push();
      translate(15, 38);
      rotate(-0.7);
      fill(210, 195, 165);
      stroke(160, 140, 110);
      strokeWeight(2);
      ellipse(0, 10, 16, 24);
      fill(90, 70, 50);
      noStroke();
      ellipse(0, 22, 20, 10);
      pop();

      push();
      translate(-15, 38);
      rotate(0.7);
      fill(210, 195, 165);
      stroke(160, 140, 110);
      strokeWeight(2);
      ellipse(0, 10, 16, 24);
      fill(90, 70, 50);
      noStroke();
      ellipse(0, 22, 20, 10);
      pop();
    } else {
      // leg down
      let supportX = side * 12;
      fill(210, 195, 165);
      stroke(160, 140, 110);
      strokeWeight(2);
      ellipse(supportX, 52, 16, 24);
      // feet down
      fill(90, 70, 50);
      noStroke();
      ellipse(supportX, 65, 20, 10);
      // leg up
      let liftX = -side * 12;
      let liftLegAngle = side * 0.55; // 向外倾斜
      push();
      translate(liftX, 42);
      rotate(liftLegAngle);
      fill(210, 195, 165);
      stroke(160, 140, 110);
      strokeWeight(2);
      ellipse(0, 10, 14, 22);
      // feet up
      fill(90, 70, 50);
      noStroke();
      push();
      translate(side * -8, 22);
      rotate(side * 0.7);
      ellipse(0, 0, 18, 8);
      pop();
      pop();
    }
    // body
    fill(235, 220, 190);
    stroke(180, 155, 120);
    strokeWeight(2);
    ellipse(0, 10, 62, 68);

    // head
    fill(235, 220, 190);
    stroke(180, 155, 120);
    strokeWeight(2);
    ellipse(0, -38, 48, 33);
    ellipse(25, -38, 6, 15);
    ellipse(29, -38, 5, 12);
    ellipse(-25, -38, 6, 15);
    ellipse(-29, -38, 5, 12);
    ellipse(0, -57, 18, 7);
    ellipse(0, -62, 12, 5);
    fill(180, 155, 120);
    ellipse(33, -38, 5, 5);
    ellipse(-33, -38, 5, 5);
    ellipse(0, -66, 5, 5);

    // eyes
    fill(55, 38, 20);
    noStroke();
    ellipse(-10, -40, 10, 11);
    ellipse(10, -40, 9, 10);
    fill(255);
    ellipse(-8, -43, 4, 4);
    ellipse(12, -43, 3, 3);

    // nose
    fill(200, 118, 85);
    stroke(155, 88, 58);
    strokeWeight(1.5);
    ellipse(0, -33, 3, 1);

    // mouth
    noFill();
    stroke(135, 98, 65);
    strokeWeight(2);
    arc(0, -30, 15, 7, 0, PI);

    let lhx, lhy, rhx, rhy;
    if (inAir == true) {
      lhx = -24 + cos(-2.2) * this.armLen;
      lhy = 2 + sin(-2.2) * this.armLen;
      rhx = 24 + cos(-0.9) * this.armLen;
      rhy = 2 + sin(-0.9) * this.armLen;
      stroke(180, 155, 120);
      strokeWeight(9);
      line(-24, 2, lhx, lhy);
      fill(235, 220, 190);
      stroke(180, 155, 120);
      strokeWeight(1.5);
      ellipse(lhx, lhy, 13, 13);
      stroke(180, 155, 120);
      strokeWeight(9);
      line(24, 2, rhx, rhy);
      fill(235, 220, 190);
      stroke(180, 155, 120);
      strokeWeight(1.5);
      ellipse(rhx, rhy, 13, 13);
    } else {
      // arm movement
      let armSpread = (1 - clapClose) * 0.5;
      let leftArmAngle = side * (-0.25 - armSpread * 0.5);
      let rightArmAngle = side * (-0.25 + armSpread * 0.5);

      let lArmLen = 36;
      let rArmLen = 36;
      lhx = -24 + cos(leftArmAngle) * lArmLen * side;
      rhx = 24 + cos(rightArmAngle) * rArmLen * side;
      lhy = 2 - armSpread * 25;
      rhy = 2 + armSpread * 25;
      // left arm
      stroke(180, 155, 120);
      strokeWeight(9);
      line(-24, 2, lhx, lhy);
      fill(235, 220, 190);
      stroke(180, 155, 120);
      strokeWeight(1.5);
      ellipse(lhx, lhy, 13, 13);
      // right arm
      stroke(180, 155, 120);
      strokeWeight(9);
      line(24, 2, rhx, rhy);
      fill(235, 220, 190);
      stroke(180, 155, 120);
      strokeWeight(1.5);
      ellipse(rhx, rhy, 13, 13);
    }
    // clap light

    if (inAir == false) {
      if (clapClose > 0.88) {
        let mx = (lhx + rhx) / 2;
        let my = (lhy + rhy) / 2;
        noStroke();
        fill(this.flashColor, 150);
        ellipse(mx, my, 26, 26);
        fill(255, 255, 255, map(clapClose, 0.88, 1, 0, 100));
        ellipse(mx, my, 14, 14);
      }
    }

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes();

    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}
//yimin
class LOL {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = sin(frameCount * 0.09) * 0.15;
    ;
    // add properties for your dancer here:


  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    // wiggle angle
    this.angle = sin(frameCount * 0.09) * 0.15;



  }
  display() {
    push();
    translate(this.x, this.y);

    // face
    fill(255, 220, 80);
    noStroke();
    push();
    rotate(this.angle);
    ellipse(0, 13, 110, 100);
    pop();

    // body
    fill(255, 220, 80);
    noStroke();
    ellipse(0, 20, 105, 90);

    // //hands
    //  push(); 
    //   rotate(this.angle * 2);  
    //   stroke(255, 220, 80);
    //   strokeWeight(10);
    //   noFill();
    //   beginShape();
    //   let lineLength = 100;
    //   noFill();
    //   for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
    //     let v = 10 * sin(frameCount * 0.1 - i);
    //     vertex(i, v);
    //     circle(i, v, 5)
    //   }
    //   endShape();
    //   pop();


    // left butt 
    fill(255, 220, 80);
    push();
    rotate(this.angle * 1.5);
    ellipse(-12, 40, 100, 90);
    pop();

    //right butt
    fill(255, 220, 80);
    push();
    rotate(this.angle * 1.5);
    ellipse(12, 40, 100, 90);
    pop();

    // left eye
    fill(0);
    push();
    rotate(-PI / 12);
    ellipse(-20, -10, 12, 8);
    pop();

    //right eye
    fill(0);
    push();
    rotate(PI / 12);
    ellipse(20, -10, 12, 8);
    pop();


    // mouth
    noFill();
    stroke(0);
    strokeWeight(2);
    ellipse(0, 8, 20, 8);



    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.



    // ******** //
    // ⬇️ draw your dancer from here ⬇️





    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.


    pop();
  }
  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}