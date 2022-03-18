
function preload(){
  //pre-load images 
 
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path= createSprite(200,200);
  path.addImage(path.Img);
  path.velocityY = 4
  path.scale = 1.2;
}

function draw() {
  background(0);

}
