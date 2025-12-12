
///======From Gohai's Section=============
class AimeeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = random(1000);
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.jumpUp = sin(frameCount * 0.08) * -40;
    this.noseScale = 0.05 * sin(frameCount * 0.08) + 1;
    this.earSwing = radians(sin(frameCount * 0.08) * 10);
    this.t += 0.01;
    this.xMove = sin(this.t) * 40;
    this.yMove = cos(this.t) * 10;
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x + this.xMove, this.y + this.yMove);
    noStroke();

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    push();
    rotate(sin(this.t * 20) * 0.15);
    fill(255, 174, 185);
    rect(-33, 25, 12, 12);
    rect(21, 25, 12, 12);
    fill(227, 115, 131);
    arc(-27, 37, 12, 8, 0, PI);
    arc(27, 37, 12, 8, 0, PI);

    fill("pink");
    ellipse(0, 0, 85, 80);

    push();
    fill(255, 174, 185);
    translate(-12, -22);
    rotate(radians(-28) + this.earSwing);
    translate(-15, -10);
    ellipse(0, 0, 30, 20);
    pop();

    push();
    fill(255, 174, 185);
    translate(12, -22);
    rotate(radians(28) - this.earSwing);
    translate(15, -10);
    ellipse(0, 0, 30, 20);
    pop();

    push();
    stroke(0);
    translate(7, -4);
    rotate(radians(25));
    fill(255);
    strokeWeight(2);
    ellipse(0, 0, 14, 20);
    fill(0);
    circle(-2, 1, 7);
    pop();

    push();
    stroke(0);
    translate(-8, -3);
    rotate(radians(-20));
    fill(255);
    strokeWeight(2);
    ellipse(0, 0, 12, 15);
    fill(0);
    circle(1.5, 1, 5);
    pop();

    noStroke();
    fill(227, 115, 131);
    push();
    scale(this.noseScale);
    ellipse(0, 13, 45, 32);

    push();
    translate(-8, 13);
    rotate(radians(-32));
    fill(0);
    ellipse(0, 0, 6, 4);
    pop();

    push();
    translate(8, 13);
    rotate(radians(32));
    fill(0);
    ellipse(0, 0, 6, 4);
    pop();
    pop();

    fill(0);
    triangle(-6, -12, -14, -17, -17, -13);
    triangle(2, -13, 11, -21, 15, -17);
    pop();

    push();
    translate(0, -40 + this.jumpUp);

    fill(255, 239, 219);
    ellipse(0, -70, 80, 75);
    circle(0, -45, 35);
    circle(0, -95, 35);
    circle(-15, -50, 35);
    circle(15, -50, 35);
    circle(-15, -90, 35);
    circle(15, -90, 35);
    circle(-25, -80, 35);
    circle(25, -80, 35);
    circle(-25, -60, 35);
    circle(25, -60, 35);
    circle(-28, -70, 35);
    circle(28, -70, 35);

    fill(205, 129, 98);
    ellipse(0, -65, 45, 50);

    push();
    translate(-18, -70);
    rotate(radians(40) - this.earSwing);
    translate(-10, -8);
    ellipse(0, 0, 20, 15);
    pop();

    push();
    translate(18, -70);
    rotate(radians(-40) + this.earSwing);
    translate(10, -8);
    ellipse(0, 0, 20, 15);
    pop();

    stroke(0);
    strokeWeight(2.5);
    line(0, -42, 0, -48);
    line(0, -48, -8, -52);
    line(0, -48, 8, -52);
    strokeWeight(2);
    fill(255);
    ellipse(-5, -66, 8, 10);
    ellipse(4, -66, 10, 13);
    strokeWeight(2.5);
    line(-12, -67, 12, -68);
    noStroke();
    fill(0);
    arc(-4, -66, 6, 5, 0, PI);
    arc(4, -67, 7, 8, 0, PI);

    push();
    translate(-8, -78);
    rotate(radians(70));
    ellipse(0, 0, 3, 8);
    pop();

    push();
    translate(8, -78);
    rotate(radians(-70));
    ellipse(0, 0, 3, 8);
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

    pop();
  }
}


class AmeliaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.bodyColor = "yellow";
    this.orangeColor = "orange";
    this.orangePosY = -37;
    this.orangeSpeed = -0.1;

    this.angle = 0; // Current angle of rotation
    this.wiggleSpeed = 0.2; // Speed of oscillation
    this.wiggleAmount = PI / 30; // Maximum angle of rotation
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    let oscillation = sin(frameCount * this.wiggleSpeed);
    this.angle = oscillation * this.wiggleAmount;

    // this.orangeY go from -37 to -42 and then back
    this.orangePosY += this.orangeSpeed;
    if (this.orangePosY <= -42 || this.orangePosY >= -37) {
      this.orangeSpeed = -this.orangeSpeed;
    }
    //console.log(this.orangePosY);
  }

  // Head

  drawOrange(orangePosX, orangePosY, orangeWidth, orangeHeight) {
    push();
    translate(orangePosX, orangePosY);
    fill(this.orangeColor);
    ellipse(0, 0, orangeWidth, orangeHeight);

    push();
    translate(0, -orangeHeight / 2);
    fill("brown");
    arc(0, 0, 2, 5, HALF_PI, 0, CHORD);
    pop();

    pop();
  }

  drawEyes(eyePosX, eyePosY, eyeRotation) {
    push();

    push();
    translate(-eyePosX, eyePosY);
    rotate(eyeRotation);
    fill("white");
    ellipse(0, 0, 15, 10);
    fill("black");
    circle(0.5, 1, 8);
    pop();

    push();
    translate(eyePosX, eyePosY);
    rotate(-eyeRotation);
    fill("white");
    ellipse(0, 0, 15, 10);
    fill("black");
    circle(-0.5, 1, 8);
    pop();

    pop();
  }

  drawEars(earPosX, earPosY, earRotation, earWidth, earHeight) {
    push();

    push();
    translate(-earPosX, earPosY);
    rotate(-earRotation);
    fill(this.bodyColor);
    ellipse(0, 0, earWidth, earHeight);
    pop();

    push();
    translate(earPosX, earPosY);
    rotate(earRotation);
    fill(this.bodyColor);
    ellipse(0, 0, earWidth, earHeight);
    pop();

    pop();
  }

  drawHead(headPosX, headPosY) {
    push();

    rotate(-this.angle);
    translate(headPosX, headPosY);
    fill(this.bodyColor);
    noStroke();
    ellipse(0, 0, 80, 66);

    // lower ellipse (nose and mouth)
    push();
    fill(this.orangeColor);
    translate(0, 13);
    ellipse(0, 0, 60, 40);
    pop();

    // eyes
    this.drawEyes(20, -10, PI / 15);

    // orange
    this.drawOrange(0, this.orangePosY, 15, 12);

    // ears
    this.drawEars(30, -20, PI / 9, 10, 15);

    pop();
  }

  // Body

  drawArm(armPosX, armPosY, armRotation, armWidth, armHeight) {
    push();

    // left
    push();
    translate(-armPosX, armPosY);
    rotate(-armRotation);
    fill(this.bodyColor);
    ellipse(0, 0, armWidth, armHeight);
    pop();

    // right
    push();
    translate(armPosX, armPosY);
    rotate(armRotation);
    fill(this.bodyColor);
    ellipse(0, 0, armWidth, armHeight);
    pop();

    pop();
  }

  drawBody(bodyCenterX, bodyCenterY) {
    push();

    noStroke();
    rectMode(CENTER);
    translate(bodyCenterX, bodyCenterY);

    // arms
    push();
    rotate(this.angle);
    this.drawArm(30, 0, -PI / 12, 16, 36);
    pop();

    // upper body
    push();
    fill(this.bodyColor);
    rect(0, 0, 54, 50);
    pop();

    // pants and feet
    fill(this.orangeColor);

    // left
    push();
    translate(-20, 30);
    // foot
    fill(this.bodyColor);
    ellipse(0, 2, 22, 20);
    // pant left
    fill(this.orangeColor);
    rect(0, 0, 22, 10);
    pop();

    // right
    push();
    translate(20, 30);
    // foot
    fill(this.bodyColor);
    ellipse(0, 2, 22, 20);
    // pant right
    push();
    // rotate(this.angle);
    fill(this.orangeColor);
    rect(0, 0, 22, 10);
    pop();
    pop();

    // center pant
    push();
    rotate(this.angle);
    fill(this.orangeColor);
    rect(0, 20, 60, 20);
    pop();

    pop();
  }

  drawDancer() {
    push();

    push();
    // rotate(this.angle);
    this.drawBody(0, -10);
    pop();

    this.drawHead(0, -50);

    pop();
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    this.drawDancer();

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

class AngelinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.emotion = "normal";
    this.emotionChange = 0;
    // add properties for your dancer here:
    this.bodySway = 0;
    this.hairSway = 0;
  }
  update() {
    this.x = width / 2 + sin(frameCount * 0.05) * 10;
    this.y = height / 2 + cos(frameCount * 0.05) * 10;

    this.bodySway = map(sin(frameCount / 50), -1, 1, -10, 10);
    this.hairSway = map(sin(frameCount * 0.1), -1, 1, -5, 5);

    this.emotionChange++;
    if (this.emotionChange > 120) {
      let rand = random();
      if (rand < 0.33) {
        this.emotion = "normal";
      } else if (rand < 0.66) {
        this.emotion = "cry";
      } else {
        this.emotion = "blush";
      }
      this.emotionChange = 0;
      // update properties here to achieve
      // your dancer's desired moves and behaviour
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

    fill("yellow");
    stroke(0);
    noStroke();

    ellipse(this.bodySway, 230, 140, 160); //lowerbody
    circle(this.bodySway, 235, 150); //upperbody
    push();
    translate(this.bodySway - 70, 235);
    rotate(0.5 * sin(frameCount * 0.05));
    translate(0, 20);
    ellipse(0, 0, 20, 40); //hand
    pop();
    push();
    translate(this.bodySway + 70, 235);
    rotate(-0.5 * sin(frameCount * 0.05));
    translate(0, 20);
    ellipse(0, 0, 20, 40);
    pop();
    fill(150, 75, 0);
    circle(this.bodySway - 25, 205, 15); //eyes
    circle(this.bodySway + 25, 205, 15);
    stroke(150, 75, 0);
    line(
      this.bodySway - 10 + this.hairSway,
      140,
      this.bodySway + this.hairSway,
      150
    ); //hair
    line(
      this.bodySway + this.hairSway,
      150,
      this.bodySway + 10 + this.hairSway,
      140
    );
    line(this.bodySway - 15, 310, this.bodySway - 15, 325); //leg
    line(this.bodySway + 15, 310, this.bodySway + 15, 325);
    line(this.bodySway + 15, 317, this.bodySway + 27, 321); //small right leg
    line(this.bodySway + 15, 317, this.bodySway + 5, 321);
    line(this.bodySway - 15, 317, this.bodySway - 5, 321); //small left leg
    line(this.bodySway - 15, 317, this.bodySway - 25, 321);
    fill(255, 165, 0);
    ellipse(this.bodySway, 236, 35, 21); //mouth
    ellipse(this.bodySway, 226, 43, 26);
    fill(150, 75, 0);
    circle(this.bodySway - 5, 225, 5); //nose
    circle(this.bodySway + 5, 225, 5);

    // other emotions
    if (this.emotion === "cry") {
      stroke(150, 75, 0);
      fill(137, 207, 240);
      strokeWeight(1.5);
      arc(this.bodySway - 25, 212, 8, 12, 0, PI); // cry
    }

    if (this.emotion === "blush") {
      stroke(221, 123, 123);
      strokeWeight(1.5);
      line(this.bodySway - 27, 230, this.bodySway - 25, 220); // blush
      line(this.bodySway - 31, 230, this.bodySway - 29, 220);
      line(this.bodySway - 35, 230, this.bodySway - 33, 220);
      line(this.bodySway + 25, 230, this.bodySway + 27, 220);
      line(this.bodySway + 29, 230, this.bodySway + 31, 220);
      line(this.bodySway + 33, 230, this.bodySway + 35, 220);
    }

    stroke(150, 75, 0);
    if (mouseIsPressed) {
      stroke(150, 75, 0);
      strokeWeight(1.5);
      line(this.bodySway - 3, 190, this.bodySway - 3, 198); //angry
      line(this.bodySway + 2, 190, this.bodySway + 2, 198);
      fill("yellow");
      noStroke();
      circle(this.bodySway - 25, 205, 15); //eyes
      circle(this.bodySway + 25, 205, 15);
      fill(150, 75, 0);
      ellipse(this.bodySway - 25, 205, 15, 9); // new eyes
      ellipse(this.bodySway + 25, 205, 15, 9);
    }

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
}

class AnjiDancer {
  constructor(x, y, s = 80) {
    this.x = x;

    this.y = y;

    this.s = s;

    this.angle = 0;

    this.paws = 0;
  }
  update() {
    this.angle += 0.05; //how fast or slow the cat rotates

    this.paws = sin(this.angle * 3) * 8; //how fast or slow the paws oscillate
  }

  display() {
    push();

    translate(this.x, this.y);

    rotate(sin(this.angle) * 0.4); //rotates the body

    noStroke();

    fill(100, 220, 150); //color of the alien cat

    ellipse(0, 30, 50, 60); //the body

    ellipse(0, 0, 40, 40); //the head

    triangle(
      //the ears

      -this.s * 0.2,

      -this.s * 0.4,

      -this.s * 0.2,

      -this.s * 0.05,

      0,

      -this.s * 0.1
    );

    triangle(
      this.s * 0.2,

      -this.s * 0.4,

      this.s * 0.2,

      -this.s * 0.05,

      0,

      -this.s * 0.1
    );

    //the whites of the eyes

    fill(255);

    ellipse(-10, 0, 15, 20);

    ellipse(10, 0, 15, 20);

    //the pupils moving

    fill(0);

    let eyeMove = sin(this.angle * 10); //moves the eyes up and down

    ellipse(-10, 0 + eyeMove, -8, 8);

    ellipse(10, 0 + eyeMove, -5, 5);

    fill(0);

    textAlign(CENTER, CENTER);

    textSize(this.s * 0.3); //scales the text

    rotate(radians(90)); //makes sure the 3 lays down so it looks like a cat's mouth

    text("3", 10, 0);

    //paws moving

    strokeWeight(3);

    stroke(0);

    noFill();

    ellipse(30, 10 - this.paws, 10, 15);

    ellipse(30, -10 - this.paws, 10, 15);

    pop();
  }
}

class CynthiaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.amp = random(50, 70);
    this.blinkCount = 0;
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour

    // blink
    if (frameCount % 120 === 0 && this.blinkCount === 0) {
      this.blinkCount = 8;
    }
    if (this.blinkCount > 0) {
      this.blinkCount--;
    }
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y + 100);
    scale(0.5);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //===== body =====
    fill(55, 150, 100);
    circle(100, 0, 90);
    //arm
    let armSwing = map(sin(frameCount / 20), -1, 1, 10, -10);
    strokeWeight(5);
    stroke(10, 250, 20);
    line(20, 30 + armSwing, 100, 84 + armSwing);
    line(180, 30 + armSwing, 130, 84 + armSwing);
    noStroke();

    circle(100, 84, 80);
    fill(255, 150, 60);
    circle(120, 2 * 78, 70);
    fill(55, 150, 100);
    circle(150, 3 * 71, 60);

    push();
    translate(202, 3 * 77);
    rotate(sin(frameCount * 0.1));
    fill(255, 150, 60);
    circle(0, 0, 50);
    fill(55, 150, 100);
    circle(49, 10, 49);
    fill(255, 150, 60);
    circle(94, 10, 40);
    fill(55, 150, 100);
    circle(129, 10, 30);
    pop();

    //==== face ======
    fill(0);
    circle(80, -5, 10);
    circle(120, -5, 10);
    fill(color("pink"));
    ellipse(65, 3, 10, 5);
    ellipse(135, 3, 10, 5);

    noFill();
    stroke(0);
    strokeWeight(2);
    arc(100, 10, 20, 10, 0, PI);
    noStroke();

    // === chujiao ===
    stroke(10, 250, 20);
    strokeWeight(2);
    let headX = 100;
    let headY = 0;
    let rHead = 45;
    let sway = sin(frameCount * 0.12) * 6;
    line(headX - 12, headY - rHead + 8, headX - 32 - sway, headY - rHead - 25);
    line(headX + 12, headY - rHead + 8, headX + 32 + sway, headY - rHead - 25);
    noStroke();

    // === blink ===
    if (this.blinkCount > 0) {
      fill(55, 150, 100);
      noStroke();
      rect(75, -10, 10, 10, 2);
      rect(115, -10, 10, 10, 2);
      stroke(40, 120);
      strokeWeight(2);
      line(75, -5, 85, -5);
      line(115, -5, 125, -5);
      noStroke();
    }

    this.y = 100 + sin(frameCount / 20) * this.amp;

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
  drawReferenceShapes() {}
}

class MikeDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // Three colors for the pot
    this.potCol1 = color(177, 102, 51);
    this.potCol2 = color(199, 135, 77);
    this.potCol3 = color(211, 154, 98);
    // Color for the cactus body
    this.cactusCol = color(90, 141, 23);
    // Color for spikes
    this.spikeCol = color("red");

    // Body sway parameters
    this.swayAngle = 0;
    this.swaySpeed = 0.05;
    this.swayAmount = 0.15;

    // Arm movement parameters
    this.armLength = 80;
    this.armWaveAmplitude = 10;
    this.armWaveSegments = 30;
  }
  update() {
    this.swayAngle += this.swaySpeed;
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
    translate(0, 40);
    rotate(sin(this.swayAngle) * this.swayAmount);
    translate(0, -40);
    this.drawCactusBody(0, -10);
    this.drawArms(0, 0);
    // Left Eye
    this.drawEyes(-10, -30);
    // Right Eye
    this.drawEyes(10, -30);
    // Mouth
    this.drawMouth(0, 5);
    // Spikes
    this.drawSpikesRight(30, -50);
    this.drawSpikesRight(30, -40);
    this.drawSpikesRight(30, -30);
    this.drawSpikesLeft(-30, -50);
    this.drawSpikesLeft(-30, -40);
    this.drawSpikesLeft(-30, -30);
    pop();

    this.drawPot(0, 40);

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    pop();
  }

  drawPot(potX, potY) {
    noStroke();
    let steps = 50;

    rectMode(CORNER);
    for (let i = 0; i < steps; i++) {
      let t = i / steps;
      let c;

      if (t < 0.5) {
        c = lerpColor(this.potCol1, this.potCol2, t * 2);
      } else {
        c = lerpColor(this.potCol2, this.potCol3, (t - 0.5) * 2);
      }

      fill(c);
      let x = potX - 60 + (120 / steps) * i;
      let w = 120 / steps + 1;
      rect(x, potY - 10, w, 20);
    }

    for (let i = 0; i < steps; i++) {
      let t = i / steps;
      let c;

      if (t < 0.5) {
        c = lerpColor(this.potCol1, this.potCol2, t * 2);
      } else {
        c = lerpColor(this.potCol2, this.potCol3, (t - 0.5) * 2);
      }

      fill(c);

      let topLeft = potX - 55 + (110 / steps) * i;
      let topRight = potX - 55 + (110 / steps) * (i + 1);
      let bottomLeft = potX - 40 + (80 / steps) * i;
      let bottomRight = potX - 40 + (80 / steps) * (i + 1);

      quad(
        topLeft,
        potY + 10,
        topRight,
        potY + 10,
        bottomRight,
        potY + 60,
        bottomLeft,
        potY + 60
      );
    }

    rectMode(CORNER);
  }

  drawCactusBody(bodyX, bodyY) {
    noStroke();
    fill(this.cactusCol);
    rectMode(CENTER);
    rect(bodyX, bodyY, 60, 150, 80);
    rectMode(CORNER);
  }

  drawArms(bodyX, bodyY) {
    strokeWeight(20);
    stroke(this.cactusCol);
    noFill();
    // Left Arm
    beginShape();
    for (let i = 0; i <= this.armWaveSegments; i++) {
      let t = i / this.armWaveSegments;
      let x = bodyX - t * this.armLength;
      let y =
        bodyY + sin(t * PI * 2 + this.swayAngle * 2) * this.armWaveAmplitude;
      vertex(x, y);
    }
    endShape();
    // Right Arm
    beginShape();
    for (let i = 0; i <= this.armWaveSegments; i++) {
      let t = i / this.armWaveSegments;
      let x = bodyX + t * this.armLength;
      let y =
        bodyY +
        cos(t * PI * 2 + PI + this.swayAngle * 2) * this.armWaveAmplitude;
      vertex(x, y);
    }
    endShape();
  }

  drawEyes(eyeX, eyeY) {
    fill(0);
    noStroke();
    ellipse(eyeX, eyeY, 8, 8);
  }

  drawMouth(mouthX, mouthY) {
    stroke(0);
    strokeWeight(2);
    ellipse(mouthX, mouthY, 20, 20);
  }

  drawSpikesRight(spikeX, spikeY) {
    noStroke();
    fill(this.spikeCol);
    triangle(spikeX, spikeY, spikeX, spikeY + 5, spikeX + 20, spikeY + 2.5);
  }

  drawSpikesLeft(spikeX, spikeY) {
    noStroke();
    fill(this.spikeCol);
    triangle(spikeX, spikeY, spikeX, spikeY + 5, spikeX - 20, spikeY + 2.5);
  }
}

class SabrinaDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.pupilX = 0;
    this.pupilSpeedX = 0.3;
    this.h = 0;
    // add properties for your dancer here:
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.pupilX = this.pupilX + this.pupilSpeedX;
    if (this.pupilX > 5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }
    if (this.pupilX < -5) {
      this.pupilSpeedX = this.pupilSpeedX * -1;
    }

    this.h = 200 + sin(frameCount / 10) * 5;
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);
    push();
    translate(0, 0);

    let angle = map(sin(frameCount / 30), -1, 1, 0 - 20, 0 + 20);
    rotate(radians(angle));

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //back of body
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(25, -5, 60, 100);
    ellipse(-25, -5, 60, 100);
    ellipse(0, -10, 60, 100);

    //legs/feet
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-25, this.h - 160, 5, 30);
    rect(20, this.h - 160, 5, 30);
    ellipse(-30, this.h - 130, 30, 10);
    ellipse(30, this.h - 130, 30, 10);

    //stem
    fill(10, 95, 21);
    stroke(10, 95, 21);
    rect(-10, this.h - 270, 20, 60);

    //body
    fill(255, 135, 45);
    stroke(253, 117, 13);
    ellipse(45, 0, 60, 100);
    ellipse(-45, 0, 60, 100);
    ellipse(30, 0, 60, 100);
    ellipse(-30, 0, 60, 100);
    ellipse(0, 0, 60, 100);

    //eyes
    fill(0);
    stroke(0);
    triangle(10, 0, 25, -20, 40, 0);
    triangle(-10, 0, -25, -20, -40, 0);
    ellipse(0, 20, 10, 20);
    fill(255, 240, 97);
    ellipse(25 + this.pupilX, -5, 10, 10);
    ellipse(-25 + this.pupilX, -5, 10, 10);

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

class MarleneDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    this.size = 100;
    this.color1 = color(181, 168, 234);
    this.color2 = color(random(255), random(255), random(255));

    this.angleX = 0;
    this.angleY = 0;
  }

  update() {
    this.angleX = this.angleX + 0.05;
    this.angleY = this.angleY + 0.05;

    this.x = this.x + sin(this.angleX);
    this.y = this.y + cos(this.angleY) * 2;
  }

  display() {
    push();
    translate(this.x, this.y);

    //butterfly wings
    push();
    rotate(sin(this.angleX) * 0.1);
    noStroke();
    fill(255);
    circle(-70, -60, 20);
    circle(-65, -50, 20);
    circle(-55, -40, 20);
    circle(-40, -35, 25);
    circle(-25, -30, 30);
    pop();

    push();
    rotate(-sin(this.angleX) * 0.1);
    noFill();
    stroke(255);
    circle(70, -60, 20);
    circle(65, -50, 20);
    circle(55, -40, 20);
    circle(40, -35, 25);
    circle(25, -30, 30);
    pop();

    //noStroke();

    push();
    rotate(PI / 6 + sin(this.angleX) * 0.1);
    noStroke();
    fill(this.color1);
    ellipse(-50, -20, this.size, this.size * 0.35);
    ellipse(15, -10, this.size * 0.5, this.size * 0.3);
    pop();

    push();
    noStroke();
    fill(this.color1);
    rotate(-PI / 6 - sin(this.angleX) * 0.1);
    ellipse(50, -20, this.size, this.size * 0.35);
    ellipse(-15, -10, this.size * 0.5, this.size * 0.3);
    pop();

    //small dots
    push();
    rotate(-sin(this.angleX) * 0.1);
    fill(this.color1);
    noStroke();
    circle(40, 20, this.size * 0.08);
    circle(47, 30, this.size * 0.12);
    circle(52, 40, this.size * 0.07);
    pop();

    push();
    noFill();
    stroke(255);
    rotate(sin(this.angleX) * 0.1);
    circle(-40, 20, this.size * 0.08);
    circle(-47, 30, this.size * 0.12);
    circle(-52, 40, this.size * 0.07);
    pop();

    //eyes
    fill(255);
    circle(-15, -60, this.size * 0.08);
    circle(15, -60, this.size * 0.08);
    fill(80, 184, 231);
    circle(-17, -59, this.size * 0.05);
    fill(255, 0, 0);
    circle(13, -59, this.size * 0.05);

    //pink ellipse
    fill(253, 177, 200);
    rect(-30, -53, this.size * 0.16, this.size * 0.08);
    rect(14, -53, this.size * 0.16, this.size * 0.08);

    //mosue
    fill(255, 193, 0);
    ellipse(0, -50, this.size * 0.05, this.size * 0.03);

    //ear
    arc(-20, -73, this.size * 0.2, this.size * 0.2, PI, 0);
    arc(20, -73, this.size * 0.2, this.size * 0.2, PI, 0);

    //this.drawReferenceShapes()

    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    //line(-5, 0, 5, 0);
    //line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}
class NiniDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.color1 = "white";
    this.u = width / 2;
    this.v = height / 2;
    this.a = 0;
  }
  update() {
    angleMode(DEGREES); // GH: added
    this.v = 30 * sin(frameCount * 5);
    let angle = sin(frameCount * 10);
    this.larm = map(angle, -1, 1, -PI / 10, PI / 10);
  }

  display() {
    push();
    translate(this.x, this.y + this.v);
    scale(0.7);

    beginShape();
    vertex(-85, 40);
    bezierVertex(0, -165, 0, -150, 85, 40);

    endShape(CLOSE);
    fill(0);
    line(20, -5, -20, -5);

    noStroke();
    fill("pink");
    triangle(-8, -20, 0, -35, 8, -20);

    fill(this.color1);
    noStroke();

    rect(-89, 10, 178, 85, 80);

    push();
    translate(-35, 25);
    fill(0);
    fill(255, 193, 246, 245);
    quad(-50, 40, 120, 40, 160, 70, -80, 70);
    pop();

    angleMode(RADIANS);
    push();
    rotate(this.larm);
    rect(50, 10, 40, 10, 100, 10, 10, 10);
    rect(-85, 0, 25, 7, 100, 10, 10, 10);
    stroke("magenta");
    strokeWeight(5);
    line(85, 15, 80, -50);
    fill(255);
    translate(80, -50);
    scale(0.5);
    beginShape();
    vertex(0, -50);
    vertex(14, -20);
    vertex(47, -15);
    vertex(23, 7);
    vertex(29, 40);
    vertex(0, 25);
    vertex(-29, 40);
    vertex(-23, 7);
    vertex(-47, -15);
    vertex(-14, -20);
    endShape(CLOSE);

    pop();

    fill(0);
    noStroke();
    angleMode(DEGREES);
    rotate(10);
    ellipse(-35, -45, 28, 35);
    fill(255);
    ellipse(-35, -56, 12, 5);
    fill(0);
    rotate(-20);
    ellipse(34, -45, 28, 35);
    fill(255);
    ellipse(35, -56, 12, 5);
    rotate(25);
    ellipse(15, -45, 12, 5);
    angleMode(DEGREES);
    rotate(330);
    fill(255);
    ellipse(-13, -45, 12, 5);
    angleMode();

    pop();

    pop();
  }
  drawReferenceShapes() {}
}

class StephenDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.col = color(176, 161, 130);
    this.rightArmAngle = 0;
    this.leftArmAngle = 0;
    this.armSpeed = random(1, 4);
    this.leftLegAngle = 0;
    this.rightLegAngle = 0;
    this.legSpeed = random(3, 8);
    this.danceStep = 0;
  }
  update() {
    angleMode(DEGREES);
    this.rightArmAngle = sin(frameCount * this.armSpeed + PI) * 30;
    this.leftArmAngle = cos(frameCount * this.armSpeed + PI) * 30;
    this.leftLegAngle = cos(frameCount * this.legSpeed + PI) * 20;
    this.rightLegAngle = sin(frameCount * this.legSpeed + PI) * 20;
    this.x = this.x + map(sin(frameCount * 10), -1, 1, -2, 2);

    if (mouseIsPressed) {
      this.danceStep = (this.danceStep + 1) % 60;

      // Two-steps forward
      if (this.danceStep < 30) {
        this.x = this.x + 1.5;
      } else {
        // Step back
        this.x = this.x - 1.5;
        this.leftarmAngle = cos(this.danceStep * 5) * 30;
        this.rightarmAngle = sin(this.danceStep * 5) * 30;
        this.leftLegAngle = cos(this.danceStep * 5) * 10;
        this.rightLegAngle = sin(this.danceStep * 5) * 10;
      }
    }
  }
  display() {
    push();
    translate(this.x, this.y);
    this.drawFace();
    this.drawBody();
    this.drawArm();
    this.drawLeg();

    pop();
  }
  // Face
  drawFace() {
    fill(this.col);
    ellipse(0, 0, 100);
    fill("white");
    //Eyes
    circle(-25, 0, 15);
    circle(25, 0, 15);

    //Pupil
    fill("black");
    circle(-25, 0, 6);
    circle(25, 0, 6);

    //nose
    triangle(0, 10, -6, 15, 6, 15);

    //mouth
    noStroke();
    fill("white");
    arc(0, 25, 30, 30, 0, -180);
  }
  //Body
  drawBody() {
    push();
    fill(this.col);
    noStroke();
    rect(-50, 40, 100, 100);

    //Ghana flag
    fill("red");
    rect(-20, 70, 40, 10);
    fill("gold");
    rect(-20, 80, 40, 10);
    fill("green");
    rect(-20, 90, 40, 10);
    fill(0);
    triangle(-5, 85, 0, 80, 5, 85);
    triangle(-7, 85, 0, 83, 0, 88);
    triangle(7, 85, 0, 83, 0, 88);
    triangle(-5, 85, 0, 90, 5, 85);
    pop();
  }
  //Arm

  drawArm() {
    //Right-arm
    fill(this.col);
    push();
    translate(50, 50);
    rotate(this.rightArmAngle);
    noStroke();
    rect(-25, 5, 100, 20);
    circle(75, 20, 40);

    pop();

    //Left-arm
    push();
    translate(-50, 50);
    rotate(this.leftArmAngle);
    noStroke();
    rect(-75, 5, 100, 20);
    circle(-75, 15, 40);
    pop();
  }
  //Leg
  drawLeg() {
    //Left- leg
    push();
    translate(-25, 140);
    rotate(this.leftLegAngle);
    rect(-10, -10, 20, 70);
    pop();

    push();
    translate(25, 140);
    rotate(this.rightLegAngle);
    rect(-5, -10, 20, 70);
    pop();
  }
}

class QinDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0; // GH: changed
  }
  update() {
    // GH: added
  }
  display() {
    push();
    this.t += 0.05;
    translate(this.x, this.y);
    //body
    noStroke();
    colorMode(HSB);
    for (let i = -60; i < 70; i += 10) {
      for (let j = -80; j < 60; j += 10) {
        //bodycolor
        let d = dist(i, j, -50, -80);
        let dSize = dist(mouseX - this.x, mouseY - this.y, i, j);
        fill(map(d, 0, 200, 0, 360), 80, 100);
        if (dSize < 30) {
          circle(
            i + 5 * sin(this.t * 2),
            j + 5 * cos(this.t * 2),
            map(dSize, 0, 30, 3, 10)
          );
        } else {
          circle(i - 5 * sin(this.t * 2), j - 5 * cos(this.t * 2), 10);
        }
      }
    }
    colorMode(RGB);

    //eye
    let ex1, ey1, ex2, ey2;
    let d2 = dist(mouseX - this.x, mouseY - this.y, 0, -50);
    noStroke();
    fill(250);
    circle(-15, -50, 30);
    circle(15, -50, 30);
    if (d2 < 150) {
      fill(0);
      ex1 = map(mouseX - this.x, -70, 70, -20, -10);
      ey1 = map(mouseY - this.y, -100, 50, -60, -45);
      ex2 = map(mouseX - this.x, -70, 70, 10, 20);
      ey2 = map(mouseY - this.y, -100, 50, -60, -45);
      circle(ex1, ey1, 10);
      circle(ex2, ey2, 10);
    } else {
      fill(0);
      circle(-10, -50, 10);
      circle(10, -50, 10);
    }

    // limbs
    stroke(255);
    strokeWeight(3);
    noFill();
    curve(
      -40,
      -80,
      -60 - 5 * sin(this.t * 2),
      0 - 5 * cos(this.t * 2),
      -20,
      0,
      -10,
      -80
    );
    curve(
      40,
      -80,
      60 - 5 * sin(this.t * 2),
      0 - 5 * cos(this.t * 2),
      20,
      0,
      10,
      -80
    );
    curve(
      20,
      80,
      -20 - 5 * sin(this.t * 2),
      50 - 5 * cos(this.t * 2),
      -20,
      90,
      20,
      85
    );
    curve(
      -20,
      80,
      20 - 5 * sin(this.t * 2),
      50 - 5 * cos(this.t * 2),
      20,
      90,
      -20,
      85
    );
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


///========Fram Ian's Section

class XinyanHuangDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    this.glowColor = random(360);
    this.glowIntensity = 0.5;
    this.bodycolor = random(360);
    this.monsterSize = 70;
    this.eyeSize = 30;
    this.spikeSize = 20;
    this.breathe = true;
    this.Timer2 = 0;
    this.isBlinking = false;
    }
  update() 
    {
    //身体大小变化
    colorMode(HSB);
    //noLoop();
    if(this.breathe){
      this.monsterSize+=5;
      if(this.monsterSize>100){
        this.breathe = false;}
      }
      else{
        this.monsterSize -=10;
        if(this.monsterSize<70){
          this.breathe = true;
        }
      }
    
    /*
    this.monsterSize += 10;
    if(this.monsterSize>110){
    this.monsterSize = lerp(this.monsterSize,70,0.05);
    */

    //眨眼
    this.Timer2++;
  if (this.Timer2 > 100) { this.isBlinking = true; this.Timer2 = 0; }
  if (this.isBlinking) {
    this.eyeSize = lerp(this.eyeSize, 5, 0.3);
    if (this.eyeSize < 6) this.isBlinking = false;
  } else {
    this.eyeSize = lerp(this.eyeSize, 30, 0.3);
  }
  }



  
  display() 
  {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //发光
    fill(this.glowColor, 80, 100, this.glowIntensity);
    noStroke();
    circle(0,0, this.monsterSize + 15);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.5);
    circle(0,0, this.monsterSize + 25);
    fill(this.glowColor, 80, 100, this.glowIntensity * 0.35);
    circle(0,0, this.monsterSize + 35);

    //手
    fill(random(360),85,90);
    strokeWeight(10);
    bezier(0,0,-100,random(-50,50), - 75,
   random(-50,50),-100,0);
  bezier(0,0,100,random(-50,50),75,random(-50,50),100,0);
 
    //身体
    fill(this.bodycolor,80,90);
    circle(0,0,this.monsterSize);
    
    //尖刺
    for (let i = 0; i < 15; i++) {
      let angle = map(i, 0, 15, 0, TWO_PI);
      fill(random(360), 80, 90);
      noStroke();
      let r1 = this.monsterSize / 2 + this.spikeSize + 10;
      let r2 = this.monsterSize / 2 + this.spikeSize / 2;
      triangle(
        0,
        0,
        cos(angle) * r1,
        sin(angle) * r1,
        cos(angle + PI / 15) * r2,
        sin(angle + PI / 15) * r2
      );
    }
    //眼睛

    fill('white');
    ellipse(-40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(-40, -20, this.eyeSize / 2, this.eyeSize / 2);
    fill('white');
    ellipse(40, -20, this.eyeSize + 15, this.eyeSize + 10);
    fill(0, 0, 0);
    ellipse(40, -20, this.eyeSize / 2, this.eyeSize / 2);
    //嘴
    noFill();
    stroke(0, 0, 0);
    strokeWeight(4);
    arc(0, 20, 60, 40, 0, PI);

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
 
}

// from Micheal
class Tapper {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
  }

  update() {
    this.t += 0.05;
    this.hipSwing = sin(this.t) * 8; //side movement
    this.legSwing = sin(this.t) * 12; // leg swing
    this.armSwing = sin(this.t * 0.5) * 0.3; // arm movement
  }
