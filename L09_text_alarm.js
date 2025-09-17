// let xpos;
// let velocityX;
// function setup() {
//     createCanvas(600,400);
//     background(0);
//     fill("cyan")
//     textSize(28)
//     textAlign(CENTER,CENTER)
//     xpos = width/2
//     velocityX = 200;
// }

// function draw() {
//     background("black")
//         translate(xpos,height/2)
//     text("Bounce!", 0,0)
//     xpos = xpos + velocityX
//     if(xpos > width||xpos < 0) {
//         velocityX *= -1
//     }
// }
function setup() {
createCanvas(600,400)
background(220);
}
function draw() {
let hourNumber = hour();
let minuteNumber = minute();
let secondNumber = second();
textAlign(CENTRE,CENTRE)
textSize(48)
}