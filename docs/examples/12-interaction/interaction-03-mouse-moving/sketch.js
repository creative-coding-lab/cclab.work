// Demo Interaction: Mouse is Moving LEFT/RIGHT (and UP/DOWN)

let DISTANCE_THRESHOLD = 5;
let txt = "";

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(220, 50);

  let angle = atan2(mouseY - pmouseY, mouseX - pmouseX);
  let distance = dist(mouseX, mouseY, pmouseX, pmouseY);
  if (distance > DISTANCE_THRESHOLD) {
    // how do we get the direction of UP or DOWN?
    if (angle > radians(-45) && angle < radians(45)) {
      txt = "Mouse is moving RIGHT!";
    }
    else if (angle > radians(135) || angle < radians(-135)) {
      txt = "Mouse is moving  LEFT!";
    }
  } else {
    txt = "";
  }

  // display text at the center of the canvas
  push();
  translate(width / 2, height / 2);
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(txt, 0, 0);
  pop();

  // log the distance and direction of mouse movement
  text("Open the console to see the distance and angle of mouse movement", 10, 20);
  console.log("___");
  console.log("Distance: " + distance.toFixed(2));
  console.log("Angle: " + degrees(angle).toFixed(2));
}