var car, track;
var carImg, trackImg;
var gameState = "play";

function preload(){
  carImg = loadImage("car.png");
  trackImg = loadImage("track.png");
  
}

function setup(){
  createCanvas(1600, 700);
  track = createSprite(width/2, height/2);
  track.addImage(trackImg);
  track.scale = 1.2;
  track.velocityX = 2;
  
  car = createSprite(400, 400);
  car.addImage(carImg);
  car.scale = 1;
  
}

function draw(){
  background("black");
  drawSprites();
  console.log(track.x)
  if(gameState === "play"){
    if(track.x>900){
    track.x =width/2
  }
  if(keyDown("left") ){
   car.x=car.x-20;
    
  }
 if(keyDown("right")){
    car.x=car.x+20;
  }
  if(keyDown("space")){
    car.velocityX= -2;         
  }
  car.velocityX = car.velocityY+0.5;

  }
  if(gameState === "end"){
    track.destroy();
    car.destroy();
    textSize(50);
    fill("white")
    text("Game Over👍🎉🎉", 200, 350);
    
  }

  if(car===velocityX<400){
    gameState==="end"
  }

  camera.position.x = displayWidth/2;
  cameraposition.y = car.y;
  
}

    
    
  