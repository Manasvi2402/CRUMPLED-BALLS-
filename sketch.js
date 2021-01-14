
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new ground(600,height,1200,20);
    paper = new paper(200,200,40);
    dustbin1 = new dustbin(700,380,180,20);
    dustbin2= new dustbin( 600,330,20,120);
    dustbin3 = new dustbin(800,330,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  keyPressed();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-5});
	}
}


