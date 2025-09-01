let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgMusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(500,500);
    xpos = width/2
    ypos = height/2
    bgMusic.loop();
}

function draw() {
background('lightblue')
image(staticImage, xpos ,ypos ,110 ,133);
// noFill();
// stroke("grey");
// rect(10,10,300,300);
// fill("grey")
// rect(xpos,ypos,35,35)
if (keyIsDown(32)) {
    soundEffect.play();
}
// if (key == 's') {
//     bgmusic.pause();
// }
// if (key == 'r') {
//     bgmusic.loop()
// }
if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +3;
}
xpos = constrain(xpos,0+1,width - 110);

if (keyIsDown(UP_ARROW)) {
    ypos = ypos - 3
}
if (keyIsDown(DOWN_ARROW)) {
    ypos = ypos + 3
}
ypos = constrain(ypos,0+2,height-130)
}




