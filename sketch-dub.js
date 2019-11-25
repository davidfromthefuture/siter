var song;
var button;
var amp;
var offset = 0;

function setup() {
  createCanvas(200, 200);

  song = loadSound("Maybellene.mp3", loaded);
  amp = new p5.Amplitude();
  background(51);
}

function loaded() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
}

function draw() {
  background(255,23,25);

  var vol = amp.getLevel();
  var diam = map(vol, 0, 0.3, 10, 200);

  for (var x = 0; x <= width; x +=50){
    for (var y = 0; y <= height; y+=50){ 
      
      fill(23,93,255);
  ellipse(width / x, height / y, -x *diam, 2 *diam);
  
  fill(255,23,25);
  ellipse(width / 3, height / 3, diam, diam);
  
  fill(23,93,255);
  ellipse(width / 2, height / 2, diam, diam);
      
 
      
      
      
      
      
      
      
}
  }
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("DIE.");
  } else {
    song.stop();
    button.html("LIVE.");
  }
}