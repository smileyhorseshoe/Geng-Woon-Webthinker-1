let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgMusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(500,500);
    staticX = width/2
    staticY = height/2
    bgMusic.loop();
}

function draw() {
background('lightblue')
image(staticImage, staticX ,staticY ,110 ,133);
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
    staticX = staticX -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    staticX = staticX +3;
}
staticX = constrain(staticX,0+1,width - 110);
if (keyIsDown(UP_ARROW)) {
    staticY = staticY - 3
}
if (keyIsDown(DOWN_ARROW)) {
    staticY = staticY + 3
}
staticY = constrain(staticY,0+2,height-130)

}