display() {
  push();
  translate(this.x, this.y);

  stroke(255);
  strokeWeight(3);
  noFill();

  // body tilt
  push();
  let tilt = this.hipSwing * 0.2; 
  translate(this.hipSwing, 0);
  rotate(tilt); 
  line(0, -50, 0, 0);
  // head
  ellipse(0, -80, 20);
  
  // arms swing relative to body
  let shoulderY = -40;
  let armLength = 30;
  let armAngle = this.armSwing;

  // left arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(-10, shoulderY);
  rotate(armAngle);
  line(0, 0, -armLength, 0);
  pop();

  // right arm draws arm based off there the shoulder y level should be and rotates it 
  push();
  translate(10, shoulderY);
  rotate(armAngle);
  line(0, 0, armLength, 0);
  pop();

  pop();

  // creates main hip point where the legs and hips will swing
  push();
  translate(this.hipSwing, 0);
  ellipse(0, 0, 10);

  // legs swing, just two lines going opposite directions just like the arms 
  let legMovement = this.legSwing;
  line(0, 0, -25 + legMovement, 40);
  line(0, 0, 25 + legMovement, 40);
  pop();

  // reference box and cross
  this.drawReferenceShapes();

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

// From Nick
class NickDancer 
{
  constructor(startX, startY) 
  {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
    this.time = 0;
    this.bobAmount = 10;
    this.speed = 1.5;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.time += 0.08 * this.speed;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    let bob = sin(this.time) * this.bobAmount;
    
    stroke(255);
    strokeWeight(2);
    fill(255);
    
    push();
    translate(0, 70 + bob);
    rotate(this.time);
    noFill();
    circle(0, 0, 40);
    line(-10, -10, 10, 10);
    line(-10, 10, 10, -10);
    pop();
    
    push();
    translate(0, 40 + bob);
    line(0, 0, 0, 30);
    
    fill(255);
    noStroke();
    ellipse(0, 2, 20, 8);
    stroke(255);
    
    fill(255);
    triangle(-15, 0, 15, 0, 0, -25);
    
    strokeWeight(2);
    noFill();
    
    let pedalRadius = 15;
    let wheelCenterY = 30;
    let leftPedalX = cos(this.time) * pedalRadius;
    let leftPedalY = sin(this.time) * pedalRadius + wheelCenterY;
    let rightPedalX = cos(this.time + PI) * pedalRadius;
    let rightPedalY = sin(this.time + PI) * pedalRadius + wheelCenterY;
    
    line(0, wheelCenterY, leftPedalX, leftPedalY);
    line(0, wheelCenterY, rightPedalX, rightPedalY);
    
    let thighLength = 18;
    
    let leftDist = dist(0, 0, leftPedalX, leftPedalY);
    let leftAngle = atan2(leftPedalY, leftPedalX);
    let leftMidDist = min(leftDist / 2, thighLength);
    let leftKneeX = cos(leftAngle) * leftMidDist + sin(leftAngle) * 8;
    let leftKneeY = sin(leftAngle) * leftMidDist - cos(leftAngle) * 8;
    line(0, 0, leftKneeX, leftKneeY);
    line(leftKneeX, leftKneeY, leftPedalX, leftPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(leftPedalX, leftPedalY, 12, 4);
    stroke(255);
    
    let rightDist = dist(0, 0, rightPedalX, rightPedalY);
    let rightAngle = atan2(rightPedalY, rightPedalX);
    let rightMidDist = min(rightDist / 2, thighLength);
    let rightKneeX = cos(rightAngle) * rightMidDist + sin(rightAngle) * 8;
    let rightKneeY = sin(rightAngle) * rightMidDist - cos(rightAngle) * 8;
    line(0, 0, rightKneeX, rightKneeY);
    line(rightKneeX, rightKneeY, rightPedalX, rightPedalY);
    
    rectMode(CENTER);
    fill(255);
    noStroke();
    rect(rightPedalX, rightPedalY, 12, 4);
    stroke(255);
    
    strokeWeight(2);
    line(-15, -10, -25, -5);
    line(15, -10, 25, -5);
    
    noFill();
    circle(0, -40, 25);
    
    fill(255);
    triangle(-10, -52, 10, -52, 0, -70);
    
    strokeWeight(3);
    point(3, -42);
    point(8, -40);
    
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
}

// From Alyx
class AlyxDancer 
{
  constructor(startX, startY, colorR, colorG, colorB) {
    this.x = startX;
    this.y = startY;
    this.f = 100;
    this.j = 0
    this.r = colorR;
    this.g = colorG;
    this.b = colorB;
    this.arm = 0;
    this.leg = 0;
    this.tail = 0;
    this.horn = 20;
    this.speed = 1
    this.pistol = 0;
    
  }
  update() {
    this.x += this.speed;
    this.y += sin(frameCount*0.05) * 2 ;
    
    this.f += sin(frameCount*0.05) * 0.5 ;
    this.j += sin(frameCount*0.05);
    this.arm = sin(frameCount * 0.1) * 30;
    this.leg = sin(frameCount * 0.15) * 20;
    this.tail = sin(frameCount * 0.1) * 10;
    this.pistol += 1
    if( this.x > 2*width/3 | this.x < width/3) {
      this.speed *= -1
    }
    if(keyIsPressed) {
      this.leg *= 1.5
    }
    
  }
  
  
   
  display() {
    this.r = map(this.f, 90, 110, 200, 50);
    this.g = map(this.f, 90, 110, 50, 200);
    this.b = map(this.f, 90, 110, 50, 200);
    
    

    push();
    translate(this.x, this.y);
      push()
    scale(0.5)
   
      fill(this.r, this.g, this.b);
      noStroke();
      //body
      circle(0, 0 - this.j, this.f );
      rect(0 - this.f/2, 0 - this.j, this.f);
      ellipse(0, 0 + this.f - this.j, this.f, this.f - 60);
      //head
      ellipse(0, 0 - 50 - this.j, this.f, this.f - 20)
      //eyes
      fill(255)
      ellipse(-15 - this.j/6, -60 - this.j, 10, 10);
      ellipse(15 + this.j/6, -60 - this.j, 10, 10);
      fill(0)
      ellipse(-15 - this.j/6, -60 - this.j, 8, 8);
      ellipse(15 + this.j/6, -60 - this.j, 8, 8);
      //eye brown
      noFill()
      stroke(50)
      strokeWeight(3)
      bezier(-25 - this.j/6, -70 - this.j, -15 - this.j/6, -80 - this.j, -10 - this.j/6, -60 - this.j, -5 - this.j/6, -70 - this.j)
      bezier(25 + this.j/6, -70 - this.j, 15 + this.j/6, -80 - this.j, 10 + this.j/6, -60 - this.j, 5 + this.j/6, -70 - this.j)
      //heart
      noStroke()
      fill("red")
      circle(10 - this.j/10,10 - this.j/4,10 + this.j/5);
      circle(20 + this.j/10,10 - this.j/4,10 + this.j/5);
      triangle(
        5 - this.j/5,12 - this.j/4,25 + this.j/5,12 - this.j/4,15,22 - this.j/4  + this.j/5
      )
      //mouth
      fill(255, 100, 100);
      arc(0, -50 - 3 * this.j/4, 30, 20, 0, PI);
    
      //hat
      fill("#795548")
      stroke("#250C03B7")
      
      rect(20 - this.f/2, -150 - this.j, this.f - 45, this.f - 50)
      ellipse(0, - 90 - this.j, this.f + 20, 30)
      ellipse(-3, - 150 - this.j, this.f - 46, 20)
      noStroke()
      rect(22 - this.f/2, -110 - this.j, this.f - 49, this.f - 90)
      //arms and legs
      fill(this.r, this.g, this.b);
      push();
      rotate(radians(this.arm * 0.15));
      rect(-this.f * 0.7, -30, 10, 60);
       //pistol
       push();
        translate(-this.f * 0.7 - 2, 26); 
        rotate(radians(this.pistol * 10));    
        fill("grey");
        rect(-2.5, 0, 5, 30); 
        rect(0, -3, 17, 8)
        noFill()
        strokeWeight(2)
        stroke("grey")
        rect(0, -3, 10, 15)
        rect(0, 7, 5,1)
        pop();
      pop();


      push();
      rotate(radians(this.arm));
      rect(this.f * 0.6, -30, 10, 60);
      pop();

      rect(-30, 100 + this.leg, 15, 50);
      rect(20, 100 - this.leg, 15, 50);
    
    //tongue
    if(keyIsPressed){
      fill("#CE514C")
      rect(-10,-this.j * 0.8 - 45,20,30)
      ellipse(0, -this.j * 0.8 - 15 , 20, 10)
      fill("#BF3934")
      rect(-1,-this.j * 0.8 - 45,2,30)
    }
    
        



  
    pop();
    //this.drawReferenceShapes()
    
   
    
  }
}


// From Jinhan Niu
class Stickman
{ 
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.groundY = startY; // Remember the ground position

    //Basic Look
    this.bodyHeight = 80;
    this.limbLength = 40;
    this.headR = 20; 
    this.strokeW = 3; 
    this.color = color(255);

    //Movement
    this.bodyAngle = 0; //swayangle
    this.armAngle = 0;
    this.bodySpeed = random(0.01, 0.05); // swayspeed
    this.armSpeed = random(0.05, 0.1);

    //Mouse Jump
    this.velY = 0; // jump velocity
    this.gravity = 0.3; //Gravity
    this.isJumping = false; 
    this.hitBox = this.headR + 20; 
  }

  update() {
    //randomly change speed
    //chance each frame to change speed)
    if (random(1) < 0.01) {
      this.bodySpeed = random(0.01, 0.05);
    }
    if (random(1) < 0.01) {
      this.armSpeed = random(0.05, 0.2);
    }

    // Basic Movement
    this.bodyAngle += this.bodySpeed;
    this.armAngle += this.armSpeed;

    //Mouse Interaction
    //Calculate distance between mouse and stickman's head
    let d = dist(mouseX, mouseY, this.x, this.y - this.bodyHeight - this.headR);

    // if mouse is close
    if (d < this.hitBox && !this.isJumping) {
      this.isJumping = true; // Set state to "jumping"
      this.velY = -8; // Apply an upward force
    }

    //Jump Physics
    if (this.isJumping) {
      this.y += this.velY; // Move Y position based on velocity
      this.velY += this.gravity; // Apply gravity

      //if on the ground
      if (this.y >= this.groundY) {
        this.y = this.groundY; //on the ground
        this.isJumping = false; //set state
        this.velY = 0; //Reset
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    // Calculate body rotation
    let bodyRot = sin(this.bodyAngle) * 0.2;
    rotate(bodyRot);

    stroke(this.color);
    strokeWeight(this.strokeW);
    noFill();

    //Head
    ellipse(0, -this.bodyHeight - this.headR, this.headR * 2);

    //Body
    line(0, 0, 0, -this.bodyHeight);

    // Right Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * 0.5);
    line(0, 0, this.limbLength, 0);
    pop();

    //Left Arm
    push();
    translate(0, -this.bodyHeight * 0.75); 
    rotate(sin(this.armAngle) * -0.5);
    line(0, 0, -this.limbLength, 0);
    pop();

    //Right Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * 0.2);
    line(0, 0, this.limbLength * 0.5, this.limbLength);
    pop();

    //Left Leg
    push();
    translate(0, 0); 
    rotate(sin(this.bodyAngle * 0.8) * -0.2);
    line(0, 0, -this.limbLength * 0.5, this.limbLength);
    pop();

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // comment this out or delete it to remove the red box
    // this.drawReferenceShapes() //

    pop();
  }
}


// From Sarah
class BadbadtzSarah {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.t = 0;
    this.mouth = 0;
    this.jump = 0;
    this.jumpSpeed = 0;
    this.dance = random(0.5,1);
    this.move = random([-1,1]);
    this.moveSpeed = random(0.2,0.5);
    this.color = 0;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.t += 0.05;
    this.mouth = sin(this.t)*6;
    this.jump += this.jumpSpeed;
    this.jumpSpeed += random(0.5,2);
    if (this.jump > 0) {
      this.jump = 0;
      this.jumpSpeed = random(-8, -5);
    }
    this.x += this.moveSpeed * this.move;
    if (this.x > 200 || this.x < -200) {
      this.move *= -1;
    }
    this.color += 0.005; 
     if (this.color > 1) {
      this.color = 0;
    }
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    let bodyR = lerp(20, 50, this.color);
    let bodyG = lerp(20, 60, this.color);
    let bodyB = lerp(30, 160, this.color);

    push();//身体
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(bodyR, bodyG, bodyB);
    ellipse(0,40,80,90);
    fill(250);
    noStroke();
    ellipse(0,55,55,60);
    pop();

    push();//头
    translate(this.x, this.y+this.jump);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,-20,70,60);
    
    fill(255);
    ellipse(-15,-30,15,20);
    ellipse(15,-30,15,20);
    
    fill(0);
    ellipse(-15,-30,5,8);
    ellipse(15,-30,5,8);
    
    
    noStroke();
    fill(255,245,127);
    ellipse(0,this.mouth-14.5,18,20);

    stroke(0);
    fill(255);
    ellipse(0,this.mouth-14.5,13,15);
    pop();
    
    push();//左翅膀
    translate(this.x-35, this.y+10+this.jump);
    rotate(sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//右翅膀
    translate(this.x+30, this.y+10+this.jump);
    rotate(-sin(this.t)*this.dance);
    noStroke();
    fill(bodyR, bodyG, bodyB);
    ellipse(0,30,30,50);
    pop();
  
    push();//脚
    translate(this.x, this.y+this.jump);
    rotate(sin(this.t)*0.1);
    fill(255,245,127);
    noStroke()
    ellipse(15,90,20,10);
    ellipse(-15,90,20,10);
    pop();
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
    translate(this.x, this.y);
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(100);
    rect(-100, -100, 200,200 );
    fill(255);
    stroke(0);
  }
}

// From Chenbing
class LeiaDancer {

  constructor(startX, startY) {

    this.x = startX;

    this.y = startY;

    this.body = 120;

    this.eye = this.body / 5;

    this.smileAngle = 0;

    this.cx = 0

    this.direction = 1

    this.cy = 0

    this.jumpAngle = 0

    this.eyeAngle = 0

  }

  update() {

    //eye

    this.eyeAngle+=5

    //smile

    this.smileAngle = abs(((frameCount % 120) - 60))/2;

    //bounce

    this.cy += 1 * this.direction

    if (this.cy <= 25 && this.cy >= -25) {

      this.direction = this.direction

    } else {

      this.direction = -this.direction

    }

    //jump

    if (this.direction >= 0) {

      this.jumpAngle+=3

    } else {

      this.jumpAngle-=3

    }

  }

  display() {

    push();

    translate(this.x, this.y);



    // ******** //

    // ⬇️ draw your dancer from here ⬇️

    noStroke()

    angleMode(DEGREES);

    fill(229, 218, 235)

    arc(this.cx, this.cy, this.body, this.body, 180, 360, CHORD);

    rect(this.cx - this.body / 2, this.cy, this.body, this.body * 0.25);//body

    push()

    // translate(this.cx, this.cy)

    // for (let i = 180; i <= 360; i += 20) {

    //   push()

    //   translate(this.body / 2 * cos(i), this.body / 2 * sin(i))

    //   rotate(0.01 * (i - 270) * this.jumpAngle)

    //   fill(229, 218, 235)

    //   ellipse(0, 5, 10, 10)

    //   rect(-5, 5, 10, 30)

    //   ellipse(0, 35, 10, 10)

    //   pop()



    // }

    // for (let i = 190; i <= 350; i += 20) {

    //   push()

    //   translate(this.body / 2 * cos(i), this.body / 2 * sin(i))

    //   rotate(0.01 * (i - 270) * this.jumpAngle)

    //   fill(135, 192, 202)

    //   ellipse(0, 5, 10, 10)

    //   rect(-5, 5, 10, 30)

    //   ellipse(0, 35, 10, 10)

    //   pop()

    // }

    // for (let i = 180; i <= 360; i += 20) {

    //   push()

    //   translate(this.body / 4 * cos(i), this.body / 3.98 * sin(i))

    //   rotate(0.02 * (i - 270) * this.jumpAngle)

    //   fill(229, 218, 235)

    //   ellipse(0, -10, 10, 10)

    //   rect(-5, -10, 10, 30)

    //   ellipse(0, 25, 10, 10)

    //   pop()

    // }

    // for (let i = 190; i <= 350; i += 20) {

    //   push()

    //   translate(this.body / 4 * cos(i), this.body / 3.99 * sin(i))

    //   rotate(0.02 * (i - 270) * this.jumpAngle)

    //   fill(135, 192, 202)

    //   ellipse(0, -10, 10, 10)

    //   rect(-5, -10, 10, 30)

    //   ellipse(0, 25, 10, 10)

    //   pop()

    // }

    // pop()//fur

    push()

    translate(this.cx - this.eye * 0.5 - 2, this.cy - this.eye)

    rotate(this.eyeAngle)

    fill(255)

    ellipse(

      0,

      0,

      this.eye,

      this.eye

    );

    fill(0);

    ellipse(

      this.eye * 0.2 + 4,

      0,

      this.eye * 0.3,

      this.eye * 0.3

    );

    pop()//left eye

    push()

    translate(this.cx + this.eye * 0.5 + 2, this.cy - this.eye)

    rotate(-this.eyeAngle)

    fill(255)

    ellipse(

      0,

      0,

      this.eye,

      this.eye

    );

    fill(0);

    ellipse(

      -this.eye * 0.2 - 4,

      0,

      this.eye * 0.3,

      this.eye * 0.3

    );

    pop()//right eye

    push()

    translate(this.cx - this.body * 0.25, this.cy + this.body * 0.2)

    rotate(this.jumpAngle)

    quad(

      0,

      - this.body * 0.1,

      - this.body * 0.35,

      - this.body * 0.1,

      - this.body * 0.35,

      this.body * 0.1,

      0,

      this.body * 0.1

    );

    pop()//left leg

    push()

    translate(this.cx + this.body * 0.25, this.cy + this.body * 0.2)

    rotate(-this.jumpAngle)

    quad(

      0,

      - this.body * 0.1,

      this.body * 0.35,

      - this.body * 0.1,

      this.body * 0.35,

      this.body * 0.1,

      0,

      this.body * 0.1

    );

    pop()//right leg

    noFill();

    stroke(0)

    arc(

      this.cx,

      this.cy - this.body / 4,

      this.body * 0.8,

      this.body * 0.6,

      0 + this.smileAngle,

      150 + this.smileAngle

    ); //smile

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


// from shae

class Shae {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speed=1
    this.speed2=0.7
    this.dia=160
    this.dia1=160
    this.speed3=1
    
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
    
    this.x+=this.speed3
    //this.y = height*2/3-noise(sin(frameCount*0.01))*400;
    this.y=height/2+noise(frameCount*0.01)*300

  
    if(this.x>width||this.x<0){
      this.speed3=-this.speed3
    }
    
    
    this.dia+=this.speed
    this.dia1+=this.speed2
    if(this.dia > 180 || this.dia < 150) {
    this.speed = -this.speed;
  }
  if (this.dia1 > 180 || this.dia1 < 150) {
    this.speed2 = -this.speed2;
  }
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
   
  let limbangle1 = sin(frameCount * 0.09) * 0.4;
  let limbangle2 = sin(frameCount * 0.09) * -0.4;
  let limangle3 = sin(frameCount * 0.06) * 0.2;

  push();
  rotate(limbangle1);
    fill(255, 254, 208, 230);
  ellipse(90, 10, 80, 60);
  pop();

  rotate(limangle3);

  push();
  rotate(limbangle2);
    fill(255, 254, 208, 230);
  ellipse(-90, 10, 80, 60);
  pop();  
  fill(255, 255, 255, 250);
  
  
  stroke(0, 0, 0, 50);
  strokeWeight(3);
  ellipse(0, 0, this.dia,this.dia1);
    
  fill(216, 189, 171, 100);
  noStroke();
  ellipse(0, -10, 70, 30);

  noFill();
  stroke(0, 0, 0, 100);
  strokeWeight(3);
  circle(35, -10, 20);
  circle(-35, -10, 15);
    stroke(100)
    fill(100)
    circle(35,-10,11)
    circle(-35,-10,6)


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


/// =========From Marcele Section========

class Misheel {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.speed = 0.005;
    this.radius = 70;
    this.count = 8;
    this.speedAngle = 0.02;
  }
  display() {
    push();
    translate(this.x - 200, this.y - 200);

    // --- base triangle ---
    beginShape();
    fill(255, 255, 0, 100);
    stroke(253, 216, 8);
    strokeWeight(2);
    vertex(180, 200);
    vertex(220, 200);
    vertex(240, 330);
    vertex(160, 330);
    endShape(CLOSE);

    beginShape();
    fill(255, 255, 0, 200);
    noStroke();
    vertex(190, 200);
    vertex(210, 200);
    vertex(220, 300);
    vertex(180, 300);
    endShape(CLOSE);

    // --- body ---
    fill(128, 128, 128);
    stroke(0);
    strokeWeight(1);
    arc(200, 200, 140, 50, 0, TWO_PI);

    push();
    noFill();
    stroke(0);
    translate(200, 200);

    for (let i = 0; i < this.count; i++) {
      let a = this.angle + (TWO_PI / this.count) * i;
      let cx = this.radius * 0.8 * cos(a);
      let cy = this.radius * 0.28 * sin(a);
      fill(255, 0, 0);
      circle(cx, cy, 4);
    }
    for (let i = 0; i < this.count; i++) {
      let a = this.angle + (TWO_PI / this.count) * i;
      let cx = this.radius * 0.8 * cos(a);
      let cy = this.radius * 0.33 * sin(a);
      fill(0);
      line(cx, cy, 0, 0);
    }
    pop();

    // --- face ---
    fill(0, 255, 255, 180);
    arc(200, 200, 60, 80, PI, 0);
    strokeWeight(5);
    stroke(0, 0, 255);
    arc(200, 200, 60, 10, 0, PI);
    fill(0);
    circle(200, 158, 1);

    // --- head pop ---
    push();
    stroke(0);
    strokeWeight(1);
    noFill();
    beginShape();
    let steps = 40;
    for (let i = 0; i <= 1; i += 1 / steps) {
      let x = lerp(200, 200, i);
      let y = lerp(158, 128, i);
      let v = 3 * sin(frameCount * 0.2 - i * 15);
      vertex(x + v, y);
    }
    endShape();
    fill(255, 0, 0);
    circle(200, 128, 8);
    pop();

    // --- eyes ---
    stroke(0);
    strokeWeight(1);
    fill(255);
    arc(200 - 7, 200 - 20, 12, 15, 0, TWO_PI);
    arc(200 + 7, 200 - 20, 12, 15, 0, TWO_PI);
    fill(0);
    circle(200 + 7, 200 - 20, 2);
    circle(200 - 7, 200 - 20, 2);

    // --- small mouth dot ---
    arc(200, 190, 5, 5, 0, PI);

    pop();
  }
  update() {
    this.x = noise(frameCount * this.speed) * width;
    this.y = noise(frameCount * this.speed + 1000) * height; // offset for independent Y
    this.angle += this.speedAngle;

  }
}

//Helena
class Stanley {
  constructor(startX, startY) {
    this.baseX = startX;
    this.baseY = startY;
    this.baseScale = 1.00;

    this.colWhite = "#fffbf0";
    this.colBrown = "#c6b6ac"
    this.colRed = "#fb3310"

    this.armsY = [0, 0, 22, 22]
    this.armsScaleX = [1, -1, 1, -1]
    //left upper arm, right upper arm, left bottom arm, right bottom arm


    this.legSwingSpeed = 1
    this.armSwingSpeed = 1
    this.blinkTimer = 0;
    this.t = 0
    this.heartSize = 10
    this.moveSpeed = 0

  }


  upperPaws() {
    fill("#c6b6ac");
    for (let angle = PI / 6; angle < PI; angle += PI / 3) {
      const x = 9 * cos(angle);
      const y = 9 * sin(angle);
      circle(x, y, 7);
    }
    circle(0, 0, 10)
  }

  bottomPaws() {
    fill("#c6b6ac");
    for (let angle = PI / 6; angle < PI; angle += PI / 3) {
      const x = 9 * cos(angle);
      const y = 9 * sin(angle);
      circle(x, y, 8);
    }
    circle(0, 0, 10)

  }

  upperArms(a = 0) {
    //left upper arm
    stroke(this.colWhite);
    strokeWeight(8);
    fill(this.colWhite)
    push()
    rotate(-PI / 8 + a);
    ellipse(-23, 5, 20, 3);
    rotate(PI / 4 + a * 0.2);
    ellipse(-33, 28, 25, 5);

    //let upper paw
    noStroke()
    fill(this.colBrown)
    push();
    translate(-45, 28);
    rotate(PI / 1.5);
    this.upperPaws();
    pop();

    pop()
  }

  bottomArms(a = 0) {
    //left bottom arm
    stroke(this.colWhite);
    strokeWeight(8);
    fill(this.colWhite)
    push()
    rotate(-PI / 8 + a);
    ellipse(-30, 3, 30, 4);
    rotate(PI / 4 + a * 0.2);
    ellipse(-45, 33, 35, 5);

    //left bottom paw
    noStroke()
    fill(this.colBrown)
    push();
    translate(-60, 33);
    rotate(PI / 1.5);
    this.bottomPaws();
    pop();

    pop()
  }




  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);
    scale(this.s)

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    //Main body
    noStroke();
    fill(this.colWhite);
    rect(-5, -10, 10, 20)
    ellipse(0, 24, 25, 55);//body

    //Head

    push()
    translate(0, -15);
    rotate(this.headSwing);
    translate(0, 15);
    if (mouseIsPressed) {
      colorMode(HSB, 100)
      const h = map(sin(this.t * 0.5), -1, 1, 0, 100)
      fill(h, 80, 100)
    } else {
      fill(this.colRed)
    }

    beginShape();
    curveVertex(0, -15);
    curveVertex(12, -8);
    curveVertex(48, -15);
    curveVertex(35, -70);
    curveVertex(0, -90);
    curveVertex(-35, -70);
    curveVertex(-48, -15);
    curveVertex(-12, -8);
    curveVertex(0, -15);
    endShape();

    //eyes
    noStroke()
    fill(255)
    if (!this.blink) {
      ellipse(-10, -30, 6, 12);
      ellipse(10, -30, 8, 15);
    } else {
      noFill()
      stroke(255)
      strokeWeight(3)
      arc(-10, -30, 6, 12, -PI, 0,);
      arc(10, -30, 8, 15, -PI, 0);
    }

    //Patten on head
    fill(255)
    noStroke()
    push()
    translate(10, -65)
    rotate(PI / 6)
    ellipse(0, 0, 15, 12);
    pop()

    push()
    translate(-18, -70)
    rotate(-PI / 4.5)
    ellipse(0, 0, 45, 25);
    pop()

    push()
    translate(25, -73)
    rotate(PI / 4)
    ellipse(0, 0, 30, 10);
    pop()


    pop()

    //upper arms
    for (let i = 0; i < 2; i++) {
      const sx = this.armsScaleX[i]
      const a = this.upperArmsSwing;
      push();
      scale(sx, 1)
      this.upperArms(a);
      pop();
    }

    //bottom arms
    for (let i = 2; i < 4; i++) {
      const y = this.armsY[i]
      const sx = this.armsScaleX[i]
      const a = this.bottomArmsSwing;
      push();
      translate(0, y);
      scale(sx, 1)
      this.bottomArms(a);
      pop();
    }


    //left leg
    noStroke();
    fill(this.colWhite);
    push();
    translate(-8, 55);
    rotate(-1 * this.leftLegSwing);
    this.leftLength = map(sin(this.t * 5), -1, 1, 62, 52)
    ellipse(0, 10, 16, this.leftLength);
    pop();

    //right leg
    noStroke();
    fill(this.colWhite);
    push();
    translate(8, 55);
    rotate(this.rightLegSwing);
    this.rightLength = map(sin(this.t * 5), -1, 1, 52, 62)
    ellipse(0, 10, 16, this.rightLength);
    pop();


    //Heart
    if (mouseIsPressed) {
      colorMode(HSB, 100)
      const h = map(sin(this.t * 0.5), -1, 1, 0, 100)
      fill(h, 80, 100)
    } else {
      fill(this.colRed)
    }
    arc(-3, 12, 4 + this.heartSize, 4 + this.heartSize, 3 * PI / 4, 7 * PI / 4)
    arc(3, 12, 4 + this.heartSize, 4 + this.heartSize, 5 * PI / 4, PI / 4)
    push()
    translate(0, 15)
    rotate(PI / 4)
    rectMode(CENTER)
    rect(0, 0, 4 + this.heartSize, 4 + this.heartSize)
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

  // drawReferenceShapes() {
  //   noFill();
  //   strokeWeight(1)
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }


  update() {
    this.t += 0.03

    //leg
    if (keyIsPressed) {
      this.legSwingSpeed = 5
    } else {
      this.legSwingSpeed = 1
    }
    this.leftLegSwing = 0.2 * sin(this.legSwingSpeed * this.t + 5
    );
    this.rightLegSwing = 0.2 * sin(this.legSwingSpeed * this.t
    )
    //arm
    if (keyIsPressed) {
      this.armSwingSpeed = 5
    } else {
      this.armSwingSpeed = 1
    }
    this.upperArmsSwing = 0.4 * sin(this.armSwingSpeed * this.t);
    this.bottomArmsSwing = 0.2 * sin(this.armSwingSpeed * this.t);
    this.headSwing = 0.18 * sin(this.t * 1.2);

    //blink
    this.blinkTimer = (this.blinkTimer + 1) % 110;//the frequency of blinking
    this.blink = (this.blinkTimer < 30);
    //the real blinking time

    this.heartSize = map(sin(this.t), -1, 1, 5, 9)


    //overall
    if (keyIsPressed) {
      this.moveSpeed = 5
    } else {
      this.moveSpeed = 1
    }
    this.x = this.baseX + 30 * sin(this.moveSpeed * this.t * 0.6);
    this.y = this.baseY + 15 * sin(this.moveSpeed * this.t * 1.2 + PI / 2);
    this.s = this.baseScale + -0.3 * sin(this.t * 1.1);

  }
  // update properties here to achieve
  // your dancer's desired moves and behaviour
}
//jahangir
class EyeDancer {
  constructor(startX, startY) {
    this.rect_x = startX
    this.rect_y = startY
    this.rect_start_y = startY
    this.rect_w = 56 * random(0.3, 1.8)
    this.rect_h = 56 * random(0.3, 1.8)
    this.rect_y_s = 0
    this.rect_x_s = 0
    this.rect_x_scale = 1.0
    this.rect_y_scale = 1.0
    this.rect_stage = 0
    this.eye_x = 0
    this.eye_y = 0

  }
  update() {
    //stage 0 rect is preparing to jump x scale is increasing 
    if (this.rect_stage == 0 && this.rect_x_scale < 1.2) {
      this.rect_x_scale += 0.03
      this.rect_y_scale = 2 - this.rect_x_scale
    }
    if (this.rect_stage == 0 && this.rect_x_scale >= 1.2) {
      this.rect_stage = 1
    }
    if (this.rect_stage == 1) {
      this.rect_stage = 2
      this.rect_y_scale = 0.1 + this.rect_x_scale
      this.rect_x_scale = 2 - this.rect_y_scale
      this.rect_y_s = -1 / 2 * (this.rect_h * this.rect_y_scale - this.rect_h)

    } else if (this.rect_stage == 2) {
      //stage 1 rect is jumping x is converted to y and calculating speed
      this.rect_y_s += 1
      if (this.rect_y + this.rect_h * this.rect_y_scale * 1 / 2 + this.rect_y_s <= this.rect_start_y + this.rect_h * this.rect_y_scale * 1 / 2) {
        this.rect_y += this.rect_y_s
      } else {
        this.rect_y = this.rect_start_y
        this.rect_stage = 3
      }
      if (this.rect_y_s < 0) {
        this.eye_y = 5
      } else {
        this.eye_y = -5
      }
    }
    if (this.rect_stage == 3) {
      if (this.rect_y_scale > 1) {
        this.rect_y_scale += -0.001
        this.rect_y_scale += - 0.6 * pow((1 - this.rect_y_scale), 2)
      } if (this.rect_y_scale < 1) {
        this.rect_y_scale += 0.001
        this.rect_y_scale += 0.5 * pow((1 - rect_y_scale), 2)
      }
      this.rect_x_scale = 2 - this.rect_y_scale

      if (this.rect_y_scale <= 1.01 && this.rect_y_scale >= 0.99) {
        this.rect_stage = 0
      }
      this.eye_y = 0
    }
  }
  m_rect(x, y, w, h, s_w, s_h) {
    rectMode(CENTER)
    noStroke()
    y += -1 / 2 * (h * s_h - h)
    rect(x, y, w * s_w, h * s_h)
  }
  display() {
    fill(255)
    this.m_rect(this.rect_x, this.rect_y, this.rect_w, this.rect_h, this.rect_x_scale, this.rect_y_scale)
    fill(0)


    this.eye_x = noise(frameCount * 0.05) * 1 + sin(frameCount * 0.05) * 1

    this.m_rect(this.rect_x + this.eye_x, this.rect_y, 20, 20, this.rect_x_scale, this.rect_y_scale)
  }
}
//siyu
class OldMan {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.s = 40
    this.z = this.x * 1;
    this.z1 = this.y * 1;
    this.x1 = startX; //I fixed this
    this.x2 = startY;//I fixed this
    this.x0 = startX;//I fixed this
    this.y0 = startY;//I fixed this

  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.y = sin(frameCount * 0.1) * 1 + this.y0;//I fixed this
    this.x2 = -sin(frameCount * 0.1) * 3 + this.x0;//I fixed this
    this.x = sin(frameCount * 0.1) * 15 + this.x0;//I fixed this
    this.x1 = sin(frameCount * 0.1) * 3 + this.y0;//I fixed this
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    //head+neck
    noStroke()
    fill(240, 216, 202)
    circle(0, 0 - this.s * 0.4, this.s * 0.9)
    rectMode(CENTER);
    rect(0, 0 + this.s * 0.1, this.s * 0.1, this.s * 0.2)
    //hands
    push();
    translate(-this.x, -this.y);
    stroke(940, 216, 202)
    strokeWeight(4);
    line(this.x - this.s * 0.3, this.y + this.s * 0.15, this.x - this.s * 0.8, this.y + this.s * 0.15)
    line(this.x - this.s * 0.8, this.y + this.s * 0.15, this.z - this.s * 0.8, this.z1 + this.s * 0.65)
    line(this.x + this.s * 0.3, this.y + this.s * 0.15, this.x + this.s * 0.8, this.y + this.s * 0.15)
    line(this.x + this.s * 0.8, this.y + this.s * 0.15, this.z + this.s * 0.8, this.z1 + this.s * 0.65)
    //legs
    line(this.z - this.s * 0.2, this.z1 + this.s, this.x - this.s * 0.5, this.y + this.s * 1.3);
    line(this.x - this.s * 0.5, this.y + this.s * 1.3, this.z - this.s * 0.5, this.z1 + this.s * 1.6);
    line(this.z + this.s * 0.2, this.z1 + this.s, this.x2 + this.s * 0.5, this.y + this.s * 1.3);
    line(this.x2 + this.s * 0.5, this.y + this.s * 1.3, this.z + this.s * 0.5, this.z1 + this.s * 1.6)
    //clothes
    noStroke()
    fill(233, 215, 192)
    //rect(x,y+s*0.6,s*0.6,s*0.96)
    beginShape()
    vertex(this.x - this.s * 0.3, this.y + this.s * 0.1)
    vertex(this.x + this.s * 0.3, this.y + this.s * 0.1)
    vertex(this.z + this.s * 0.3, this.z1 + this.s * 0.96)
    vertex(this.z - this.s * 0.3, this.z1 + this.s * 1)
    endShape(CLOSE)
    //baojie

    fill(255, 130, 0)
    stroke(255, 130, 0)
    strokeWeight(1)
    beginShape();
    vertex(this.x - this.s * 0.3, this.y + this.s * 0.13)
    vertex(this.x - this.s * 0.16, this.y + this.s * 0.13)
    vertex(this.x - this.s * 0.05, this.y + this.s * 0.4)
    vertex(this.z - this.s * 0.05, this.z1 + this.s * 1)
    vertex(this.z - this.s * 0.3, this.z1 + this.s)
    endShape(CLOSE)
    beginShape()
    vertex(this.x + this.s * 0.3, this.y + this.s * 0.13)
    vertex(this.x + this.s * 0.16, this.y + this.s * 0.13)
    vertex(this.x + this.s * 0.05, this.y + this.s * 0.4)
    vertex(this.z + this.s * 0.05, this.z1 + this.s * 1)
    vertex(this.z + this.s * 0.3, this.z1 + this.s)
    endShape(CLOSE);
    //green

    stroke(166, 255, 0);
    strokeWeight(3)
    fill(255, 232, 0)
    rectMode(CENTER);
    rect(this.x - this.s * 0.23 * 1.4 + this.s * 0.16, this.y + this.s * 0.7, this.s * 0.23, this.s * 0.1)
    rect(this.x + this.s * 0.23 * 1.4 - this.s * 0.16, this.y + this.s * 0.7, this.s * 0.23, this.s * 0.1)

    pop();



    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.

    //rectMode(CORNER);
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

//ujin
class kirby {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.armSwing = 0;
    this.size = 200;
  }
  update() {
    this.y = noise(frameCount * 0.01) * height;
    this.armSwing = sin(frameCount * 0.1) * 20;
  }
  display() {
    push();
    translate(this.x, this.y);

    noStroke();

    // feet
    fill(235, 52, 137);
    ellipse(70, 90, 110, 70);
    ellipse(-70, 90, 110, 70);

    // arms
    fill(250, 137, 190);
    ellipse(70, -10 + this.armSwing, 150, 80);
    ellipse(-70, -10 - this.armSwing, 150, 80);

    // body
    fill(255, 182, 193);
    circle(0, 0, this.size);

    // mouth
    fill(250, 105, 134);
    arc(0, 0, this.size * 0.09, this.size * 0.2, 0, PI);

    // blush
    fill(250, 87, 177);
    ellipse(45, 0, 30, 20);
    ellipse(-45, 0, 30, 20);

    // eyes
    fill(5, 83, 230);
    ellipse(20, -40, 20, 50);
    ellipse(-20, -40, 20, 50);

    // sparkles
    fill(255);
    ellipse(20, -55, 8, 12);
    ellipse(-20, -55, 8, 12);
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
//alan
class AAA {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.baseR = 200;
    this.baseG = 100;
    this.baseB = 255;
    this.headR = 255;
    this.headG = 220;
    this.headB = 180;
    this.angle = 0;
    this.armAngle = 0;
    this.dir = 1;
    this.jump = 0;
    this.spin = 0;
    this.cShift = 0;
    this.eyeBlink = 1;
    this.mouthOpen = 10;
  }

  update() {
    this.armAngle += 2 * this.dir;
    if (this.armAngle > 30 || this.armAngle < -30) {
      this.dir *= -1;
    }
    this.jump = sin(frameCount * 0.08) * 20;
    this.spin = sin(frameCount * 0.02) * 15;
    this.cShift = (sin(frameCount * 0.05) + 1) / 2 * 100;
    this.eyeBlink = (sin(frameCount * 0.3) + 1) / 2;
    this.eyeBlink = max(0.2, this.eyeBlink);


    this.mouthOpen = 10 + sin(frameCount * 0.2) * 5;
  }

  display() {
    push();
    translate(this.x, this.y - this.jump);
    rotate(radians(this.spin));

    // ⬇️ draw your dancer from here ⬇️

    fill(this.baseR, this.baseG + this.cShift, this.baseB - this.cShift);
    rectMode(CENTER);
    rect(0, 40, 30, 80, 10);

    fill(this.headR, this.headG, this.headB);
    ellipse(0, -20, 40, 40);
    push();
    fill(0);
    ellipse(-10, -25, 6, 6 * this.eyeBlink);
    ellipse(10, -25, 6, 6 * this.eyeBlink);


    fill(0);
    ellipse(0, -10, 10, this.mouthOpen);
    pop();


    push();
    rotate(radians(this.armAngle));
    rect(-25, 40, 15, 50, 10);
    pop();

    push();
    rotate(radians(-this.armAngle));
    rect(25, 40, 15, 50, 10);
    pop();

    fill(150, 100, 255);
    rect(-10, 90, 10, 40, 5);
    rect(10, 90, 10, 40, 5);

    // ⬆️ draw your dancer above ⬆️

    // this.drawReferenceShapes();
    pop();
  }

  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
  }
}

//chau
class Chau {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.s = 100;
    this.angle = 0;
    this.speed = 2;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.angle);

    //arms
    //push();
    stroke(255);
    strokeWeight(3);
    line(
      -this.s * 0.25,
      this.s * 0.9,
      -this.s * 0.7,
      this.s * 0.6 + 20 * sin(frameCount * 0.05)
    );
    line(
      this.s * 0.25,
      this.s * 0.9,
      this.s * 0.7,
      this.s * 0.6 + 20 * sin(frameCount * 0.05)
    );
    //pop();

    push();
    fill(255);
    translate(-this.s * 0.7, this.s * 0.6);
    circle(0, 0 + 20 * sin(frameCount * 0.05), this.s * 0.1);
    pop();

    push();
    fill(255);
    translate(this.s * 0.7, this.s * 0.6);
    circle(0, 0 + 20 * sin(frameCount * 0.05), this.s * 0.1);
    pop();

    //pop();

    //leg
    //push();

    fill(255);
    strokeWeight(3);
    stroke(255);

    this.angle = sin(frameCount * 0.05);
    this.angle = map(this.angle, -1, 1, -PI / 10, PI / 3);

    line(-this.s * 0.15, this.s * 1.1, -this.s * 0.15, this.s * 1.5);

    push();
    translate(-this.s * 0.15, this.s * 1.5);
    rotate(this.angle);
    line(0, 0, this.s * 0.15, this.s * 0.1);
    // circle (0,150,10)
    circle(this.s * 0.15, this.s * 0.1, this.s * 0.1);
    pop();

    line(this.s * 0.15, this.s * 1.1, this.s * 0.15, this.s * 1.5);

    push();
    translate(this.s * 0.15, this.s * 1.5);
    rotate(-this.angle);
    line(0, 0, this.s * 0.15, this.s * 0.1);
    circle(this.s * 0.15, this.s * 0.1, this.s * 0.1);
    pop();

    //pop();

    //body
    fill(255, 179, 0);
    noStroke();
    arc(0, this.s * 1.2, this.s * 0.7, this.s * 2, PI, 0);

    //head
    push();
    this.angle = 2 * sin(frameCount * 0.05);
    // angle = map(angle, -1, 1, -PI / 10, PI / 10);
    rotate(this.angle);
    noStroke();
    fill(254, 27, 28);

    for (let a = 0; a < 2 * PI; a += PI / 8) {
      push();
      rotate(a);
      circle(this.s * 0.5, 0, this.s * 0.5);
      pop();
    }

    circle(0, 0, this.s);

    pop();

    //face
    // push();
    fill(255);
    noStroke();
    ellipse(this.s * -0.2, 0, this.s * 0.4, this.s * 0.6);
    ellipse(this.s * 0.2, 0, this.s * 0.4, this.s * 0.6);
    //pop();

    fill(0);
    let eye = 15 * sin(frameCount * 0.05);
    let y_eye = constrain(eye, -this.s * 0.15, this.s * 0.15);
    circle(-this.s * 0.2, y_eye, this.s * 0.3);
    circle(this.s * 0.2, y_eye, this.s * 0.3);

    noFill();
    strokeWeight(2);
    stroke(0);
    arc(0, this.s * 0.4, this.s * 0.2, this.s * 0.3, 0, PI);

    pop();

    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  update() {
    this.angle = sin(frameCount * 0.05);
    this.angle = map(this.angle, -1, 1, -PI / 10, PI / 20);
    // push();
    // translate(this.x, this.y)
    //rotate(a);

    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);

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
    // this.drawReferenceShapes();

    pop();
  }

  //background
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

//joe
class dancingjohn {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.arm = 0;
  }

  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x = this.x + 2;
    this.y = this.y - 1;
    this.arm += -cos(frameCount * 0.25) * 0.3;
  }
  move() {
    this.y = height / 2 + 30 * sin(frameCount * 0.1);
    this.x = width / 2 + 30 * cos(frameCount * 0.1);
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    // TORSO
    fill(128, 50, 128);
    rect(-35, -51, 70, 78, 8);

    // LEFT ARM
    push();
    translate(-36, -35);
    rotate(this.arm);
    fill(226, 163, 121);
    ellipse(0, 20, 20, 55);
    ellipse(0, 50, 16, 16);
    pop();

    // RIGHT ARM
    push();
    translate(37, -35);
    rotate(this.arm);
    fill(226, 163, 121);
    ellipse(0, 20, 20, 55);
    ellipse(0, 50, 16, 16);
    pop();

    // LEGS
    push();
    translate(0, 40);

    // LEFT LEG
    push();
    translate(-15, 0);
    rotate(sin(frameCount * 0.25) * 0.5);
    fill(165, 42, 42);
    rect(-19, -12, 31, 70, 10);
    fill(105, 105, 105);
    rect(-19, 55, 30, 15, 5);
    pop();

    // RIGHT LEG
    push();
    translate(15, 0);
    rotate(-sin(frameCount * 0.25) * 0.5);
    fill(165, 42, 42);
    rect(-9, -12, 31, 70, 10);
    fill(105, 105, 105);
    rect(-8, 55, 30, 15, 5);
    pop();

    pop();

    // HEAD
    push();
    translate(this.head / 5, this.head / 3);
    fill(226, 163, 121);
    ellipse(0, -80, 60, 65);

    // HAIR
    fill(42, 26, 10);
    arc(0, -95, 70, 60, PI, 0);

    // EYES
    fill(255);
    ellipse(-12, -80, 12, 8);
    ellipse(12, -80, 12, 8);
    fill(40, 80, 200);
    ellipse(-12, -80, 5, 5);
    ellipse(12, -80, 5, 5);

    // NOSE
    fill(226, 163, 121);
    triangle(-3, -75, 0, -70, 3, -75);

    // MOUTH
    noFill();
    stroke(120, 40, 40);
    strokeWeight(2);
    arc(0, -65, 25, 15, 0, PI);
    noStroke();

    pop();
  }
  // move() {
  //   this.y = width / 1 + 30 * sin(frameCount * .25);
  //   this.x = height / 3 + 30 * cos(frameCount * 0.1);
  // }
}
//victoria
class VioletTorch {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.x0 = startX;
    this.y0 = startY;
  }
  update() {
    this.x = this.x0 + 20 * cos(frameCount * 0.05);
    this.y = this.y0 + 15 + 30 * sin(frameCount * 0.08);
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ⬇️ draw your dancer from here ⬇️
    let cycle = 500;
    let flashFrames = 200;

    // smooth ramp during the flash window
    let flashMix = 0;
    if (frameCount % cycle < flashFrames) {
      flashMix = sin(((frameCount % cycle) / flashFrames) * PI);
      //ease in/out
    }

    //background small flames
    if (frameCount % cycle < flashFrames) {
      for (let R = 60; R < 100; R += 30) {
        for (let angle = -PI / 9; angle <= (8 * PI) / 7; angle += PI / 5) {
          fill(255, 174, 66, 160);
          let x = map(cos(angle), -1, 1, -R, R);
          let y = map(cos(R * sin(angle)), -1, 1, -5 - R, 5 + R);
          let s = map(sin(frameCount * 0.07), 0, 2 * PI, 5, 20);
          ellipse(x, y, s - 4, s);
          ellipse(x - 0.6, y + 0.6, s - 4, s - 0.2);
          ellipse(x + 0.6, y + 0.6, s - 4, s - 0.2);
        }
      }
    }

    // size boost for flames while flashing
    let flameScale = map(sin(frameCount * 0.05), -1, 1, 1, 1 + 2.7 * flashMix);

    //normal torch body
    let n_yb = 80;
    let n_xtl = map(cos(frameCount * 0.06), -1, 1, -8, -11);
    let n_xtr = map(cos(frameCount * 0.06), -1, 1, 8, 11);
    let n_yt = map(cos(frameCount * 0.08), -1, 1, 22, 42);

    let n_xr = map(cos(frameCount * 0.06), -1, 1, -12, -15);
    let n_yr = map(cos(frameCount * 0.08), -1, 1, 8, 28);
    let n_w = map(cos(frameCount * 0.06), -1, 1, 24, 30);
    let n_l = map(cos(frameCount * 0.06), -1, 1, 6, 5.5);

    //expanded torch body
    let e_yb = 90;
    let e_xtl = -15;
    let e_xtr = 15;
    let e_yt = 18;
    let e_xr = -20;
    let e_yr = 3;
    let e_w = 40;
    let e_l = 8;

    //draw torch body
    let baseBodyCol = color(143, 0, 255);
    let whiteCol = color(255);
    let bodyCol = lerpColor(baseBodyCol, whiteCol, 0.8);

    fill(baseBodyCol);
    stroke(255);
    strokeWeight(0.3);
    triangle(0, n_yb, n_xtr, n_yt, n_xtl, n_yt);
    rect(n_xr, n_yr, n_w, n_l);

    if (frameCount % cycle < flashFrames) {
      fill(bodyCol);
      stroke(255);
      strokeWeight(1);
      triangle(0, e_yb, e_xtr, e_yt, e_xtl, e_yt);
      rect(e_xr, e_yr, e_w, e_l);
    }

    //arms & hands
    if (frameCount % cycle < flashFrames) {
      let x1 = map(cos(frameCount * 0.1), -1, 1, -40, -10);
      let y1 = map(sin(frameCount * 0.1), -1, 1, 20, 60);
      fill(255, 205, 205, 230);
      line(-10, 18, x1, y1);
      circle(x1, y1, 25);
      let x2 = map(sin(frameCount * 0.12), -1, 1, 10, 40);
      let y2 = map(cos(frameCount * 0.12), -1, 1, 20, 60);
      fill(255, 205, 205, 230);
      line(10, 18, x2, y2);
      circle(x2, y2, 25);
    }

    //flames
    // color blend: purple base -> hot orange when flashing
    let baseCol = color(143, 0, 255, 12);
    let hotCol = color(255, 180, 0, 8);
    let flameCol = lerpColor(baseCol, hotCol, flashMix);

    fill(flameCol);
    noStroke();

    //1
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 28) * flameScale;
      let y = map(i, 0, 100, 50, 0);
      let x = 25 * sin(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 60, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 4, 28) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = 10 + 23 * sin(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 28) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = 18 * sin(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 25) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = 20 * sin(frameCount * 0.06 + i * 0.02) - 20;
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }

    //2
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 28) * flameScale;
      let y = map(i, 0, 100, 50, 0);
      let x = 25 * cos(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 60, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 4, 28) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = -10 + 23 * cos(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 28) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = 18 * cos(frameCount * 0.06 + i * 0.02);
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 3, 25) * flameScale;
      let y = map(i, 0, 100, 38, 0);
      let x = 20 * cos(frameCount * 0.06 + i * 0.02) - 20;
      if (frameCount % cycle < flashFrames) {
        y = map(i, 0, 100, 48, 10);
      }
      circle(x, -12 - y, s);
    }

    //additional dancing flame
    fill(143, 0, 255, 8);
    stroke(255, 229, 180, 8);
    strokeWeight(0.3);
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 2, 12);
      let y = 15 + map(i, 0, 100, 6, 24);
      let x = 40 + 2 * sin(frameCount * 0.2 + i * 0.02);
      circle(x, y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 2, 10);
      let y = 15 + map(i, 0, 100, 12, 24);
      let x = 43 + 2 * sin(frameCount * 0.2 + i * 0.02);
      circle(x, y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 2, 10);
      let y = 15 + map(i, 0, 100, 12, 24);
      let x = 37 + 2 * sin(frameCount * 0.2 + i * 0.02);
      circle(x, y, s);
    }

    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 4, 15);
      let y = 55 + map(i, 0, 100, 8, 24);
      let x = -38 + 4 * sin(frameCount * 0.15 + i * 0.02);
      circle(x, y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 4, 12);
      let y = 55 + map(i, 0, 100, 12, 24);
      let x = -40 + 4 * sin(frameCount * 0.15 + i * 0.02);
      circle(x, y, s);
    }
    for (let i = 0; i < 100; i++) {
      let s = map(i, 0, 100, 4, 12);
      let y = 55 + map(i, 0, 100, 12, 24);
      let x = -35 + 4 * sin(frameCount * 0.15 + i * 0.02);
      circle(x, y, s);
    }

    // ⬆️ draw your dancer above ⬆️

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    //this.drawReferenceShapes()

    pop();
  }
}
//jessie
class Jellyfish {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.lineLength = 70;
    // add properties for your dancer here:
    //..
    //..
    //..
  }
  update() {
    this.angle = sin(frameCount * 0.05) * 0.5;
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }
  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️

    push();

    beginShape();
    translate(-45, 65);
    let lineLength = 70;
    stroke(20, 60, 150, 150);
    strokeWeight(2);
    noFill();
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      let v = 8 * sin(frameCount * 0.1 - i);
      vertex(v, i);
      //circle(i, v, 5);
    }
    endShape();
    pop();

    push();
    beginShape();
    translate(-25, 55);
    stroke(20, 60, 150, 110);
    strokeWeight(2);
    noFill();
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      let v = 8 * sin(frameCount * 0.1 - i);
      vertex(v, i);
      //circle(i, v, 5);
    }
    endShape();
    pop();

    push();
    beginShape();
    translate(-5, 65);
    stroke(20, 60, 150, 190);
    strokeWeight(2);
    noFill();
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      let v = 8 * sin(frameCount * 0.1 - i);
      vertex(v, i);
      //circle(i, v, 5);
    }
    endShape();
    pop();

    push();
    beginShape();
    translate(15, 75);
    stroke(20, 60, 150, 150);
    strokeWeight(2);
    noFill();
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      let v = 8 * sin(frameCount * 0.1 - i);
      vertex(v, i);
      //circle(i, v, 5);
    }
    endShape();
    pop();

    push();
    beginShape();
    translate(35, 55);
    stroke(20, 60, 150, 220);
    strokeWeight(1);
    noFill();
    for (let i = -lineLength; i <= lineLength; i += lineLength / 10) {
      strokeWeight(10);
      let v = 8 * sin(frameCount * 0.1 - i);
      vertex(v, i);
      //circle(i, v, 5);
    }
    endShape();
    pop();

    push();
    //translate(width / 2, height / 2);
    noStroke();
    fill(80, 150, 250, 230);
    let s = 1 + 0.1 * sin(frameCount * 0.1);
    ellipse(0, -15, 120 * s, 80 * s);
    ellipse(0, 5, 150 * s, 60 * s);

    fill(255);
    ellipse(-20, -5, 15, 20);
    ellipse(20, -5, 15, 20);
    fill(0);
    let a = map(mouseX, 0, width, -25, -15);
    let b = map(mouseX, 0, width, 15, 25);
    let c = map(mouseY, 0, height, -10, 0);
    ellipse(a, c, 10, 10);
    ellipse(b, c, 10, 10);
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
//sophia
class BunBun {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.s = 80;
    this.hopHeight = 45;
    this.baseY = startY;
  }

  update() {
    // Hop animation
    this.y = this.baseY - this.hopHeight * abs(sin(frameCount * 0.05));
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();

    // Shadow
    fill(120, 120, 120, 50);
    ellipse(0, this.s * 0.7, this.s * 0.8, this.s * 0.25);

    // Body
    fill(255);
    ellipse(0, 4, this.s * 0.9, this.s * 1.0);

    // Tummy
    fill(255, 200, 210);
    ellipse(0, this.s * 0.1, this.s * 0.55, this.s * 0.7);

    // Feet
    fill(255);
    let footY = this.s * 0.51;
    ellipse(-this.s * 0.25, footY, this.s * 0.35, this.s * 0.15);
    ellipse(this.s * 0.25, footY, this.s * 0.35, this.s * 0.15);

    // Arms
    let armOffset = 8 * cos(frameCount * 0.05);
    ellipse(
      -this.s * 0.45,
      armOffset + this.s * 0.1,
      this.s * 0.25,
      this.s * 0.2
    );
    ellipse(
      this.s * 0.45,
      -armOffset + this.s * 0.1,
      this.s * 0.25,
      this.s * 0.2
    );

    // Head
    fill(255);
    ellipse(0, -this.s * 0.75, this.s * 0.9, this.s * 0.9);

    // Ears
    fill(255);
    ellipse(-this.s * 0.25, -this.s * 1.6, this.s * 0.25, this.s * 0.8);
    ellipse(this.s * 0.25, -this.s * 1.6, this.s * 0.25, this.s * 0.8);

    // Inner ears
    fill(255, 190, 200);
    ellipse(-this.s * 0.25, -this.s * 1.6, this.s * 0.12, this.s * 0.5);
    ellipse(this.s * 0.25, -this.s * 1.6, this.s * 0.12, this.s * 0.5);

    // Eyes
    fill(50);
    ellipse(-this.s * 0.15, -this.s * 0.8, this.s * 0.12, this.s * 0.18);
    ellipse(this.s * 0.15, -this.s * 0.8, this.s * 0.12, this.s * 0.18);

    // Inside Eye
    fill(255);
    ellipse(-this.s * 0.17, -this.s * 0.85, this.s * 0.03, this.s * 0.06);
    ellipse(this.s * 0.13, -this.s * 0.85, this.s * 0.03, this.s * 0.06);

    // Blush
    fill(255, 170, 180, 120);
    ellipse(-this.s * 0.3, -this.s * 0.6, this.s * 0.15);
    ellipse(this.s * 0.3, -this.s * 0.6, this.s * 0.15);

    // Nose
    fill(255, 150, 180);
    triangle(
      -this.s * 0.04,
      -this.s * 0.65,
      this.s * 0.04,
      -this.s * 0.65,
      0,
      -this.s * 0.6
    );

    // Mouth
    noFill();
    stroke(120);
    strokeWeight(1.2);
    arc(-this.s * 0.05, -this.s * 0.55, this.s * 0.1, this.s * 0.08, 0, PI / 2);
    arc(this.s * 0.06, -this.s * 0.55, this.s * 0.1, this.s * 0.08, PI / 2, PI);

    pop();
  }

}
//jacob
class PumpkinMan {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    this.speedA = 0.1;
    this.x0 = startX;
    this.y0 = startY;
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    //body
    this.y = this.y0 + 50 * sin(2 * frameCount * 0.1);
    this.x = this.x0 + 50 * cos(frameCount * 0.1);
    this.angle = this.angle + this.speedA;
    if (mouseIsPressed) {
      this.speedA = -this.speedA;
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

    colorMode(HSB);
    //arms
    push();
    stroke(23, 88, 74);
    strokeWeight(5);
    //right side
    line(77, 0, 100, -50 * sin(frameCount * 0.1));
    //left side
    line(-77, 0, -100, 50 * sin(frameCount * 0.1));
    pop();

    //stem
    fill(30, 67, 40);
    beginShape();
    vertex(-10, -97 + 47);
    vertex(-7, -105 + 47);
    vertex(-10, -110 + 47);
    vertex(-7, -112 + 47);
    vertex(5, -105 + 47);
    vertex(10, -97 + 47);
    endShape();

    fill(23, 88, 74);

    //right side of pumpkin
    circle(30, 0, 95);
    circle(20, 0, 97);

    //left side of pumpkin
    circle(-30, 0, 95);
    circle(-20, 0, 97);

    //pumpkin
    circle(0, 0, 100);

    //expression
    //EyeBalls
    colorMode(HSB, 100);
    fill(0);
    circle(-20, -20, 30);
    circle(20, -20, 30);

    //left pupil
    // push()
    // translate(-20, -20)
    // fill(100)
    // circle(10 * cos(-frameCount * 0.1), 10 * sin(-frameCount * 0.1), 10)
    // pop()

    //left pupil
    push();
    translate(-20, -20);
    rotate(this.angle);
    fill(100);
    circle(10, 0, 10);
    pop();

    //right pupil
    push();
    translate(20, -20);
    rotate(-this.angle);
    fill(100);
    circle(10, 0, 10);
    pop();

    // //right pupil
    // push()
    // translate(20, -20)
    // fill(100)
    // circle(10 * cos(frameCount * 0.1), 10 * sin(frameCount * 0.1), 10)
    // pop()

    //mouth
    // noFill()
    // strokeWeight(5)
    // let leftmouth = PI / 4;
    // let rightmouth = 3 * PI / 4;
    // arc(0, 0, 50, 50, leftmouth, rightmouth)

    //mouth

    fill(0);
    beginShape();
    vertex(0, 34 - 10);
    vertex(12, 26 - 10);
    vertex(18, 34 - 10);
    vertex(26, 22 - 10);
    vertex(32, 28 - 10);
    vertex(48, 14 - 10);
    vertex(32, 38 - 10);
    vertex(26, 34 - 10);
    vertex(20, 44 - 10);
    vertex(14, 42 - 10);
    vertex(0, 50 - 10);
    vertex(-14, 42 - 10);
    vertex(-20, 44 - 10);
    vertex(-26, 34 - 10);
    vertex(-32, 38 - 10);
    vertex(-48, 14 - 10);
    vertex(-32, 28 - 10);
    vertex(-26, 22 - 10);
    vertex(-18, 34 - 10);
    vertex(-12, 26 - 10);
    vertex(0, 34 - 10);
    endShape();

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


/// ================ From Viola Section ==============

class RyanDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
        this.degs = 0;
        this.blink = 0;
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.deg = sin(frameCount * 0.01) * 10;

        this.x += sin(frameCount * 0.01);
        this.y += cos(frameCount * 0.01);

        this.blink = map(sin(frameCount * 0.01), -1, 1, 0, 20);
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);
        angleMode(DEGREES);

        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        fill(0);
        stroke(255);
        // arms
        ellipse(40, -20, 40, 20);
        ellipse(-40, -20, 40, 20);
        // legs
        ellipse(40, 40, 40, 20);
        ellipse(-40, 40, 40, 20);
        pop();

