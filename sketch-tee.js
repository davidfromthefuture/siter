let img;

let angleZ = 0;
let numCubes = 12;


function preload() {
  img = loadImage('t2.jpg');
}
function setup() {
  createCanvas(400, 400, WEBGL);
  stroke(65);

}

function draw() {
  background(15,171,255);
  
  ambientLight(220,90,10);
  ambientMaterial(25);
  
  for(let i =0; i < numCubes; i++){
  
    
    push();
    //the location of each cube is determined by this translate function
    //notice how it is wrapped in its own individual transformation matrix
    //by the enclosing push() / pop()
    translate(-200 + i*100, 0, -100);
    
    //each sphere rotates on its own axis 
    // because these rotations are also inside the push()/pop()
    rotateY(PI/12);
    rotateZ(angleZ);
    texture(img);
    cylinder(100);
    pop();
    
  }
  noStroke()
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(img);
    cylinder(80);
 
  
  
  
  
  angleZ+=1.5
}