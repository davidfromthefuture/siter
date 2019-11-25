function setup() {
  createCanvas(400, 400);
  
 
}

function draw() { 
 background(225);
   translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 20, 20); 
  
  
stroke(102,153,255);
  fill(255,102,102);
  beginShape();
  vertex(50,100);
  vertex(100,100);
  vertex(25,100);
  vertex(100,25);
  vertex(60,120);
  endShape();
  
translate(50,50);
stroke(102,153,255);
  fill(255,102,102);
  beginShape();
  vertex(50,100);
  vertex(100,100);
  vertex(25,100);
  vertex(100,25);
  vertex(60,120);
  endShape();
  
  
  
}