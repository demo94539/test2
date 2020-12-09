  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;
 
  var divisions = [];
  var particles = [];
  var particle;
  var plinkos = [];
  var divisionHeight = 300;
  var score = 0;
  var count = 5;
  var gameState = "end";

  function setup() {

  createCanvas(800, 700);
 
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Division(k, 565 , 10, divisionHeight - 30));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,95));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,195));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,295));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,395));
    }
    
}
 


function draw() {
  
  background("black");
  
  textSize(25)
  text("Score : " + score,20,30);

  textSize(25)
  fill("red")
  text("'No of turns': 5",600,30);

  textSize(30)
  fill("green")
  text("100",413,520);

  textSize(30)
  fill("green")
  text("100",333,520);

  textSize(30)
  fill("green")
  text("200",255,520);

  textSize(30)
  fill("green")
  text("200",175,520);

  textSize(30)
  fill("green")
  text("500",95,520);

  textSize(30)
  fill("green")
  text("500",15,520);

  textSize(30)
  fill("green")
  text("200",495,520);

  textSize(30)
  fill("green")
  text("200",575,520);

  textSize(30)
  fill("green")
  text("500",655,520);

  textSize(30)
  fill("green")
  text("500",735 ,520);

  Engine.update(engine);

  ground.display();
  
 if(gameState == "end"){

 textSize(40);
 text("GameOver",300,250);
 
 }

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
    
    particles.push(new Particle(random(width/2-30, width/2 + 30), 10,10));
   
    }
 
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
   
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

if(particle != null){

  particle.display();

    if(particle.body.position.y > 760){

    if(particle.body.position.x < 300){

      score = score + 500;
      particle = null;
      if( count >= 5 ) gameState = "end";

    }

    else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
    {
          score = score + 100;
          particle=null;
          if ( count >= 5) gameState ="end";

    }
    else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) 
    {
          score = score + 200;
          particle=null;
          if ( count >= 5) gameState ="end";

    }
    

    }
 }

 function mousePressed(){

 if(gameState !== "end"){

 count++
 particle = new Particle(mouseX , 10, 10, 10)

 }

 }