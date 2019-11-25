let img;
let angle = 0;
function preload() {
  img = loadImage("sky.jpg");
  ripple = loadShader('ripple.vert', 'ripple.frag');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  shader(ripple);
}

function draw() {

  
   ripple.setUniform('tex0', img);
  ripple.setUniform('a', 100.0 - angle);
  
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
  angle+=0.1;
}