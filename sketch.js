var backgroundImage;
var Toucan, ToucanImage;
var cereal, cerealImage, cerealGroup;


function preload(){
backgroundImage = loadImage("prod_img-3394699_fl.jpg")
ToucanImage = loadImage("download (1).jpg")
cerealImage = loadImage("images.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  Toucan = createSprite(950,55)
  Toucan.addImage(ToucanImage);
  Toucan.scale = 0.5
  
  cerealGroup = new Group();

  
}

function draw() {
  background(backgroundImage);  
  
 if(keyDown("left_arrow")){
   Toucan.x = Toucan.x-4;
 }

 if(keyDown("right_arrow")){
   Toucan.x = Toucan.x+4;
 }

  spawnCereal();
 if(cereal) {
 if(cerealGroup.isTouching(Toucan)) {
   cerealGroup.remove(cereal);
   cereal.remove()
   console.log(cereal)
 }
 }
  drawSprites();
}

function spawnCereal(){
  if(frameCount % 200 === 0){

  cereal = createSprite(950,850);
  cereal.addImage(cerealImage);
  cereal.velocityY = -3;
  cereal.scale = 0.25;
  cereal.x = Math.round(random(50, windowWidth))
  cereal.lifetime = 1200;
  
  cerealGroup.add(cereal);
  }
}

/* function eatCereal(cereal, Toucan) {
  cereal.remove();
} */

