const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var slingShot;
var ball;
var engine, world;
var box1;
//var ground;
function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,500,20);

    //box1 = new Box(490,220,50,50);
    box2 = new Box(500,290,50,50);
    box3= new Box(550,270,50,50);
    box4= new Box(590,320,40,50);

    box5= new Box(590,280,40,50);
    box6 = new Box(590,240,40,50);
   // box7= new Box(630,210,40,20);
    box8 = new Box(630,270,50,50);
    box9 = new Box(690,290,50,50);
    box10= new Box(690,220,50,50);
    ball = new Ball(50,120,3);

    //creating the slingShot by defining the two bodies to be attached
    slingShot = new SlingShot(ball.body,{x:150,y:100});

    
}
function draw(){
    background("lightgreen");
    Engine.update(engine);
    text("WELCOME_TO_MY_SLINGSHOT_MAZE",500,120);
   strokeWeight(4);
    //box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   // box7.display();
    box8.display();
    box9.display();
    box10.display();
    ground.display();
     ball.display();
    slingShot.display();
      
    
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
   
    }

    function mouseReleased(){
     slingShot.fly();
     
    
        
        }
       