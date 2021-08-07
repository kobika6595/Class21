const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var balloptions={
  restitution:0.95

}
var top_wall;
var Bt1;
var Bt2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  Bt1 = createImg("right.png")
  Bt1.position(220,30)
  Bt1.size(50,50)
  Bt1.mouseClicked(Hforce)

  Bt2 = createImg("up.png")
  Bt2.position(20,30)
  Bt2.size(50,50)
  Bt2.mouseClicked(Vforce)

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball=Bodies.circle(200,100,20,balloptions);
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20)
  Engine.update(engine);
}
function Hforce(){
    Matter.Body.applyForce(ball,ball.position,{x:0.05,y:0})

}
function Vforce(){
  Matter.Body.applyForce(ball,ball.position,{x:0,y:-0.05})

}
