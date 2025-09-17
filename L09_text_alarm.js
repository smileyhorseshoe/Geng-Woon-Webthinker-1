let xpos;
let velocityX;
function setup() {
    createCanvas(600,400);
    background(0);
    fill("cyan")
    textSize(28)
    textAlign(CENTER,CENTER)
    xpos = width/2
    velocityX = 1000000;
}

function draw() {
    background("black")
        translate(xpos,height/2)
    text("bounce!", 0,0)
    xpos = xpos + velocityX
    if(xpos > width) {
        velocityX *= -1
    }
    else if (xpos < 0) {
        velocityX *= -1
    }
}
