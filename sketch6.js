// using the webcam with video input

var capture;
var cnv;

function setup() {
  cnv = createCanvas(640, 450);
  capture = createCapture();
  capture.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(250);
  capture.loadPixels();

  var stepSize = 12;

  for (var y = 0; y < capture.height; y+=stepSize) {
    for (var x = 0; x < capture.width; x+=stepSize) {
      var i = y * capture.width + x;

      var darkness = (255 - capture.pixels[i*4]) / 255;
      // multiply by 4 because the way the pixels are stored in an image, there
      // is 4 values for every one pixel => (r, g, b, a)

      // map the darkness of the pixel across a 255 range and use that value to draw an ellipse

      var radius = stepSize * darkness;
      // so we have different value of radius depending on how dark the value is at that pixel

      // draw an ellipse at x, y with radius radius
      ellipse(x, y, radius, radius);
    }
  }
}
