const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var world;

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof();

	bob1=new Bob(300,600);
	bob2=new Bob(350,600);
	bob3=new Bob(400,600);
	bob4=new Bob(450,600);
	bob5=new Bob(500,600);
		
	//Create a Ground
/*
	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});
*/
	rope1=new Rope(bob1.body,roof.body,-100)
	rope2=new Rope(bob2.body,roof.body,-50)
	rope3=new Rope(bob3.body,roof.body,0)
	rope4=new Rope(bob4.body,roof.body,50)
	rope5=new Rope(bob5.body,roof.body,100)

	Engine.run(engine);
//	Render.run(render);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  roof.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed() {
  	if (keyCode === LEFT_ARROW) {
    	Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  	}
}







