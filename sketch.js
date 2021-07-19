var bow, arrow, background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var greenBalloonGroup, redBalloonGroup, pinkBalloonGroup, blueBalloonGroup, arrowGroup
var score = 0;

//file change in repository

//////////////////////////////////////////////////

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png")
  
  greenBalloonGroup = createGroup();
  redBalloonGroup = createGroup();
  pinkBalloonGroup = createGroup();
  blueBalloonGroup = createGroup();
  
  arrowGroup = createGroup();
}

//////////////////////////////////////////////////

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
}

//////////////////////////////////////////////////

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
  }
  
  if(arrowGroup.isTouching(redBalloonGroup)) {
    redBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1;
  }
  
  if(arrowGroup.isTouching(blueBalloonGroup)) {
    blueBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+2
  }
  
  if(arrowGroup.isTouching(greenBalloonGroup)) {
    greenBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+3
  }
  
  if(arrowGroup.isTouching(pinkBalloonGroup)) {
    pinkBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score+1
  }
  
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      blueBalloon();
    } else if (select_balloon == 3) {
      greenBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    }
  }
  
  drawSprites();
  
  textSize(20);
  text("Score: " +score,275,30);
}

//////////////////////////////////////////////////

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrowGroup.add(arrow);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

//////////////////////////////////////////////////

function redBalloon() {
  var red = createSprite(0,Math.round(random(30, 370)), 10, 10);
  redBalloonGroup.add(red);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(30,370)),10,10);
  blueBalloonGroup.add(blue);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(30,370)),10,10);
  greenBalloonGroup.add(green);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(30,370)),10,10);
  pinkBalloonGroup.add(pink);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.2;
}
