let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgmusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(400,400);
    background(200);
    xpos = width/2
    ypos = height/2
}

function draw() {
noFill();
stroke("grey");
rect(10,10,300,300);
fill("grey")
rect(xpos,ypos,35,35)

if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyisDown(LEFT_ARROW)) {
xpos = constrain(xpos,30,340)
}
if (keyIsDown(UP_ARROW)){
    ypos = ypos -3;
}
if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos +3;
}
ypos = constrain(ypos,30,340)
}




