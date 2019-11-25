let img;

function preload(){
  
  //load your image
  img = loadImage('66.png');



}


function setup() {
  createCanvas(400, 400, WEBGL);

  noStroke()
}

function draw() {
   background(255,255,15);
  orbitControl(30);
  scale(2)
  
  //use it as a texture
  texture(img);
  sphere();
  
}