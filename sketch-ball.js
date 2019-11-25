

let img;


function preload() {
  img = loadImage('pooly.jpg');
  img2 = loadImage('ball.png');
}



function setup() {
  createCanvas(535,800,WEBGL);
}

function draw() {
  
  background(200);
  
  //image(img2,535,800);
  
    texture(img);  
  plane(535,800);

  texture(img2);  
  plane(535,800);  
  
  noStroke();
  rotateY(frameCount/4);
 texture(img2);  
  plane(535,800);
  //rotateY(frameCount/60);
// texture(img2);  
 // plane(535,800);
//  rotateY(frameCount/80);
// texture(img2);  
 // plane(535,800);
   
 // rotateY(frameCount/100);
// texture(img2);  
 // plane(535,800);
  
 // rotateY(frameCount/120);
 //texture(img2);  
//  plane(535,800);
  
 // rotateY(frameCount/140);
// texture(img2);  
 // plane(535,800);  
  
 // rotateY(frameCount/160);
// texture(img2);  
 // plane(535,800);
  
 /// rotateY(frameCount/180);
// texture(img2);  
 // plane(535,800);  
}