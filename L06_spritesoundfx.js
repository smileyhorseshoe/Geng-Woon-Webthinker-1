let soundEffect,bgMusic,staticImage;
function preload() {
soundEffect = loadSound('assets/pop.mp3');
bgmusic = loadSound('assets/bossaNova.mp3');
staticImage = loadImage('assets/pico-a.png');
}
function setup() {
    createCanvas(1200,600);
    background(200);
}

function draw() {

}
if (keyIsDown(LEFT_ARROW)) {
    xpos = xpos -3;
}
if (keyIsDown(RIGHT_ARROW)) {
    xpos = xpos +3;
}
