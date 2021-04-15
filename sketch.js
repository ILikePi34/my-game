const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function preload() {
   bg1 = loadImage("sprites/battleboxWater.jpg")
   p1 = loadImage("sprites/dream.png")
   p2 = loadImage("sprites/technoblade.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;
    
    bg= createSprite(width/2 , height/2)
    bg.addImage(bg1)    
    
    p1=new player1(200,200);
    p2=new player2(200,400);
}

function draw(){
background(0)
    
drawSprites()
}

/*function mouseDragged(){
    
}

function mouseReleased(){
   
}

function keyPressed(){

}

async function getBgImage(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJASON=await response.json();
    console.log(responseJASON);
    var datetime=responseJASON.currentDateTime;
    console.log(datetime);
    var hour=datetime.slice(11,13);
    console.log(hour);
    if(hour>=06 && hour<=19){
        bg="sprites/bg2.jpg";
    }
    else{
        bg="sprites/background.png";
    }
    backgroundImg=loadImage(bg)
}*/