let diameter = 2.5;
let rectsize = 50;
function setup() {
    createCanvas(600,400);
    background(200);
    noLoop();
}

function draw() {

rect(width / 2 - rectsize / 2,height / 2 - rectsize / 2,rectsize, rectsize );

}
function keyPressed() {
    rectsize = 100;

}
function keyReleased() {}
// function mouseDragged() {
//     circle(mouseX, mouseY, diameter);
//     diameter = diameter + 0.5;
//     noStroke();
// }

// function mousePressed() {
//     diameter = 2.5;
//     fill( random(0, 255),random(0, 255),random(0, 255));
// }
