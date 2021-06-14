var canvas;
var music;
var redbox;
var yellowbox;
var greenbox;
var cyanbox;
var ball;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    yellowbox= createSprite(100,500,60,20);
    
    redbox= createSprite(300,500,60,20);
    greenbox= createSprite(500,500,60,20);
    cyanbox= createSprite(700,500,60,20);
    ball=createSprite(45,45,20,20);



yellowbox.shapeColor=rgb(255,255,0)
redbox.shapeColor=rgb(255,0,0);
cyanbox.shapeColor=rgb(0,255,255);
greenbox.shapeColor=("green");
ball.shapeColor=rgb(255,255,0);
    //create box sprite and give velocity

    ball.velocityX=4;
    ball.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    ball.bounceOff(edges);
if(redbox.isTouching(box)){
ball.shapeColor="red";
music.play();
}

if(yellowbox.isTouching(ball)){
    ball.shapeColor="yellow";
    music.stop();

}
    
if(ball.isTouching(greenbox)){
     ball.shapeColor="green";
     music.play();
     

}

if(ball.isTouching(cyanbox)){
    ball.shapeColor="cyan";
    music.stop();
    //change the colour and stops the music
 }

 


    drawSprites();
    //add condition to check if box touching surface and make it box
}
