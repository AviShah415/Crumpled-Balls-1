var border1,border2,border3;
var ground;
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	



	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")
	

	engine = Engine.create();
	world = engine.world;



	//border 1
	border1=createSprite(640,650,200,20);
	border1.shapeColor=color("white")

	//border 2
	border2=createSprite(730,610, 20, 100);
	border2.shapeColor=color("white");

	//border 3
	border3=createSprite(530,610,20,100);
	border3.shapeColor=color("white");
	

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	//border 1
	border1= Bodies.rectangle(380,650,200,20);
	Matter.Body.setStatic(border1,true);
	World.add(world, border1);

	//border 2
	border2= Bodies.rectangle(470,610, 20, 100);
	Matter.Body.setStatic(border2, true);
	World.add(world, border2)

	//border 3
	border3=Bodies.rectangle(280,610,20,100);
	Matter.Body.setStatic(border3, true)
	World.add(world, border3)




	 
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
}




