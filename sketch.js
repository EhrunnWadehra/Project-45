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
  
  // cerealGroup = new Group();

  
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
 /* if(cereal) {
 if(cerealGroup.isTouching(Toucan)) {
   cerealGroup.remove(cereal);
   cereal.remove()
   console.log(cereal)
 }
 } */

 if(cereal && isTouching(cereal, Toucan)) {
  cereal.remove()

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
  
  //cerealGroup.add(cereal);

  /* if (isTouching(Toucan, cereal)) {
    cereal.remove()
   } */

  }
}

/* function eatCereal(cereal, Toucan) {
  cereal.remove();
} */

function isTouching(object1,object2){
  if ((object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2)
    ||(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2)) {
      console.log("yes")
      console.log("Toucan x position: ", object2.x)
      console.log("cereal x position: ", object1.x)
      console.log("Toucan y position: ", object2.y)
      console.log("cereal y position: ", object1.y)
      console.log("Toucan height: ", object2.height)
      console.log("cereal height: ", object1.height)
      console.log("Toucan width: ", object2.width)
      console.log("cereal width: ", object1.width)


    return true;
  }
  else {
    console.log("no")

    return false;

  } 
}
