let SpeedX = 2;
let xpos = 200;

let X = 200;
let Y = 60;
let Size = 50;
let SpeedY = 2;



function setup() {
    createCanvas(600,400);
    background(200);
}

function draw() {
rect(300,200,50,50)
    if (ballX > width-ballSize/2) {
        ballSpeedX = ballSpeedX *-1
        fill(random(0,255), random(0,255), random(0,255));
    }
    if (ballX < 0+Size/2) {
        ballspeedX = ballSpeedX
    fill(random(0,255), random(0,255), random(0,255));
    }




SpeedX = constrain(ballSpeedX, -5, 5)
}
