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
    diameter = diameter + 0.5;
}

function mousePressed() {
    diameter = 2.5
}
