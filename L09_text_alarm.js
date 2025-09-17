let xpos = width /2
let ypos = height/2

function setup() {
    createCanvas(600,400);
    background(0);
    fill("cyan")
}

function draw() {
    translate(width/2,height/2)
    textAlign(CENTER,CENTER)
    textSize(28)
    text("bounce!", xpos, height/2)
}
