var box
function setup() {
  createCanvas(400,400);
   box = createSprite(200,200,30,30)
  box.shapeColor = 'gold'
}

function draw() 
{
  background(30);
  if (KeyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x+1
  }if (KeyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x-1
  }if (KeyIsDown(DOWN_ARROW)){
    box.position.x = box.position.x+1
  }if (KeyIsDown(UP_ARROW)){
    box.position.x = box.position.x-1
  }
  drawSprites()


}




