let counter = 2;
let numberBalls = 9;
let xMult1 = .35;
let yTighten = 1;
let xTighten = 2;
let color1 = [240,70,129];
let color2 = [231,240,70];
let color3=[52,180,235];
let counterMod = 3;
let counterModMod = 6;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  frameRate(10);
  stroke(80,50,220);
}

function draw() {
  background(240,90,20);
  background(52,235,192);
  stroke(270,50,26);
  let lineCount = 10;
  let rowCount = 10;
  let additionalRotate=4;


  
  color1 = [240,70,random(220,250)];
  
   let noDraw = false;
  let switchColor = false;
  
  for(let x = 0; x < numberBalls+50; x++){
    lineCount++;
    for(let y = 0; y < numberBalls+10; y++){
      rowCount++
      let d = width/numberBalls;
      let xVal = 0;
     
      switchColor = false;
      
      xTighten = xTighten  + counterMod/100000000;
      
      xVal = xVal - counterMod;

      if(y%2 == 0){
         stroke(180,150,190);
        fill
        xVal = (d * xMult1) * (x*xTighten) - (numberBalls*4);
        if(lineCount%2 == 0) {   
          
          additionalRotate = 0;
          
        } else {
           //noDraw = true;
            stroke(80,50,220);
          additionalRotate = 270;
          
        }
          
      } else {
          stroke(80,50,220);
        xVal = (d * xMult1) * (x*xTighten) + (numberBalls*2);
          additionalRotate = 270;
      }
      
      
      if(x%2==0){
          if(rowCount%2 == 0) {    
          noDraw = false;
            
          additionalRotate = additionalRotate + 0;
          } else {
            noDraw = false;
            additionalRotate = additionalRotate + (180*rowCount*100);
            switchColor = true;
          } 
      
      } else {
            noDraw = false;
         additionalRotate = additionalRotate + (180*lineCount*10);
      }
      
      
      let yVal = (height/numberBalls) * (y*yTighten);

      
      if(!noDraw){
      
    push();
      
      translate(xVal, yVal);
      rotate(50+(counter*10));
      translate(-xVal, -yVal);  
      
      fill(90,190,220);
      fill(color3);
      arc(xVal, yVal, d, d, 0, 180);
      fill(220,90,120);
      if(switchColor){
        fill(color1);
      } else {
      fill(color2);
      }
      arc(xVal, yVal, d, d, 180, 360);
  
    pop();
      }
        
        
    }  
  }

counter++
  
if (counterMod > 100 || counterMod < -100){
  counterModMod *=-1
} 
  
counterMod = counterMod + (counterModMod*5);

  console.log(counterMod);

}