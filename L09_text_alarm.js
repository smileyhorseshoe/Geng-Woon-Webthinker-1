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
let soundsFX;
let bgColor = 220;
let counter = 5
let objectId; // for creating intervals
let secondId
function preload() {
    soundsFX = loadSound("assets/bossaNova.mp3");
    
}
function setup() {
createCanvas(600,400);
background(bgColor);
objectId = setInterval( doSomething, 1000);
}
function doSomething() {

}
function draw() {
background(bgColor);
let hourNumber = hour();
hourNumber = nf(hourNumber,2);
let minuteNumber = minute();
minuteNumber = nf(minuteNumber, 2);
let secondNumber = second();
secondNumber = nf(secondNumber,2);
textAlign(CENTER,CENTER);
textSize(48);
let timeNow = hourNumber + ":" + minuteNumber + ":" + secondNumber;
text(timeNow, width/2,height/2);

// let pi = 3.14159265359
// pi = nf(pi, 1, 4); // 4dp
// text("pi is " + pi, width/2, height/2+50)

counter = nf(counter,1,0)

text("Countdown Timer",width/2, height/2+50);
text(counter, width/2, height/2 +100);
text("Click me to start the timer.",width/2,height/2+150);

if (keyIsDown(32)) {
    soundsFX.play();
}

else if (keyIsDown(DOWN_ARROW)) {
    soundsFX.stop();
}

}
function keyPressed() {
    if (keyCode === UP_ARROW) {
    bgColor = color( random(255), random(255), random(255) );
}
   else if (keyCode === 49) {
    counter--;
    counter = constrain(counter, 0,5)
    }
}
function mousePressed() {
    clearInterval(objectId)
    if (counter === 5) {
        objectId(1000)

    }
}
function doSomething() {
    counter--;
    counter = constrain(counter,0,5)
}
if (counter === 0) {
    clearInterval(objectId);
    soundsFX.play()
    secondId = setInterval( blinkBG,500)
}

let blinkCounter = 0;
function blinkBG() {
blinkCounter++
bgColor = color(random(255), random(255), random(255))
if (blinkCounter === 10) {
    clearInterval(secondId)
    bgColor = 220
}
}

