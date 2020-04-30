const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plank1, tag;
var backgroundImg,platform;
var Projectile, slingshot;

function setup(){
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plank1= new plank(600,350,30,30);
    plank2= new plank(630,350,30,30);
    plank3= new plank(660,350,30,30);

    plank4= new plank(600,320,30,30);
    plank5= new plank(630,320,30,30);
    plank6= new plank(660,320,30,30);

    plank7= new plank(600,290,30,30);
    plank8= new plank(630,290,30,30);
    plank9= new plank(660,210,30,30);

    ground = new Ground(600,height,1200,20);
   
    Projectile = new projectile(200,200,10,10);
    slingshot = new catapault(Projectile.body,{x:300, y:400});
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    Projectile.display();
   
    slingshot.display();    

    plank1.display();
    plank2.display();
    plank3.display();
    plank4.display();
    plank5.display();
    plank6.display();
    plank7.display();
    plank8.display();
    plank9.display();
}
function mouseDragged(){
Matter.Body.setPosition(Projectile.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
slingshot.fly();
}