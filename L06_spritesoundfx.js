let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgmusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(500,500);
    background("skyblue");
    xpos = width/2
    ypos = height/2
    bg
}

function draw() {
background("skyblue")
image(staticImage, xpos ,ypos ,110 ,113);
// noFill();
// stroke("grey");
// rect(10,10,300,300);
// fill("grey")
// rect(xpos,ypos,35,35)

if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +3;
}
else if (keyIsDown(32)) {
    soundEffect.play();
}
xpos = constrain(xpos,0+1,width - 110);

if (keyIsDown(UP_ARROW)){
    ypos = ypos -3;
}
if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos +3;
}

ypos = constrain(ypos,0+1,height-115)
}




