
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeimg;
var ground;
var boyimg;
var stone;
var slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload()
{
	treeimg = loadImage("tree.png");
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(displayWidth/2,680,displayWidth,50);

	stone = new Stone(220,533,30);

	mango1 = new Mango(1000,220,50);
	mango2 = new Mango(820,340,40);
	mango3 = new Mango(1100,280,50);
	mango4 = new Mango(900,270,40);
	mango5 = new Mango(950,350,50);
	mango6 = new Mango(1200,350,50);
	mango7 = new Mango(1100,350,50);

	slingshot = new Slingshot(stone.body, {x:220, y:533})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(200);
  
  textSize(32);
  fill("black");
  text("Press SPACE to Restart", 150,150);

  image(treeimg,1000,430,550,550);
  image(boyimg,300,600,250,250);

  ground.display();
  stone.display();
  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  detecotollision(stone, mango1);
  detecotollision(stone, mango2);
  detecotollision(stone, mango3);
  detecotollision(stone, mango4);
  detecotollision(stone, mango5);
  detecotollision(stone, mango6);
  detecotollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased()
{
	slingshot.fly();
}

function detecotollision(lstone,lmango)
{
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance <= lmango.radius + lstone.radius)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}

function keyPressed()
{
	if (keyCode === 32)
	{
		slingshot.attach(stone.body);
	}
}