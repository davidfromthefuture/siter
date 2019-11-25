var offset = 0;
let img;
function preload() {
  img = loadImage('gar.PNG');
}
function setup() {
  createCanvas(1500, 600);

}

function draw() {
  background(217,121,random(25));
  
  
  for (var x = 0; x <= width; x +=50){
    for (var y = 0; y <= height; y+=50){ 
  image(img,x,y);

    }
  }

}