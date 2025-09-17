let xpos = width /2
let ypos = height/2
let velocityX;
function setup() {
    createCanvas(600,400);
    background(0);
    fill("cyan")
    textSize(28)
    textAlign(CENTER,CENTER)
    
}

function draw() {
        translate(xpos,height/2)
    text("bounce!", 0,0)
}
