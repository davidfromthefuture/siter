let img;
function preload(){
 img= loadImage('909.jpg'); 
  
}





function setup() {
  createCanvas(img.width,img.height);
  img.loadPixels();
  console.log(img.pixels.length/4);
  
  
  cp = createImage(img.width, img.height);
}

function draw() {
  //background(220);
  img.loadPixels();
  cp.loadPixels();
  
  for(let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      
      let loc = (x+ y * width) *4;
      
      
     let r= img.pixels[loc] = (255);
   //  let g= img.pixels[loc+1] =random;
    //let b=  img.pixels[loc+2]=y;
    /// let a = img.pixels[loc+3]=random;
      
      cp.pixels[loc] = r;
    //  copy.pixels[loc+1] = g;
    //  copy.pixels[loc+2]= b;
    //  copy.pixels[loc+3]= a;
                 
                 
                 
                 
  
    }}
  img.updatePixels();
  image(img,0,0);
}