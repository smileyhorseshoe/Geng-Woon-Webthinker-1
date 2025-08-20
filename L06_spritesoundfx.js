let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgmusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(400,400);
    background(200);
}

function draw() {
square(100,100,300,300)
}
if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +3;
}
xpos = constrain(xpos,0 + 25,width - 25);

if (keyIsDown(UP_ARROW)){
    ypos = ypos -3;
}
if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos +3;
}
ypos = constrain(ypos,0+25,height-25)
square(150,50,30,30)