let video;
let bodyPose;
let poses = [];

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

  // draw all the tracked landmark points
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      // only draw if confidence is high enough
      if (keypoint.score > 0.1) {
        fill(0, 255, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 5);

        // display bodypart name and score
        text(keypoint.name, keypoint.x + 10, keypoint.y);
        text(keypoint.score.toFixed(2), keypoint.x + 10, keypoint.y + 20);
      }
    }
  }
}

// callback function for when bodyPose outputs data
function gotPoses(results) {
  // save the output to the poses variable
  poses = results;
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
