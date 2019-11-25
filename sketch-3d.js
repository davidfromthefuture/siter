let long = 1, lat =1;
let resolution = 10;
let r = 200;

function setup() {
  
  createCanvas(400, 400, WEBGL); 

}

function draw() {
  background(255);
  
  orbitControl();
  
 
  for(let i = 1; i < resolution; i++){
    for(let j = 0; j < resolution; j++){

      let x = r * sin(lat) * cos(long);
      let y = r * sin(lat) * sin(long);
      let z =  r * cos(lat);

      push()
      translate(x,y,z);
     if(i%2 == 0){
      fill(15,47,255);
    } else {
      fill(255,15,15);
    }
    
      box(100);
      pop()
    
  
      long+=TWO_PI/resolution; 
    } 
   
    lat-=PI/resolution; 
  }
}

  