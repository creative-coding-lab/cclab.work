let scroll;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);

  // scroll is a number between 0 and 1
  // depending on how far the user scrolled
  scroll = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
  
  let outside;
  if ((frameCount / 60) % 2 < 1) {
    outside = color(113, 46, 122);
  } else {
    outside = color(53, 24, 107);
  }

  // window
  fill(outside);
  quad(203, 118, 221, 119, 222, 175, 204, 175);
  quad(225, 120, 241, 122, 242, 175, 226, 175);
  quad(226, 180, 242, 180, 242, 226, 226, 228);
  quad(206, 180, 223, 180, 223, 228, 206, 229);

  // curtain
  fill(0);
  rect(192, 119, 58, map(scroll, 0, 1, 0, 118));
  fill(255);
  circle(253, map(scroll, 0, 1, 143, 255), 4);
  
  // shadow
  let shadowStrength = map(scroll, 0, 1, 1, 0);
  let shadow = color(red(outside) * shadowStrength, green(outside) * shadowStrength, blue(outside) * shadowStrength);
  fill(shadow);
  quad(204, 280, 224, 276, 227, 309, 199, 316);
  quad(227, 277, 245, 273, 256, 303, 230, 308);
  quad(230, 314, 253, 308, 275, 380, 234, 400);
  quad(196, 322, 224, 315, 231, 400, 183, 400);
}
