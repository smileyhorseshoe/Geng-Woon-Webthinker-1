let xpos = 200;

let ballX = 200;
let ballY = 60;
let ballSize = 50;
let ballSpeedX = 2;
let ballSpeedY = 2;






function setup() {
    createCanvas(600,400);
    background("skyblue");
}

function draw() {
    noStroke();
    ballX = ballX + ballSpeedX
    ballY = ballY + ballSpeedY
    
}