        push();
        translate(this.x, this.y);
        // torso
        fill(255);
        rotate(-this.deg);
        ellipse(0, 0, 80, 100);
        pop();

        // head
        push();
        stroke(255);
        translate(this.x, this.y);
        rotate(this.deg);
        fill(0);
        circle(30, -80, 30);
        circle(-30, -80, 30);
        fill(255);
        stroke(0);
        circle(0, -50, 80);
        fill(0);
        // eyes
        ellipse(15, -50, 20, this.blink);
        ellipse(-15, -50, 20, this.blink);
        // nose
        ellipse(0, -40, 10, 5);
        //mouth
        arc(0, -35, 35, 40, 0, 180);

        pop();
    }
}

class HuySkibidiDancer {
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
        // let wave = sin(frameCount * 0.05) * 10
        // // this.y = height / 4 + wave
        // this.x = map(noise(frameCount * 0.015), 0, 1, -20, 20)

        // // push()
        // translate(this.x, this.y)
        // let angle = radians(30)

    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        let bodyMove = map(sin(frameCount * 0.1), -1, 1, -20, 20)
        let bodyMove2 = map(noise(frameCount * 0.1), 0, 1, -10, 10)
        translate(this.x + bodyMove2, this.y + bodyMove);
        fill(255, 120, 10)
        ellipse(0, 0, 100, 200);

