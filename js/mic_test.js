let mic;
var fft;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  var promise = document.querySelector('video').play();

  if (promise !== undefined) {
    promise.then(_ => {
      // Create an Audio input
      mic = new p5.AudioIn();
      // start the Audio Input.
      mic.start();
    }).catch(error => {
      // Autoplay was prevented.
      // Show a "Play" button so that user can start playback.
    });
  }

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
