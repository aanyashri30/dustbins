var d1,d2,d3;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

// here, d1,d2,d3.. refers to the dustbins.

	d1 = createSprite(660,605,15,90);
	d1.shapeColor = ("violet")

	d2 = createSprite(740,640,170,20);
    d2.shapeColor = ("violet");

	d3 = createSprite(830,605,15,90);
	d3.shapeColor = ("violet");


	bar1 = new Dustbin(300,80,20,100);
	bar2 = new Dustbin(360,640,185,20);
	bar3 = new Dustbin(580,80,15,90);

	paper = createSprite(200,640)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keypressed();
  drawSprites();
 
}

function keypressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.Body,paper.Body,position,{x:85,y:-85})
	}
}