        for (let i = -75; i < 100; i += 25) {
            strokeWeight(4)
            line(-50, i, 50, i);
        }

        //Hat
        strokeWeight(1)
        fill(0, 255, 0)
        let hatMove = map(sin(frameCount * 0.1), -1, 1, -5, 5)
        triangle(-10, -100 + hatMove, -50, -70 + hatMove, -52, -95 + hatMove)
        triangle(10, -100 + hatMove, 50, -70 + hatMove, 52, -95 + hatMove)
        triangle(-20, -100 + hatMove, 0, -50 + hatMove, +20, -100 + hatMove)
        noStroke()
        rect(-20, -150, 40, 50 + hatMove)

        //eyes
        fill(255)
        circle(-20, -20, 20)
        circle(20, -20, 20)
        //black eyes
        fill(0)
        let toggling = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        let toggling2 = map(cos(frameCount * 0.1), -1, 1, -3, 4)
        circle(-20 + toggling, -17 + toggling2, 15)
        circle(20 + toggling2, -23 + toggling, 15)

        //mouth
        strokeWeight(2)
        stroke(0)
        fill(255, 0, 0)
        let shaking = map(sin(frameCount * 0.1), -1, 1, -1, 5)
        arc(0, 1 + shaking, 35, 40, 0, PI)

