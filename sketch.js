
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rect1 = new Rectangle(700, 650, 150, 10);
	rect2 = new Rectangle(630, 630, 10, 50);
	rect3 = new Rectangle(770, 630, 10, 50);

	ball1 = new Paper(200, 200, 10, 10);
  

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
 
}

function UP_ARROW(){
	if (keyCode === UP_ARROW){
       Matter.Body.applyForce(paperObject.body, paperObject.body.position{x:85, y:-85})
	}
}



