let xpos;
let velocityX;
function setup() {
    createCanvas(600,400);
    background(0);
    fill("cyan")
    textSize(28)
    textAlign(CENTER,CENTER)
    xpos = width/2
    velocityX = 0.6;
}

function draw() {
        translate(xpos,height/2)
    text("bounce!", 0,0)
}
