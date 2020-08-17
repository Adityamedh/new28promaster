const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300,700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300,400,20);
ground = new Ground(650,650,1300,40);
 dustbin = new Dustbin(800,585,10,120);
 dustbin1 = new Dustbin(1000,585,10,120);
 bin1 = new Bin(950,585,90,90);
 
 sling = new SlingShot(paper.body,{x:300, y:200});

}


function draw() {
  background("silver");
  Engine.update(engine);
paper.display();
 ground.display();
 dustbin.display();
 dustbin1.display();
 bin1.display();
sling.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :2,y :-3});
	}
}

function mouseDragged(){
	Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
sling.fly();
}
