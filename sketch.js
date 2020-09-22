var movingRect,fixedrect;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
   
 movingRect= createSprite (50,200,50,20);

 fixedrect= createSprite (1000,200,40,400);

 speed =random(55,90);
 weight=random(1500,2000);

 deformation= 0.5*weight*speed*speed ;

}

function draw() {
  
  background(0,0,0); 

 // movingRect.x = World.mouseX; 
  //movingRect.y = World.mouseY; 

  movingRect.velocityX=speed;
  
  if(isTouching(movingRect, fixedrect)){ movingRect.velocityX=0;

  if (deformation < 100) {
    
    movingRect.shapeColor(0,255,0);

  }

  if (deformation > 100 && deformation < 180 ) {
    
  movingRect.shapeColor(230,230,0);
    
  }

  //if (deformation > 160) {
    
   // movingRect.shapeColor(255,0,0);
    
  //}

}

  drawSprites();
}

function isTouching(object1,object2){ 
    
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) 
  
  { return true; } 
  
  else { return false; } }

