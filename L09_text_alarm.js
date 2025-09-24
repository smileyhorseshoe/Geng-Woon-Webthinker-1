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
background(200);
}
function draw() {
background(200)
let hourNumber = hour();
hourNumber = nf(hourNumber,2);
let minuteNumber = minute();
minuteNumber = nf(minuteNumber, 2)
let secondNumber = second();
secondNumber = nf(secondNumber,2)
textAlign(CENTER,CENTER)
textSize(48)
let timeNow = hourNumber + ":" + minuteNumber + ":" + secondNumber;
text(timeNow, width/2,height/2)

// let pi = 3.14159265359
// pi = nf(pi, 1, 4); // 4dp
// text("pi is " + pi, width/2, height/2+50)
let countdown = 5
countdown = nf(countdown,1,1)
text("Click me to start the timer." + width/2,height/2+50)
// for (let countdown = 5; countdown > 1; countdown++) 
//     text(countdown)
mouse
}