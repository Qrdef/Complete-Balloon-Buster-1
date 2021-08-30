//I was going to use the switch case but thye already added the number thing so i didnt do switch case
var bow , arrow,  background;
var bowImage, arrowImage, baloon, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redballoon_group;
var greenballoon_group;
var pinkballoon_group
var blueballoon_group
var arrow_group
var score=0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
}



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
  redballoon_group=new Group()
  greenballoon_group=new Group()
  pinkballoon_group=new Group()
  blueballoon_group=new Group()
  arrow_group=new Group()
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  //making arrows work
 
   // release arrow when space key is pressed
   if(frameCount%30==0)
   {
  if (keyDown("space")) {
    createArrow();
    
  }
} 
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    if (select_balloon == 2)
    {
    blueBalloon();
    }
    if(select_balloon == 3)
    {
    greenBalloon();
    }
    else{
    pinkBalloon();
    }
  }
  if(arrow_group.isTouching(redballoon_group))
  {
  redballoon_group.destroyEach()
  arrow_group.destroyEach()
  score=score+1
  }
  if(arrow_group.isTouching(blueballoon_group))
  {
  blueballoon_group.destroyEach()
  arrow_group.destroyEach()
  score=score+2
  }
  if(arrow_group.isTouching(greenballoon_group))
  {
  greenballoon_group.destroyEach()
  arrow_group.destroyEach()
  score=score+3
  }
  if(arrow_group.isTouching(pinkballoon_group))
  {
  pinkballoon_group.destroyEach()
  arrow_group.destroyEach()
  score=score+4
  }
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
  textSize(20)
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)
  text("ShootCount="+score,120,70)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redballoon_group.add(red)
  
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueballoon_group.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
 green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenballoon_group.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 0.1;
  pinkballoon_group.add(pink)
}
