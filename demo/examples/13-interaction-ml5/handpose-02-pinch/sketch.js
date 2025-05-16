let PINCH_DISTANCE_THRESHOLD = 50;

let video;
let handPose;
let hands = [];

function preload() {
  // load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("p5-canvas-container");
  background(0);

  // create the video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  background(0);

  // draw the webcam video
  image(video, 0, 0);

  // if there is at least one hand
  if (hands.length > 0) {
    // find the index finger tip and thumb tip from the first hand
    let indexFinger = hands[0].index_finger_tip;
    let thumb = hands[0].thumb_tip;

    // calculate the pinch "distance" between indexFinger and thumb
    let distance = dist(indexFinger.x, indexFinger.y, thumb.x, thumb.y);

    // display two fingers
    noStroke();
    fill(0, 255, 0);
    circle(indexFinger.x, indexFinger.y, 5);
    circle(thumb.x, thumb.y, 5);

    if (distance < PINCH_DISTANCE_THRESHOLD) {
      // pinched!

      // get the center (average) of the two fingers
      let centerX = (indexFinger.x + thumb.x) / 2;
      let centerY = (indexFinger.y + thumb.y) / 2;
      let dia = map(distance, 0, PINCH_DISTANCE_THRESHOLD, 60, 1);

      // display a circle to indicate "pinch"
      fill(255, 0, 255);
      circle(centerX, centerY, dia);
    }
  }
}

// callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}

// keypoints of handPose
/*
[0] wrist
[1] thumb_cmc
[2] thumb_mcp
[3] thumb_ip
[4] thumb_tip
[5] index_finger_mcp
[6] index_finger_pip
[7] index_finger_dip
[8] index_finger_tip
[9] middle_finger_mcp
[10] middle_finger_pip
[11] middle_finger_dip
[12] middle_finger_tip
[13] ring_finger_mcp
[14] ring_finger_pip
[15] ring_finger_dip
[16] ring_finger_tip
[17] pinky_finger_mcp
[18] pinky_finger_pip
[19] pinky_finger_dip
[20] pinky_finger_tip
*/
