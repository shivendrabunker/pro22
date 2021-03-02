const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box;
var ground;
var car2
function setup(){
    var canvas=createCanvas(400,400);

    engine = Engine.create();
    world =  engine.world;

    //----------------BOX------------

    var box_options= {
    isStatic : true
    }
    
    box = Bodies.rectangle(200,100,60,60, box_options);
    World.add(world, box);
    
   
   
    // ----------CAR2-----------
    var car2_options = {
        restitution: 1.0
    }
    car2 = Bodies.rectangle(300,100,50,50,car2_options);
    World.add(world,car2);

    
    //--------------GROUD--------------
    
    var ground_options={
      isStatic :true 
    }
    ground = Bodies.rectangle(200,350,400,5,ground_options);
    World.add(world,ground);
    
    
    
    //----------------END---------
    console.log(box);
    console.log(box.position.x);



  }
  function draw()
  {
    background(0);

    Engine.update(engine);

    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    
    rect(ground.position.x,ground.position.y,400,5);
    
    rect(car2.position.x,car2.position.y,50,50);
  }