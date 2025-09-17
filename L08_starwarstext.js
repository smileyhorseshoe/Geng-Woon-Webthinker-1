let soundsFX;
let ypos;
let space = 50
function preload() {
    soundsFX = loadSound("assets/star_wars_theme_8_bit.mp3")
    soundsFX.loop();
}

function setup() {
    createCanvas(600,1050);
    background("black")
    fill("cyan")
    ypos = height;
}


function draw() {
background("black")
translate(width/2, ypos);
scale(1,2)
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
    "more and more gets killed",
    "blue thinks its orange",
    "but orange is DEAD",
    "blue is voted out",
    "still not an imposter",
    "the imposter sabotages O2",
    "they failed to fix it",
    "all of them died",
    "the imposter has a secret oxygen tank",
    "imposter accidentally pressed eject",
    "he glided through space",
    "bla bla bla end of story"
]
for (let index =0; index < story.length; index++) {
text(story[index],0,textY)
textY = textY + 28

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