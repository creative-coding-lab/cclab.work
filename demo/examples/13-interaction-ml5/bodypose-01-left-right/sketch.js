let video;
let bodyPose;
let poses = [];
let pose;

let bodyX = 0;
let bodyY = 0; // detected bodypart position

function preload() {
  // load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(0);

  // create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  background(0);

  // draw the webcam video
  image(video, 0, 0);

  if (pose) {
    // if there is a pose dectected
    // store the bodypart's coordinates as bodyX and bodyY.
    bodyX = pose.nose.x;
    bodyY = pose.nose.y;

    // display the detected position
    noStroke();
    fill(0, 255, 0);
    circle(bodyX, bodyY, 10);
  }

  if (bodyX > width * 0.1 && bodyX < width * 0.3) {
    push();

    noStroke();
    fill(255, 255, 0, 100);
    rect(0, 0, width / 2, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("LEFT", width * 0.25, height * 0.5);
    pop();
  } else if (bodyX > width * 0.7 && bodyX < width * 0.9) {
    push();

    noStroke();
    fill(0, 255, 255, 100);
    rect(width / 2, 0, width / 2, height);

    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("RIGHT", width * 0.75, height * 0.5);

    pop();
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
