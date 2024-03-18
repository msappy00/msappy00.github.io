let mic;
var fft;

function preload() {
  song = loadSound("audio/timer.mp3")
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  // cnv.mousePressed(userStartAudio);
  
  // Create an Audio input
  mic = new p5.AudioIn();
  mic.getSources(gotSources);
  mic.start();

  fft = new p5.FFT();
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(10);
  noFill();
  let cx = width/2;
  let cy = height/2;
  let cmin = Math.min(cx, cy)

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel()*(cmin); 
  var wave = fft.waveform();

  textAlign(CENTER);

  if (getAudioContext().state !== 'running') {
    text('click to start audio', width/2, height/2);
  } else {
    text('', width/2, height/2);
  }
  ellipse(cx, cy, vol, vol);
}

/* function mouseClicked() {
  if (song.isPlaying()) {
    song.pause()
  } else {
    song.play()
  }
} */

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}

function gotSources(deviceList) {
  let id = 0;
  print("Audio In Devices\n------------------");
  for (let d of deviceList) {
    print('[' + id + '] ' + d.label);
    id++;
  }
  if (deviceList.length > 0) {
    audioIn.setSource(audioSource);
    let currentSource = deviceList[audioIn.currentSource];
    print('set source to: ' + currentSource.label);
  }
}