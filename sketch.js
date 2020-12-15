const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, base1, base2;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var polygon, sling;

function setup(){
    canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,650,800,20);
    base1 = new Ground(350,480,100,20);

    b1 = new Box(260,455,30,30);
    b2 = new Box(275,455,30,30);
    b3 = new Box(290,455,30,30);
    b4 = new Box(305,455,30,30);
    b5 = new Box(320,455,30,30);
    b6 = new Box(260,455,30,30);
    b7 = new Box(260,455,30,30);
    b8 = new Box(260,455,30,30);
    b9 = new Box(260,455,30,30);

    polygon = new Polygon(50,100,70,70);

    sling = new SlingShot(polygon.body,{x:50,y:300});

}

function draw(){
    background(205,90,100)
    Engine.update(engine);

    polygon.display();
    
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();

    sling.display();

    drawSprites();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon.body);
    }
}
