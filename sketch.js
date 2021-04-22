
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var binImg,bin
var engine ,world;
function preload()
{
	bin.Img=loadImage("sprites/dustbingreen.Img")
}

function setup() {
	createCanvas(800, 700);
  paper = new Paper(100,600,10)
ground = new Ground(400,680,800,20)

bin = createSprites(964,520,20,20)
bin.addImage(binImg)
bin.scale=0.45;

bin1 = new Dusbin(550,620,20,100);
bin2 = new Dusbin(610,660,100,20);
bin3 =  new Dusbin(670,620,20,100);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();

  
  drawSprites();
 
}
Function keyPressed(){
if(keycode=== UP_ARROW){
Matter.Body.apllyForce(paper.body,paper.body.position,{x:15,y:-15})
}
}


