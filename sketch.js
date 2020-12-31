function setup() {
  var car,wall;
  var speed,weight;
  var wall,thickness;
  var bullet,speed,weight;
  thickness=random(22,83)
speed=random(55,90)
speed=random(223,321)
weight=random(30,52)
weight=random(400,1500)
car=createSprite(11500,200,50,50);
car.velocityX =speed;
wall=createSprite(50,200,60,height/2);
wall=createsprite(1200,200,thickness,height/2)
createCanvas(800,400);
createSprite(400, 200, 50, 50);


function draw() {
  background(255,255,255);
  wall.shapecolour=grey;
  if(wall.x-car.x< (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      car.shapecolour=color(255,0,0);
    }
  if(deformation,180 && deformation>100)
  {
    car.shapecolour=color(230,230,0)
  }
  if(deformation<100)
  {
    car.shapecolour=color(0,255,0);
  }
  }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.widh;
  wallLeftEdge=lwall.x;
if(bulletReightEdge>=wallLeftEdge)
{
  return true
}
return false;
}

if(hasCollided(bulleet,wall))
{
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness*);
}
  if(damage>10)
{
  wall.shapeColour=colour(0,255,0)
}










