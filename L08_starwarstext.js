let soundsFX;
let ypos;
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

let story = [
    "the beginning of the star wars story...",
    "at episode 4 in the year 1995",
    "Rey and Kylo Ren vs. Praetorian Guard fight with lightsabers",
    "who will win"
]
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