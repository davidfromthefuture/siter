let angle = 27;

function setup() {
  createCanvas(400, 400);
  background(255, 179, 25);
  angleMode(DEGREES);
  translate(width/2,height);
 
  
  branch(100);
}


function branch(length){
  
  
  line(0,0,0,-length);
  translate(0,-length);
  fill(10,255,255);
  ellipse(0,0,12);
  
  length*=random(0.5,0.8);
  
  
  if(length > 2){
  

    rotate(angle);
    branch(length);
    
    rotate(angle);
    branch(length);
}
  
}