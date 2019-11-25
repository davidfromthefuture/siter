let img;
var song;
var volhistory =[];

function preload() {
  img = loadImage('chuck.jpg');
   song = loadSound('fart.mp3');

}
function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }

}

function setup() {
  createCanvas(400, 400,WEBGL);
 button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  amp = new p5.Amplitude();}

function draw() {
  background(1);
  var vol = amp.getLevel();
   volhistory.push(vol);  
   //rotateY(frameCount/2,2);
  rotateX(frameCount/vol,3);  
 
  
  let x1 = map(mouseX, 0, width, 2, 12);
  let x2 =map(mouseY,0,width,2,12);

//rotateX(x1,3);
  //rotateY(x2,x2);  
  plane(400, 400); 
  
  
 // rotateX(x1,4);
  //rotateY(x2,x2);
  fill(230,131,193);
  //scale(vol);
  texture(img);  
  plane(200,200)
  
}
