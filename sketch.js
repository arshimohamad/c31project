const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var plinkos =[];
var particles =[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);


  engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
  ground = new Ground(100,800,1400,50);
  division = new Divisions(150,760,1400,40);

  for (var j= 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,60,10));
  }
  for (var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,150,10));
  }
  for (var j= -5; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,240,10));
  }
  for (var j= -30; j<=width-30; j=j+50){
    plinkos.push(new Plinko(j,330,10));
  }

  for (var k = 0; k <=width; k = k +80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=width; k = k +160){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=width; k = k +240){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=width; k = k +320){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 

}

function draw() {
  background("black"); 
  ground.display();
  division.display(); 
  for(var i = 0; i<plinkos.length; i=i+1){
    plinkos[i].display()
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

}
