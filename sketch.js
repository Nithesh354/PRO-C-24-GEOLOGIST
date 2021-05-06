const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane;
var iron;
var stone;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new Rubber(450,400,70)
    iron=new Iron(200,300)
    stone=new Stone(700,400,70,100)
    sand1=new Sand(770,400,10)
    sand2=new Sand(790,400,10)
    sand3=new Sand(810,400,10)
    sand4=new Sand(830,400,10)
    sand5=new Sand(850,400,10)
    sand6=new Sand(870,400,10)
    sand7=new Sand(890,400,10)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();
}