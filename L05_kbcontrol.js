let diameter = 50;
let rectsize = 50;
let xpos = 50;
let ypos = 50;
function setup() {
    createCanvas(600,400);
    // background(200);
    // noLoop();
}

function draw() {
background(200)
// rect(width / 2 - rectsize / 2,height / 2 - rectsize / 2,rectsize, rectsize );
// if (key === 's') {
//     rect(50,50,100,100)
//     fill( random(0, 255),random(0, 255),random(0, 255));
// }
// if (key === 'c') {
//     circle(width /2,height /2,150)
//     fill( random(0, 255),random(0, 255),random(0, 255));
// }
// if (key === 't') {
//     triangle(0,200,100,0,200,200)
//     fill( random(0, 255),random(0, 255),random(0, 255));
// }
// textSize(48);
// text(key,    200,70 );
// text(keyCode,200,140);
// if (keyCode === 38) {
//     fill("red");
//     circle(300,200,300);
// }
// if (keyCode === 40) {
//     fill("black");
//     circle(300,200,300);
// }

if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +3;
}
if (keyIsDown(UP_ARROW)){
    ypos = ypos -3;
}
if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos +3;
}
// ypos = constrain(ypos,0,height = height - diameter)
xpos = constrain(xpos,0,width)
fill( random(0, 255),random(0, 255),random(0, 255));
circle(xpos,ypos,50);

}
// function keyPressed() {
//     rectsize = 100;

// }
// function keyReleased() {
    // rectsize = 50;
// }
// function mouseDragged() {
//     circle(mouseX, mouseY, diameter);
//     diameter = diameter + 0.5;
//     noStroke();
// }

// function mousePressed() {
//     diameter = 2.5;
//     fill( random(0, 255),random(0, 255),random(0, 255));
// }
