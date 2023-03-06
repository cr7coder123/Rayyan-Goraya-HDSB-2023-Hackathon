//gamestate
var gameState="Start";

//level 1
var score=0;

//level2
var distance=0;

//level3
var food=0;

//Fun Quiz
var correct=0;


function preload(){
  notification=loadSound("Sound/Notification.wav");
  //level1
  ocean=loadImage("Images/Ocean.jpeg");
  trashIMG=loadImage("Images/Water bottle.png");
  SalmonIMG=loadImage("Images/fish.png");
  ClownfishIMG=loadImage("Images/Clownfish.png");
 splash=loadSound("Sound/splash.wav");

//level2
  track=loadImage("Images/Road.PNG");
  carIMG=loadImage("Images/Car.png");
  car2IMG=loadImage("Images/Car2.png");
  race=loadSound("Sound/car.wav");
  Crash=loadSound("Sound/Crash.wav");

  //level3
  Artic=loadImage("Images/Artic.png");
  Glacier=loadImage("Images/Glacier.png")
  pbearIMG=loadImage("Images/PolarBear.png");
  fishIMG=loadImage("Images/Fish.png");
  Yay=loadSound("Sound/Yay.mp3");

  //Fun Quiz
  wrong=loadSound("Sound/Wrong.wav");

  //end
  World=loadImage("Images/World.jpg");
  Back=loadImage("Images/Background.jpeg")
}
function setup() {
  createCanvas(600,600);
info=createInput("");
info.position(210, 300);
  
  start=createButton("Play");
  start.position(275, 330);

  //level1
 trash=createSprite(200, -100, 10, 10);
 trash.addImage(trashIMG);
 trash.scale=0.1;

 salmon=createSprite(200, -100, 10, 10);
 salmon.addImage(SalmonIMG);
 salmon.scale=0.09;

 clownfish=createSprite(200, -100, 10, 10);
 clownfish.addImage(ClownfishIMG);
 clownfish.scale=0.03;

 //level2
 car=createSprite(200, -100);
 car.addImage(carIMG);
 car.scale=0.3;

 car2=createSprite(300, -100);
 car2.addImage(car2IMG);
 car2.scale=0.5;

 car3=createSprite(300, -100);
 car3.addImage(car2IMG);
 car3.scale=0.5;

 //level3

 ice1=createSprite(100, -100, 40, 40);
 ice1.addImage(Glacier);
 ice1.scale=0.15

 ice2=createSprite(100, -100, 40, 40);
 ice2.addImage(Glacier);
 ice2.scale=0.15

 home=createSprite(50, -100, 50, 50);
 home.addImage(Glacier);
 home.scale=0.15

 pbear=createSprite(200, -100, 20, 20);
 pbear.addImage(pbearIMG);

 fish=createSprite(200, -100, 10, 10);
 fish.addImage(fishIMG);
 fish.scale=0.05

 //Fun Quiz
 
 Question1=createInput("");
 Question1.position(450, -100);

 Done1=createButton("DONE!");
 Done1.position(400, -100);

 Question2=createInput("");
 Question2.position(450, -100);

 Done2=createButton("DONE!");
 Done2.position(400, -100);

 Question3=createInput("");
 Question3.position(450, -100);

 Done3=createButton("DONE!");
 Done3.position(400, -100);

 Question4=createInput("");
 Question4.position(450, -100);

 Done4=createButton("DONE!");
 Done4.position(400, -100);

 Question5=createInput("");
 Question5.position(450, -100);

 Done5=createButton("DONE!");
 Done5.position(400, -100);
}

