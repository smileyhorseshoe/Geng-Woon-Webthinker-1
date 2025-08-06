let diameter = 2.5;
let rectsize = 50;
function setup() {
    createCanvas(200,200);
    // background(200);
    // noLoop();
}

function draw() {
background(200)
// rect(width / 2 - rectsize / 2,height / 2 - rectsize / 2,rectsize, rectsize );
if (key === 's') {
    rect(50,50,100,100)
}
if (key === 'c') {
    circle(width /2,height /2,150)

}
if (key === 't') {
    triangle(0,200,100,0,150,150)
}
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
