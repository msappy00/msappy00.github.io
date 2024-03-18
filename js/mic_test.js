let mic;
var fft;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(userStartAudio);
  // mimics the autoplay policy
  // getAudioContext().suspend();
  
  // Create an Audio input
  mic = new p5.AudioIn();
  mic.getSources(gotSources);
  mic.start();

  fft = new p5.FFT();
}

function draw() {
  background(0);
  stroke(255);

  textAlign(CENTER);

  if (getAudioContext().state !== 'running') {
    text('click to start audio', width/2, height/2);
  } else {
    text('audio is enabled', width/2, height/2);
  }

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel(); 
  text(vol, width/2, height/2);
}

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