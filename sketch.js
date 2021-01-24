var fixedBlock, movingBlock;
var trex, obstacle;
var ball, paddle;
function setup() {
  createCanvas(800, 400);

  trex = createSprite(400, 200, 50, 50);
  obstacle = createSprite(300, 300, 50, 50);
  ball = createSprite(200, 400, 15, 15);
  paddle = createSprite(200, 400, 10, 30);
}

function draw() {
  background(255, 255, 255);
  trex.x = mouseX;
  trex.y = mouseY;
  if (isTouching(trex, obstacle)) {
    obstacle.shapeColor = "red";
    trex.shapeColor = "red";
  } else {
    obstacle.shapeColor = "black";
    trex.shapeColor = "black";
  }
  if (isTouching(ball, paddle)) {
    ball.shapeColor = "red";
    paddle.shapeColor = "red";
  } else {
    ball.shapeColor = "black";
    paddle.shapeColor = "black";
  }
  drawSprites();
}