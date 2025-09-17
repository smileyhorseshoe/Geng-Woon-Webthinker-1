let xpos = width /2
let ypos = height/2

function setup() {
    createCanvas(600,400);
    background(0);
    fill("cyan")
    translate(xpos,height/2)
    textAlign(CENTER,CENTER)
    textSize(28)
}

function draw() {

    text("bounce!", width/2, height/2)
}
