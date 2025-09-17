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
textSize(48)
text("the beginning of the star wars story...", 0 ,0)
text("Bla bla bla, end of story", 0 ,50)
ypos - 0.6


    if ( keyIsDown(32)) {
        soundsFX.play();
    }
    else if ( keyIsDown(DOWN_ARROW)) {
        soundsFX.stop();
    }
 } 