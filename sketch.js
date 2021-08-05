var ground,groundImage;

function preload(){
  groundImage=loadImage("ground1.png");
}
function setup() {
  createCanvas(300,300);

  ground= createSprite(0,0,300,300);
  //ground.x=ground.x/2;
  
  ground.addImage(groundImage);
  
 
}

function draw() {
  background(0); 

 
  drawSprites();
}
  
 
  