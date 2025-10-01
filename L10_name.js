let username = "woonster"
let colorPicker;
let userInput;
let age = 10;
let ageInput;
function setup() {
    createCanvas(600,600);
    background("skyblue");
    colorPicker = createColorPicker("skyblue");
colorPicker.position(width/2+30,height/2+20);
userInput = createInput(username,"text");
userInput.position(width/2, height/2+100);
userInput.input(updateLabel); 
ageInput = createInput(age,"number");
ageInput.position(width/2, height/2+200);
ageInput.input(updateAge); 
}
function updateLabel () {
username = userInput.value();
}
function updateAge() {
age = ageInput.value();
}



function draw() {
    background(colorPicker.value());
    fill("white");
    rect(100,100,400,200,25);
    fill("black");
    textSize(32);
    textAlign(CENTER,CENTER);
    text(username, width/2,150);
    textAlign(CENTER,CENTER);
    text(age,width/2,200)
    text("Enter name here:" , width/2-135, height /2+110);
    text("Choose Background:" , width/2-115, height /2+30);
    text("Enter age here:", width/2-135, height/2+210)
    

}