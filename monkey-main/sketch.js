var i_jungle
 var ground;
 var i_monkey;
 var crocodileS,tigerS;
 var i_bannana,bannanaS;
 var lifetime = 5;
 var score =0;
 var PLAY=1;
 var END = 0;
 var gameState = PLAY;


function preload(){
i_jungle = loadImage("jungle.jpg");
i_monkey = loadImage("ali.png");
i_croc = loadImage("crocodile.png");
i_tiger= loadImage("tiger.png")
i_bannana= loadImage("bannana.png")
}

function setup() {
  createCanvas(1200,600);
  stroke("black");
 ground = createSprite(600,550,5000,100);
 ground.shapeColor ='green';

 inv_ground = createSprite(600,580,5000,100);
 inv_ground.visible=false;

 monkey = createSprite(100,500);
 monkey.addImage('**%#',i_monkey);
 monkey.scale = 0.4;

 monkey.debug=false;
 monkey.setCollider("rectangle",0,0,130,130);

 tigerS = new Group ();
 crocodileS = new Group ();
 bannanaS = new Group ();
}

function draw() {
  background(i_jungle); 
  drawSprites();
  if(gameState===PLAY){

    ground . velocityX = -10
  if(ground.x<0){
    ground.x = ground.width/2;
  }

  if(keyDown("space")){
    monkey.velocityY = -5
  }
  monkey.velocityY=monkey.velocityY+0.5; 
  monkey.collide(inv_ground);

  var rand = Math.round(random(1,3));
  switch(rand){
    case 1:Crocodile();break;
    case 2: Tiger();break;
    case 3: Bannana();break;
    default: break;

  }
  if(crocodileS.isTouching(monkey)||tigerS.isTouching(monkey)){
    lifetime = lifetime-1;
    crocodileS.destroyEach();
    tigerS.destroyEach();

  }
  if(monkey.isTouching(bannanaS)){
   score = score+5;
   bannanaS.destroyEach();
  }
  if(lifetime===0){
    gameState=END
  }
  } 
  else if(gameState===END){
    text("Game Over" , 500,300);
  }
  
  
 
 
  textSize(30);
  fill ("white");
  text("Score: " +score ,1000,100)
  text("Life: " +lifetime ,100,100)
}