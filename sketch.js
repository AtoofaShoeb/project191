var road, invisibleroad, roadImage;
var runner, runner_running, runner_collided;


var bird, birdsGroup, bird_flying;
var obstacle, obstacleGroup, obstacleImage;


var END= 0
var PLAY = 1
var gamestate= PLAY

var score=0, edges
var gameover, gameoverImage


function preload(){
roadImage= loadImage("road.jpg")
runner_running= loadAnimation("c1.png","c4.png")
runner_collided= loadAnimation( "boy2.png","boy3.png")

bird_flying = loadAnimation("p3.png")
obstacleImage= loadImage("unnamed.png")

gameoverImage= loadImage("gameOver.png")
}

function setup() {
createCanvas(windowWidth,windowHeight)

road= createSprite(400,50,windowWidth,windowHeight)
road.addImage(roadImage)
road.scale= 2
road.x = road.width /2;
road.velocityX= -4

invisibleroad= createSprite(width/2,250,400,10)
invisibleroad.visible= false

runner= createSprite(50,height-70,20,50)
runner.addAnimation("runner",runner_running)
runner.scale= 0.4
runner.setCollider("rectangle",0,0,40,40)

gameover= createSprite(200,200,50,50)
gameover.addImage(gameoverImage)
gameover.scale=0.8
gameover.visible= false

birdsGroup= new Group();
obstacleGroup= new Group();

}

function draw() {
 background(0)

 
 drawSprites()
 textSize(20);
 text("Score"+ score,900,30)
 if(gamestate==PLAY){
//road.velocityX= -(6+2*score/20)
edges= createEdgeSprites()
runner.collide(edges)

if(road.x < 0){
road.x= road.width/2
}


 }
}