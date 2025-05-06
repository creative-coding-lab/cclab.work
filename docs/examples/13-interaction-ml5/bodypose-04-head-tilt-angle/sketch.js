let video;
let bodyPose;
let poses = [];
let pose;

function preload() {
  // load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");

  // create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  // draw the webcam video
  image(video, 0, 0);

  if (pose) {
    let eyeRX = pose.right_eye.x;
    let eyeRY = pose.right_eye.y;
    let eyeLX = pose.left_eye.x;
    let eyeLY = pose.left_eye.y;

    // calculate the difference between eyes
    let dx = eyeRX - eyeLX;
    let dy = eyeRY - eyeLY;

    // calculate the angle in radians
    let angleRad = atan2(dy, dx);

    // convert to degrees
    let angle = degrees(angleRad); // -180 to 180

    // adjust the range to make it intuitive
    if (angle < 0) {
      angle = angle + 360;
    }
    // straight head will be 0 degree.
    angle = map(angle, 0, 360, -180, 180);

    // draw the line between eyes
    strokeWeight(3);
    stroke(0, 255, 0);
    line(eyeLX, eyeLY, eyeRX, eyeRY);

    // display the angle
    noStroke();
    fill(0, 255, 0);
    textSize(16);
    text("Head tilt angle: " + round(angle) + "°", 20, 30);
  }
}

// callback function for when bodyPose outputs data
function gotPoses(results) {
  // save the output to the poses variable
  poses = results;

  // if there are poses, get the first pose!
  if (poses.length > 0) {
    pose = poses[0];
  } else {
    pose = null;
  }
}

// keypoints of bodyPose
/*
[0] nose
[1] left_eye
[2] right_eye
[3] left_ear
[4] right_ear
[5] left_shoulder
[6] right_shoulder
[7] left_elbow
[8] right_elbow
[9] left_wrist
[10] right_wrist
[11] left_hip
[12] right_hip
[13] left_knee
[14] right_knee
[15] left_ankle
[16] right_ankle
*/
