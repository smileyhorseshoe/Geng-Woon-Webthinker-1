let username = "woonster"
let colorPicker;
let userInput;
function setup() {
    createCanvas(600,600);
    background("skyblue");
colorPicker = createColorPicker("skyblue");
colorPicker.position(width/2+30,height/2)
userInput = createInput();
userInput.position(width/2, height/2+100)
userInput.input(updateLabel); 
function updateLabel () {
username = userInput.value()
}
}

function draw() {
    background(colorPicker.value());
    fill("white");
    rect(100,100,400,200,25)
    fill("black")
    textSize(32)
    textAlign(CENTER,CENTER)
    text(username, width/2,150)
    text("Enter text here:" , width/2-135, height /2+140)
    text("Choose Background:" , width/2-115, height /2)
    

}