const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var enigne,world;

function preload(){
 backgroundImg=loadImage("gamingbackground2.png")
}

function setup() {
  createCanvas(3000,800);
  engine = Engine.create()
  world = engine.world

  ground=new Ground(700,600,1000,20)
  box1=new Box(840,100,70,70)
  box2=new Box(840,100,70,70)
  box3=new Box(840,100,70,70)
  box4=new Box(840,100,70,70)
  box5=new Box(840,100,70,70)
  box6=new Box(840,100,70,70)

  box7=new Box(760,100,70,70)
  box8=new Box(760,100,70,70)
  box9=new Box(760,100,70,70)
  box10=new Box(760,100,70,70)
  box11=new Box(760,100,70,70)
  box12=new Box(760,100,70,70)

  box13=new Box(690,100,70,70)
  box14=new Box(690,100,70,70)
  box15=new Box(690,100,70,70)
  box16=new Box(690,100,70,70)
  box17=new Box(690,100,70,70)
  box18=new Box(690,100,70,70)
  box19=new Box(690,100,70,70)
  box20=new Box(690,100,70,70)
  herO=new hero(450,50,150,100)
  rope=new Rope(herO.body,{x:450,y:50})
  monster = new Monster(1150,400,500,500)

}

function draw() {
  
  background(backgroundImg)
  
  Engine.update(engine);


  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  herO.display()
  rope.display()
  monster.display()
  
}
function mouseDragged(){
  Matter.Body.setPosition(herO.body,{x:mouseX,y:mouseY});
}