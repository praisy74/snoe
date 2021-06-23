const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling
var p1,p2
var girl,girlI,bun1,bun2,bun3

var snowparticles=[]

function preload(){

  back=loadImage("praisysnow.jpg")
  imag = loadImage("blue.png");
  imag1 = loadImage("yellow.png");
  imag2 = loadImage("sky.png");
  imag3 = loadImage("pink.png");
girlI =loadImage("girl.png")
ima=loadImage("wood1.png")


}
function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
    world = engine.world;
   
girl=createSprite(40,500,20,20);
girl.addImage("a",girlI)
girl.scale=0.3
bun1=createSprite(200,550,10,10)
bun1.addImage("a",ima)
bun1.scale=0.05
bun2=createSprite(100,580,10,10)
bun2.addImage("a",ima)
bun2.scale=0.05
bun3=createSprite(70,500,10,10)
bun3.addImage("a",ima)
bun3.scale=0.05
   // snowparticles.addImage("a",image)
 // bun1=new Wood(200,400)

}

function draw() {

  background(back);  

  Engine.update(engine);

  if(frameCount%2===0){
    snowparticles.push(new Snow(random(10,990),0));
  }
  for (var v = 0; v < snowparticles.length; v++) {
    snowparticles[v].display();
  }
  //bun1.display();
  console.log(mouseX,mouseY)


  if(keyDown("LEFT_ARROW")){
    girl.x=girl.x-5
}
if(keyDown("RIGHT_ARROW")){
    girl.x=girl.x+5
}
if(keyDown("UP_ARROW")){
    girl.y=girl.y-5
}
if(keyDown("DOWN_ARROW")){
    girl.y=girl.y+5
}
bun1.collide(girl)
bun2.collide(girl)
bun3.collide(girl)

if(bun1.x>=900&&bun2.x>=900&&bun3.x>=900){
  textSize(50)
  stroke("blue")
  strokeWeight(5)
  fill("pink")
  text("Merry Christmas to you",400,400)
}
  //console.log(snowparticles.length)
  drawSprites();
}