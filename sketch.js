var form;
var gameState = 0;
var game;
var player;
var database;
var player1, player2;
var playerCount;
var ball;
var wall1,wall2,wall3,wall4;

function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background("lightblue");
    player1 = createSprite(50, 400, 50, 100);
    player2 = createSprite(950, 400, 50, 100 );
    ball = createSprite(500, 400, 25,25);
    //wall1 = createSprite(0,0, 0.1, windowWidth);
    //wall2 = createSprite(0,0, 0.1, windowHeight);
    //wall3 = createSprite(windowHeight,0, 0.1, windowWidth);
    //wall4 = createSprite(windowHeight,windowWidth, 0.1, windowHeight);
    player1.y = mouseY
    if (keyDown = "UPARROW"){
        player2.y = player2.y+10
    }
    if (keyDown = "DOWNARROW"){
        player2.y = player2.y-10
    }
    
    //ball.velocity.x = rand(1,3);
    //ball.velocity.y = rand(1,3);

    //ball.bounceOff(wall1);
    //ball.bounceOff(wall3); 
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}