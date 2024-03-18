let mic;
var fft;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();

  fft = new p5.FFT();
}

function draw() {
  background(0);
  stroke(255);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  var wave = fft.waveform();

  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length))

    var x = i;
    var y = wave[index] * 300 + height / 2;
    point(x, y);
  }
}
