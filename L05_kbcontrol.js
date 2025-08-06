let diameter = 2.5
function setup() {
    createCanvas(600,400);
    background(200);
    noLoop();
}

function draw() {



}
function mouseDragged() {
    circle(mouseX, mouseY, diameter);
    fill( random(0, 255),random(0, 255),random(0, 255));
    diameter = diameter + 0.5;
    noStroke()
}

function mousePressed() {
    diameter = 2.5
}
