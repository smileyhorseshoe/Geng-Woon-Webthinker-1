let soundsFX;
let ypos;
let space = 50
function preload() {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")
    soundsFX.loop();
}

function setup() {
    createCanvas(600,400);
    background("black")
    fill("cyan")
    ypos = height;
}


function draw() {
background("black")
translate(width/2, ypos);
textAlign(CENTER,CENTER)
textSize(28)
let textY = 0;
let story = [
    "there is a spaceship in space",
    "an imposter is AMONG US",
    "first person dead",
    "they think its red",
    "red gets ejected",
    "hes not an imposter",
    "the imposter sabotages O2",
    "they failed to fix it",
    "all of them died",
    "bla bla bla end of story"
]
for (let index =0; index < story.length; index++) {
text(story[index],0,0)

}
ypos = ypos - 1

if ( ypos < 0) {
    ypos = height
}

    if ( keyIsDown(32)) {
        soundsFX.play();
    }
    else if ( keyIsDown(DOWN_ARROW)) {
        soundsFX.stop();
    }
 } 