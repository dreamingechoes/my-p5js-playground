function setup() {
  // Create the canvas
  var canvas = createCanvas(720, 400);
  canvas.parent('canvas');

  // Set fill color to black
  background(0);
  fill(255);

  // Create 20 random circles to draw
  for(var i = 0; i < 20; i++) {
    var rx = random(720) + 1;
    var ry = random(400) + 1;
    ellipse(rx, ry, 20, 20);
  }
}
