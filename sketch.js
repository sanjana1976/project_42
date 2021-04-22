const Engine= Matter.Engine
const World= Matter.World 
const Bodies= Matter.Bodies
var hr 
var sec
var min
var Hrend
var secEnd
var Minend
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  engine= Engine.create();
  world= engine.world;
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90)
  Engine.update(engine);
  hr= hour();
  sec= second();
  min= minute();
  

  stroke("yellow");
  strokeWeight(7)
  noFill();
  let secEnd= map(sec,0,60,0,360)
arc(0,0,300,300,0,secEnd)
push();
rotate(secEnd)
stroke("yellow")
line(0,0,100,0)
pop();


stroke("red");
strokeWeight(7)
let Minend= map(min,0,60,0,360)
arc(0,0,280,280,0,Minend)
push();
rotate(Minend)
stroke("red")
line(0,0,80,0)
pop();


stroke("white");
strokeWeight(7)
let Hrend= map(hr%12 ,0,12,-90,360)
arc(0,0,260,260,0,Hrend)
push();
rotate(Hrend)
stroke("white")
line(0,0,60,0)
pop();
stroke("black")
point(0,0)



 /* angleMode(DEGREES);
  hrAng= map(hr,0,12,0,360);
  secAng= map(sec,0,60,0,360)

  /*push();
  rotate(hrAng)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,300,0,200)
  pop();*/
  push();
  rotate(-90);
  translate(200,200)
 
  line(100,300,0,200)
  
pop();

  drawSprites();
  //hr
}