var offset = 0;
let img;
function preload() {
  img = loadImage('chukcy.png');
}
function setup() {
  createCanvas(1500, 600);

}

function draw() {
  background(random(255),25,25);
  
  image(img,10,50);
  
  for (var x = 0; x <= width; x+=50){

   
   noFill();
stroke(255, 102, 0);
curve(x, 26, 5, 206, 73, 204, 73, 61);
stroke(0);
curve(x, 26, 73, 24, 73, 461, 15, 65);
stroke(255, 102, 0);
curve(x, 24, 73, 61, 15, 65, 15, 65);
  
  stroke(255, 102, 0);
curve(5, 226, 5, 26, 73, 204, 73, 1);
stroke(0);
curve(x, 226, 73, 45, 73, 61, 15, 65);
stroke(255, 102, 0);
curve(x, 24, 73, 61, 105, 65, 15, 65);
}
  offset = offset + 1;
}