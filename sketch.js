
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftside;
var rightside;


function preload()

{
	
}

function setup() {
	background(255)
	createCanvas(900 , 500);


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : false,
		restitution : 0,
		friction : 0,
		density : 2
	}
    
	fill("white");
	ball = Bodies.circle(200,100,10,options);
	World.add(world,ball);

	ground = new Ground(450,460,900,8);

	leftside = new Ground(580,415,8,80);

	rightside = new Ground(750,415,8,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ground.display();
  leftside.display();
  rightside.display();

  ellipse(ball.position.x,ball.position.y,10)

 
  
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-10})
  }
}
  
	
  
  



