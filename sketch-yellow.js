var c1, c2;
function setup() {
  createCanvas(600,600,WEBGL);
	background(255,120,36);
  c1 = color(255, 204, 0);
  c2 = color(255);
  setGradient(c1, c2);
  
}

function draw(){
  //background("pink");
  ellipse(mouseX, mouseY, 30, 30);
  translate(2, height/2);
  line(2, 2, width, 0);
  
  var a = - height/2;
  var b= width/2;
  
  noFill();
  beginShape();
  var x =0;
  while(x<width){
    let y = (x - b) * (x - b)/ (frameCount % 10000) + a;
    vertex(x,y);
    ellipse(x,y,10,55);
    x=x+100;
    
  endShape();
 }
   fill(255,251,36);
  beginShape();
  var x =3;
  while(x<height){
    let y = (x + b) * (x - b)/ (frameCount % 10) + a;
    vertex(x,y);
    ellipse(x,y,30,30);
    x=x+10;
    
  endShape();
 }
}
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}