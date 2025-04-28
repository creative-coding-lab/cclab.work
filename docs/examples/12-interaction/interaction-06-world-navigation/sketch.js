// Demo Interaction: World Navigation using Main Character (WASD / Arrow Keys)

let worldWidth = 2000;
let worldHeight = 2000;
let worldOffsetX = 0;
let worldOffsetY = 0;

let particles = [];
let character;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(random(worldWidth), random(worldHeight), random(5, 20)));
  }

  character = new MainCharacter(worldWidth / 2, worldHeight / 2, 20);
}

function draw() {
  // this will be the background of outside world.
  background(220);

  // move main character
  character.moveByKey();

  // we only calculate the position of the main character and
  // don't display the main character here.
  // we will display it after the world is drawn!

  // calculate the offset so that the main character stays at center
  worldOffsetX = width / 2 - character.x;
  worldOffsetY = height / 2 - character.y;

  push(); // world's push()
  translate(worldOffsetX, worldOffsetY);

  // draw the world background
  noStroke();
  fill(200, 255, 255);
  rect(0, 0, worldWidth, worldHeight);

  // draw the particles in the environment
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
  }

  // draw main character
  character.display();

  pop(); // world's pop()

  text("The world follows the main character.", 10, 20);
  text("But the main character will move by the WASD (or Arrow) keys", 10, 40);
}

class Particle {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
  }
  display() {
    push();
    translate(this.x, this.y);
    fill(100, 150, 200);
    noStroke();
    circle(0, 0, this.rad * 2);
    pop();
  }
}

class MainCharacter {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.rotationAngle = 0;
    this.speed = 3; // character move speed
  }
  moveByKey() {
    if (keyIsPressed) {
      // it won't detect capital letters.
      if (key == "w" || keyCode === UP_ARROW) { // up arrow or 'w'
        this.y -= this.speed;
        this.rotationAngle = radians(270);
      }
      if (key == "a" || keyCode === LEFT_ARROW) { // left arrow or 'a'
        this.x -= this.speed;
        this.rotationAngle = radians(180);
      }
      if (key == "s" || keyCode === DOWN_ARROW) { // down arrow or 's'
        this.y += this.speed;
        this.rotationAngle = radians(90);
      }

      if (key == "d" || keyCode === RIGHT_ARROW) { // right arrow or 'd'
        this.x += this.speed;
        this.rotationAngle = radians(0);
      }
    }

    // prevent going outside
    this.x = constrain(this.x, 0, worldWidth);
    this.y = constrain(this.y, 0, worldHeight);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(this.rotationAngle); // rotate the main character to face the mouse
    noStroke();
    fill(255, 0, 255);
    triangle(
      0, 0,
      this.rad * -2, this.rad * 0.7,
      this.rad * -2, this.rad * -0.7
    );
    pop();
  }
}