function draw() {
 background(255);

  if(gameState==="Start"){
    background(World);
    fill("skyblue");
    stroke("skyblue");
    textSize(30);


  text("PROBLEMS OF THE WORLD", 100, 50);
  textSize(15);
  fill("white")
  stroke("white")
  text("NAME:", 150, 312);
  start.mousePressed(()=>{
    start.hide();
    info.hide();
    gameState="Note";
    notification.play();
  })
  }
  
  if(gameState==="Note"){
    background(Back)
    fill("white");
    stroke("white");
    textSize(20);
    text("Hello "+info.value()+",", 10, 50);
    start.hide();
    info.hide();
    text("WARNING:In this level only collect the water bottles, not the fish!!!", 10, 100);
    text("STORY: Me and my friend went to a lake and noticed that there", 10, 130);
    text("was so much plastic. Help us clean up at least 15 water bottles.", 10, 160);
     text("PRESS ENTER TO MOVE ON", 150, 300);
     if(keyDown("enter")){
       gameState="Play";
       trash.y=200;
       salmon.y=300;
       clownfish.y=400;
     }
  }
  if(gameState==="Play"){
    background(ocean);
    start.hide();
    info.hide();
    textSize(20);
    fill("red");
    stroke("red");
    textSize(20);
text("Score:"+score, 30, 30);

function move(){
  trash.y=random(50, 550);
  trash.x=random(50, 550);
  salmon.y=random(50, 550);
  salmon.x=random(50, 550);
  clownfish.y=random(50, 550);
  clownfish.x=random(50, 550);
}

trash.x+=5
salmon.x-=5
clownfish.x+=5

if(trash.x>600){
  trash.y=random(50, 550);
  trash.x=50
}

if(salmon.x<0){
  salmon.y=random(50, 550);
  salmon.x=550
}

if(clownfish.x>600){
  clownfish.y=random(50, 550);
  clownfish.x=50
}

if(trash.isTouching(salmon)){
  move()
}

if(trash.isTouching(clownfish)){
  move()
}

if(clownfish.isTouching(salmon)){
  move()
}
    if(mousePressedOver(trash)){
      move();
      score+=1;
      splash.play();
    }
    if(mousePressedOver(salmon)){
      move();
      score-=1;
      splash.play();
    }

    if(mousePressedOver(clownfish)){
      move();
      score-=1;
      splash.play();
    }

    if(score===5){
      trash.y=400
      salmon.y=450;
      clownfish.y=500;
      text("The Mississippi River carries an estimated 1.5 million metric tons", 0, 200);
      text("of nitrogen pollution into the Gulf of Mexico each year, creating a", 0, 250);
      text("“dead zone” in the Gulf each summer about the size of New Jersey.", 0, 300);
    }
    if(score===10){
      trash.y=400;
      salmon.y=450;
      clownfish.y=500;
      text("Water pollution kills around 10,000 people around the world", 50, 250);
      text("every day - that's 3.6 million people every year", 100, 300); 
    }

    if(score===15){
      trash.y=400;
      salmon.y=450;
      clownfish.y=500;
      text("40 percent of all lakes and rivers in the United States are too", 50, 250);
      text("polluted for fishing and swimming.", 150, 300); 
    }

    if(score>15){
      gameState="Info1";
      trash.y=-400;
      salmon.y=-400;
      clownfish.y=-400;
      Yay.play();
    }
}


if (gameState==="Info1"){
  background(Back)
  start.hide();
  info.hide();
  fill("white");
  stroke("white");
  textSize(20);
  text("We need to stop polluting the ocean by using reusable water", 40, 50);
  text("bottles instead of plastic water bottles. Save the Marine life.", 40, 100)
  text("PRESS shift to Play", 210, 350);
  if(keyDown("shift")){
    gameState="Note2";
  }
}


if(gameState==="Note2"){
  background(Back)
  start.hide();
  info.hide();
  fill("white");
  stroke("white");
  textSize(20);
  text("Me and my friends went on a road trip. Help us drive to", 50, 50);
  text("our destination! (use Arrow Keys)", 125, 100)
  text("PRESS SPACE TO PLAY", 190, 350);
  if(keyDown("space")){
    gameState="Level2";
    car3.y=100;
    car2.y=100;
    car.y=550;
  }
}

if(gameState==="Level2"){
  background(track);
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(20);
  text("distance: "+distance+"km", 50, 50);
  distance+=1;
  if(keyDown("right")&&car.x>-20&&car.x<620){
    car.x+=7;
  }

  if(keyDown("left")&&car.x>-20&&car.x<620){
    car.x-=7;
  }

  car2.y+=15
  car3.y+=20

  if(car2.y>650){
    car2.y=-100
    car2.x=random(50, 550);
    race.play();
  }

if(car.isTouching(car2)){
  car2.y=-100;
  car2.x=random(50, 550);
  car.y=550
  distance=0;
    Crash.play();

}

if(car2.isTouching(car3)){
  car2.y=-100;
  car3.y=-50
  car2.x=random(50, 550);
  car3.x=random(50, 550);
}

  if(car3.y>650){
    car3.y=-50
    car3.x=random(70, 330);
    race.play();
  }

  if(car.isTouching(car3)){
  car3.y=-50;
  car3.x=random(70, 330);
  distance=0;
    Crash.play();
  car.y=550

}

if(distance>500){
  car2.x=1000;
  car3.x=5000;
  car.y-=8;
  if(car.y<0){
    gameState="Info2"
    car.x=-100;
   Yay.play();
  }
}
}

if(gameState==="Info2"){
  background(Back)
  start.hide();
  info.hide();
  fill("white");
  stroke("white");
  textSize(17);
  text("Did you know that using gasoline cars contribute to Global warming?", 30, 50);
  text("We can slow down the procces of global warming by using electric", 60, 100)
  text("cars, or simply just riding a bike.", 200, 150)
  text("PRESS shift to Move on", 220, 350);
  if(keyDown("shift")){
    gameState="Note3";
  }
}


if(gameState==="Note3"){
  background(Back)
  start.hide();
  info.hide();
  fill("white");
  stroke("white");
  textSize(17);
  text("Me and my friend saw that there was a polar bear stranded on a ice piece.", 20, 50);
 text("In this level you need to move an ice piece to help the polar bear get", 20, 80);
 text("10 fishes,then you can take him home (use mouse to move the ice piece)", 20, 110);
 text("PRESS space to play", 210, 350);
 if(keyDown("space")){
   gameState="Level3";
   ice2.y=200;
   ice1.y=100;
  home.y=350;
  home.x=350;
  pbear.x=ice1.x;
  pbear.y=ice1.y-40;
  fish.y=300;
 }
}

if(gameState==="Level3"){
  background(Artic);
  start.hide();
  info.hide();
  fill("red");
  stroke("red");
  textSize(20);
  text("HOME", 320, 320);
text("Fishes:"+food, 30, 30)
  

  if(ice2.isTouching(ice1)){
    ice1.x=mouseX
    ice1.y=mouseY
    pbear.x=ice2.x
    pbear.y=ice2.y-40;
    if(food>9){
      if(ice1.isTouching(home)||ice2.isTouching(home)){
        gameState="Info3";
        ice1.y=-100;
        ice2.y=-100;
        pbear.y=-100;
        home.y=-100;
        fish.y=-100;
        Yay.play();
    }
  }
    
  }else{
    ice2.x=mouseX
    ice2.y=mouseY
  }

if(fish.isTouching(home)){
  fish.x=random(50, 550);
  fish.y=random(50, 550);
}

 if(pbear.isTouching(fish)){
   fish.x=random(50, 550);
   fish.y=random(50, 550);
   food+=1;
   splash.play();
 }
}

if(gameState==="Info3"){
  background(Back)
  start.hide();
  info.hide();
  fish.y=-100;
  fill("white");
  stroke("white");
  textSize(20);
  text("Glaciers are polar bears homes and because of Global warming", 20, 50);
  text("glaciers are melting. Did you know that there are only 22,000", 20, 80);
  text("polar bears left? People are saying that by 2050 there will be", 20, 110);
  text("no polar bears left. We need to stop burning fossils and shift", 20, 140);
  text("society towards living in a sustianable way.", 100, 170)
  text("Press ENTER TO Contiune", 180, 350);
  if(keyDown("enter")){
    gameState="Note4";
  }
}


if(gameState==="Note4"){
  background(Back)
  start.hide();
  info.hide();
  fill("white");
  stroke("white");
  textSize(30);
  text("Fun Quiz", 270, 30);
  textSize(15)
  text("Read the question and answer the question by unscrabling the letters above the textbox", 10, 60)
  textSize(30)
  text("Press space to play", 170, 350);
  if(keyDown("Space")){
    gameState="Q1";
  }
}

// there was alot of repetion below in the questions so I made this function
function questions(){
  background(Back)
  textSize(20);
  fill("white");
  stroke("white");
  text("Type your answer in all lowercase", 150, 50);
  text(correct+"/5", 50, 50);
}

if(gameState==="Q1"){
  questions()
  text("What thing is harmful for marine life?", 125, 140);
  text("Hint: tpaslci", 230, 180)
  start.hide();
  info.hide();
  Logic();
Question1.position(200, 200);
Done1.position(250, 230);
}

if(gameState==="Q2"){
  questions()
  text("What do you call the greenhouse of Earth?", 80, 140);
  text("Hint: eoonz", 230, 180);
  start.hide();
  info.hide();
  Logic();
  Question2.position(200, 200);
  Done2.position(250, 230);
}

if(gameState==="Q3"){
  questions()
  text("What type of fuel is causing global warming?", 80, 140);
  text("Hint: lifsos", 230, 180);
  start.hide();
  info.hide();
  Logic();
  Question3.position(200, 200);
  Done3.position(250, 230);
}

if(gameState==="Q4"){
  questions()
  text("Which year did people predict that polar bears will go extinct?", 50, 140);
  text("Hint: 0025", 230, 180);
  start.hide();
  info.hide();
  Logic();
  Question4.position(200, 200);
  Done4.position(250, 230);
}

if(gameState==="Q5"){
  questions()
  text("We need to live in a _________ way!!", 125, 140);
  text("Hint: estabnisual", 215, 180);
  start.hide();
  info.hide();
  Logic();
  Question5.position(200, 200);
  Done5.position(250, 230);
}


if(gameState==="End"){
background(World);
start.hide();
info.hide();
fill("red");
stroke("red");
textSize(40);
text("WE NEED TO KEEP", 110, 280);
text("OUR PLANET SAFE!!", 110, 320);

}
drawSprites();
}


