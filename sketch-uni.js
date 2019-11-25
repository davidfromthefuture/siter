function setup() {
  createCanvas(800, 400);
  background(10,255,255);
  
  drawCircle(width/2, height/2, 400);  
}

// function draw() {
//   background(220); 
// }

function drawCircle(x, y, radius) {
  
  fill(200, random(50,155), 20);
  ellipse(x, y, radius);
  
  
  //this is maybe the most important part of a recursive function, the point at which the recursion will be terminated, otherwise known as the base case
  if(radius > 2) { 
    
    
    radius *= 0.5;
    //now the drawCircle() function calls itself recursively.
    // (as long as radius is greater than 2)
    drawCircle(x + radius, y, radius);
    drawCircle(x - radius, -y, radius);  
    drawCircle(-x - radius, x, radius);
    drawCircle(y - radius, -y, radius);
    
  }
}
