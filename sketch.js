const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6,box7,box8
var stand;





function setup() {

  engine = Engine.create();
	world = engine.world;


  createCanvas(800,400);
  

stand = new Stand(410,200,300,10);


  
}

function draw() {
  background(255,255,255);  

  stand.display();

  drawSprites();
}