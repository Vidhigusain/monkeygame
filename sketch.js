
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  fruitImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
 monkey = createSprite(50,360,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(300,380,600,10);
  
  score=0
}


function draw() {
 background(180);
  
  
  if(keyDown("space")&& monkey.y >= 360) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY =  monkey.velocityY + 0.8
  monkey.collide(ground)
   spawnObstacles ()
  fruits()
  drawSprites()
  score=Math.ceil(frameCount/frameRate())
  text("survivle time-"+score,200,50)
}

 function spawnObstacles (){
 if(frameCount % 300 ===0){
  Obstacle = createSprite(600,340,40,10);
   Obstacle.velocityX = -5;
 
  
      
  Obstacle.addImage(obstacleImage)
  Obstacle.scale =0.2
  Obstacle.lifetime = 120    
   
   
 }  
 }
  
function fruits (){
 if(frameCount % 80 ===0){
 fruit = createSprite(600,random(120,220),40,10);
   fruit.velocityX = -5;
 
  
      
  fruit.addImage(fruitImage)
  fruit.scale =0.1
  fruit.lifetime = 120    
   
   
 }  
 }
  



