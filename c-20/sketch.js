var moving
var inPlace




function setup() {
  createCanvas(800,400);
moving=createSprite(400, 200, 50, 50);
inPlace=createSprite(200,200,50,50);
}

function draw() {
  background(255,255,255);  
  moving.y=World.mouseY;
  moving.x=World.mouseX;


  if(moving.x - inPlace.x < moving.width/2 + inPlace.width/2 && 
    inPlace.x - moving.x < moving.width/2 + inPlace.width/2 &&
    moving.y - inPlace.y < moving.width/2 + inPlace.width/2 &&
    inPlace.y - moving.y < moving.width/2 + inPlace.width/2){
     moving.shapeColor="green";
     inPlace.shapeColor="green";
  }else{
    moving.shapeColor="red";
    inPlace.shapeColor="red";

  }


  drawSprites();
}