        //upper leg
        stroke(255)
        strokeWeight(5)
        let danceLeg = map(sin(frameCount * 0.1), -1, 1, -50, 50)
        line(-50, -25, -125 + danceLeg, -75)
        line(50, -25, 125 + danceLeg, -75)

        //lower leg
        let danceLeg2 = map(sin(frameCount * 0.1), -1, 1, -15, 15)
        line(-35, 75, -125, 150 + danceLeg2)
        line(35, 75, 125, 150 + danceLeg2)

        pop();
    }
}

class AnnaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
    }
    update() {
        let sinValue = sin(frameCount * 0.05) * 50
        this.y = height / 2 + sinValue
        this.x = map(noise(frameCount * 0.015), 0, 1, 0, width)
        this.angle = sin(frameCount * 0.05) * radians(15)


    }
    display() {

        push();
        translate(this.x, this.y);
        rotate(this.angle)
        //red circle 
        fill(139, 0, 0)
        circle(0, 0, 150, 155)
        //white circles
        noStroke()
        fill(255)
        ellipse(0, -35, 55, 60)
        ellipse(35, 0, 55, 60)
        ellipse(0, 35, 55, 60)
        ellipse(-35, 0, 55, 60)
        //yellow part
        noStroke()
        fill(255, 204, 0)
        ellipse(0, 0, 55, 55)
        //eyes
        fill(0)
        ellipse(-9, -8, 6, 8)
        ellipse(9, -8, 6, 8)
        fill(255)
        ellipse(-8, -10, 2, 2)
        ellipse(8, -10, 2, 3)
        //mouth
        noStroke()
        fill("red")
        arc(0, 1, 35, 40, 0, PI)

        pop()

    }
}

class AngelinaaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // this.drawWings(x, y)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x, this.y);

        this.drawWings(0, 0)
        push()
        fill(255, 253, 116)
        ellipse(0, 30, 60, 100)
        ellipse(15, -70, 10, 50)
        ellipse(-15, -70, 10, 50)
        circle(0, -30, 60)
        fill(0)
        circle(-10, -30, 9)
        circle(10, -30, 9)
        triangle(0, -25, -5, -15, 5, -15)
        pop()

        pop();
    }
    drawWings(x1, y1) {
        push()
        noStroke()
        fill(255, 192, 203)
        push()
        rotate(sin(frameCount * 0.05) * 0.3)
        ellipse(50, 10, 90, 50)
        pop()
        push()
        rotate(-sin(frameCount * 0.05) * 0.3)
        ellipse(-50, 10, 90, 50)
        pop()
        pop()
    }
}

class ChristinaDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        this.angle = 0
        this.lEAr = 0
        this.rEar = 0
        this.spd = 5
        this.arm = 0
        this.jump = 0
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.angle = sin(frameCount * 0.03) * 10
        this.lEar = sin(frameCount * this.spd * 0.01) * 10
        this.rEar = -sin(frameCount * this.spd * 0.01) * 9
        this.jump = cos(frameCount * 0.06) * 100
        this.arm = sin(frameCount * -0.06) * 6
    }
    display() {
        push();
        // console.log(this.active, frameCount)
        translate(this.x, this.y);
        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        angleMode(DEGREES)
        push()
        translate(0, 50)
        translate(0, this.jump)
        rotate(this.angle)
        push()
        translate(2, -150)
        rotate(2)
        fill(255)
        push()
        rotate(this.arm)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-13, 34)
        curveVertex(-28, 49)
        curveVertex(0, 53)
        curveVertex(0, 53)
        endShape()
        pop()
        beginShape()
        curveVertex(-16, 53)
        curveVertex(-16, 53)
        curveVertex(-20, 72)
        curveVertex(-17, 74)
        curveVertex(0, 70)
        curveVertex(17, 74)
        curveVertex(20, 72)
        curveVertex(16, 53)
        curveVertex(16, 53)
        endShape()
        push()
        rotate(-this.arm)
        beginShape()
        curveVertex(0, 53)
        curveVertex(0, 53)
        curveVertex(28, 49)
        curveVertex(17, 34)
        curveVertex(17, 34)
        endShape()
        pop()
        push()
        noStroke()
        fill(255)
        beginShape()
        curveVertex(-13, 34)
        curveVertex(-15, 53)
        curveVertex(15, 53)
        curveVertex(13, 34)
        endShape(CLOSE)
        pop()
        pop()
        push()
        translate(5, -165)
        rotate(2)
        push()
        stroke(0)
        strokeWeight(1)
        ellipse(0, 0, 130, 110)
        pop()
        push()
        translate(-35, 15)
        push()
        rotate(55)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(-7, -7, 18)
        circle(6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(-20, 10, 13, 5)
        pop()
        push()
        translate(35, 15)
        push()
        rotate(305)
        fill(0)
        ellipse(0, 0, 40, 35)
        pop()
        fill(255)
        circle(7, -7, 18)
        circle(-6, 11, 10)
        noStroke()
        fill(255, 217, 247)
        ellipse(20, 10, 13, 5)
        pop()
        push()
        rotate(this.rEar)
        translate(0, -50)
        rotate(4)
        fill(255)
        beginShape()
        curveVertex(31, 4)
        curveVertex(31, 4)
        curveVertex(43, -3)
        curveVertex(63, -10)
        curveVertex(65, 10)
        curveVertex(61, 28)
        curveVertex(61, 28)
        endShape()
        pop()

        push()
        rotate(this.lEar)
        translate(0, -50)
        rotate(-4)
        fill(255)
        beginShape()
        curveVertex(-31, 4)
        curveVertex(-31, 4)
        curveVertex(-43, -3)
        curveVertex(-63, -10)
        curveVertex(-65, 10)
        curveVertex(-61, 28)
        curveVertex(-61, 28)
        endShape()
        pop()

        pop()
        push()
        translate(0, -218)
        noFill()
        stroke(117, 115, 114)
        strokeWeight(3)
        beginShape()
        curveVertex(8, 0)
        curveVertex(8, 0)
        curveVertex(6, 23)
        curveVertex(6, 23)
        endShape()
        beginShape()
        curveVertex(-11, 1)
        curveVertex(-11, 1)
        curveVertex(-11, 20)
        curveVertex(-11, 20)
        endShape()
        beginShape()
        curveVertex(23, 2)
        curveVertex(23, 2)
        curveVertex(21, 22)
        curveVertex(21, 22)
        endShape()
        pop()

        // console.log(mouseX - 283, mouseY - 377)
        pop()


        pop();
    }
}

class AustinDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.rotate = 0
        this.limbX = 25
        this.limbY = 25
        // add properties for your dancer here:
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour
        this.rotate = map(sin(frameCount * 0.11), -1, 1, -.15, .15)
    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.

        push();

        translate(this.x, this.y);
        scale(1.2)
        noStroke()

        rotate(this.rotate)
        //body_upper
        fill(100, 50, 50)
        quad(-25, -25, 25, -25, 18, 25, -18, 25)
        fill(80, 40, 40)
        quad(1, 0, -1, 0, -1, -25, 1, -25)


        //arms
        fill(100, 50, 50)
        quad(-2 * this.limbX + 5, -2 * this.limbY - 5, -2 * this.limbX - 5, -2 * this.limbY + 5, -this.limbX + 5, -this.limbY + 15, -this.limbX + 15, -this.limbY + 5)
        quad(this.limbX - 15, -this.limbY + 5, 2 * this.limbX - 5, -2 * this.limbY - 5, 2 * this.limbX + 5, -2 * this.limbY + 5, this.limbX - 5, -this.limbY + 15)

        //hands
        fill(200, 0, 0)
        circle(2 * this.limbX, -2 * this.limbY, 20)
        circle(-2 * this.limbX, -2 * this.limbY, 20)

        //head
        fill(200, 0, 0)
        circle(0, -50, 60)

        //eyes
        fill(255)
        circle(-12, -50, 20)
        circle(12, -50, 20)

        fill(20)
        circle(-12, -50, 13)
        circle(12, -50, 13)

        //Mouth
        stroke(0)
        strokeWeight(2)
        noFill()
        arc(0, -38, 20, 12, 0.3, 2.5)
        pop();


        push()

        translate(this.x, this.y);
        noStroke()
        scale(1.2)

        rotate(-this.rotate)

        //body_lower
        fill(0, 0, 200)
        quad(-25, 25, 25, 25, 22, 0, -22, 0)
        ellipse(0, 25, 50, 20)
        //legs
        quad(-this.limbX + 15, this.limbY + 5, -1.5 * this.limbX + 15, 2 * this.limbY + 5, -1.65 * this.limbX + 5, 2 * this.limbY - 5, -this.limbX + 5, this.limbY - 5)
        quad(this.limbX - 15, this.limbY + 5, 1.5 * this.limbX - 15, 2 * this.limbY + 5, 1.65 * this.limbX - 5, 2 * this.limbY - 5, this.limbX - 5, this.limbY - 5)

        //feet
        fill(0, 0, 100)
        arc(-1.5 * this.limbX + 6, 2 * this.limbY + 5, 20, 20, 3.6, TWO_PI + 0.6)
        arc(1.5 * this.limbX - 6, 2 * this.limbY + 5, 20, 20, 2.7, TWO_PI - 0.6)

        pop()
    }
}

class sydneyDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;


        this.angle = 0;
        this.size = 90;
        this.tentacleCount = 6;
        this.xOffset = 0;
        this.yOffset = 0;
    }

    update() {

        this.angle += 0.05;
        this.xOffset = sin(this.angle) * 25;
        this.yOffset = cos(this.angle * 2) * 10;
    }

    display() {
        push();
        translate(this.x + this.xOffset, this.y + this.yOffset);

        noStroke();
        fill(200, 200, 200);
        ellipse(0, 0, this.size, this.size);


        fill(0);
        ellipse(-15, -10 + sin(this.angle * 2) * 3, 12, 12);
        ellipse(15, -10 - sin(this.angle * 2) * 3, 12, 12);


        stroke(200, 200, 200);
        strokeWeight(8);
        noFill();
        for (let i = 0; i < this.tentacleCount; i++) {
            let a = (TWO_PI / this.tentacleCount) * i;
            let wiggle = sin(this.angle * 3 + a) * 15;


            let tx = cos(a) * (this.size / 2);
            let ty = sin(a) * (this.size / 2);


            let ex = tx + wiggle;
            let ey = ty + 30 + wiggle * 0.5;

            line(tx, ty, ex, ey);
        }

        this.drawReferenceShapes();

        pop();
    }

    drawReferenceShapes() {
        noFill();
        stroke(255, 0, 0);
        line(-5, 0, 5, 0);
        line(0, -5, 0, 5);
        stroke(255);
        // rect(-100, -100, 200, 200);
        fill(255);
        stroke(0);
    }
}

class TowakoDancer {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        // add properties for your dancer here:
        this.t = 0;
        this.bodyColor = color(188, 239, 247);
        this.accentColor = color(245, 74, 12);
        //..
        //..
        //..
    }
    update() {
        // update properties here to achieve
        // your dancer's desired moves and behaviour

        if (frameCount % 100 == 0)
            console.log("frame!")
        this.t += 0.05;


        this.floatY = sin(this.t * 2.0) * 6;

        this.swingX = sin(this.t * 1.4) * 4;

        this.wingDeg = sin(this.t * 3.5) * 15;

    }
    display() {
        // the push and pop, along with the translate 
        // places your whole dancer object at this.x and this.y.
        // you may change its position on line 19 to see the effect.
        push();
        translate(this.x + this.swingX, this.y + this.floatY);
        // ******** //
        // ⬇️ draw your dancer from here ⬇️
        noStroke()

        fill(this.bodyColor);
        ellipse(0, 30, 80, 170);
        circle(0, -50, 85);

        push();
        rotate(radians(this.wingDeg));
        ellipse(40, -10, 145, 30);
        pop();


        push();
        rotate(radians(-this.wingDeg));
        ellipse(-40, -10, 145, 30);
        pop();


        triangle(-10, -70, 40, -70, 30, -110);
        triangle(10, -70, -40, -70, -30, -110);


        fill(this.accentColor);
        circle(0, -40, 40);
        ellipse(0, 10, 40, 80);


        //   this.drawReferenceShapes();
        pop();
    }
    //   drawReferenceShapes() {
    //     noFill();
    //     stroke(255, 0, 0);
    //     line(-5, 0, 5, 0);
    //     line(0, -5, 0, 5);
    //     stroke(255);
    //     rect(-100, -100, 200, 200);
    //     fill(255);
    //     stroke(0);
    //   }
}