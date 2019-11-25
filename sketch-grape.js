

let img;

X = 100;
Y = 100;
Xspeed = 1;
Yspeed = 3.3;

function preload() {
  img = loadImage('download.jpg');
  img2 = loadImage('grape.jpg');
}
  
  
  
  
  
function setup() {
  createCanvas(640,660,WEBGL);
  background(255);
}

function draw() {
   background(255);
 texture(img2);
  noStroke();
  plane(600,600);
//Move the ball according to its speed.
  X = X + Xspeed;
  Y = Y + Yspeed;
 
//Check for bouncing.
  if ((X > width) || (X < 0)) {
    Xspeed = Xspeed * -1;
  }
  if ((Y > height) || (Y < 0)) {
    Yspeed = Yspeed * -1;
  }
    stroke(0);
  fill(175);
//Display the ball at the location (x,y).
  
 texture(img);
  plane(X,Y,60,60);
    
  
}

