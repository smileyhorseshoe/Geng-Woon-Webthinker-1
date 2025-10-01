let username = "woonster"
let colorPicker;
let userInput;
function setup() {
    createCanvas(600,600);
    background("skyblue");
colorPicker = createColorPicker();
colorPicker.position(width/2-25,height/2+50)
userInput = createInput();
userInput.position(width/2-25, height/2+100)
}

function draw() {
    background(colorPicker.value());
    fill("white");
    rect(100,100,400,200,25)
    fill("black")
    textSize(32)
    textAlign(CENTER,CENTER)
    text(userInput, width/2,150)
}