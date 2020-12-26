var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);

  //make fixed rectangle
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  //make moving rect
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  //Make four rectangles
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  

  //make the moving rectangle move with mouse
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  //here we calling is touching by giving it arguments
  //moving rct and game object1 
  if(isTouching(movingRect, fixedRect)){

    // if moving rect touches gameobject 1 then if (true)is returned 
    //then the colour of gameobject1 and moving rect changes from green to blue
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else {

    //if inside if (false) is returned then the colour remains green 
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }


 


  drawSprites();
}


//function is touching is dfined for any two objects here we calling 
//moving rect as object 1 and gameobject1 as object 2

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    return true;
  }
  else {
    return false;
  } 
}