let inputSomeText;
let button1;
let verb;
let story = "long long long time ago...";





function setup() {
    createCanvas(600,400);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(150,90);
    inputSomeText.size(300);
    inputVerb
    button1 = createButton("Click on Me");
    button1.position(50,300);
    button1.size(100,50);
    button1.mousePressed(updateStory);
}
function updateStory() {
    background("skyblue")
    story = inputSomeText.value();
textAlign(CENTER,CENTER)
text(story,width/2,250)
}
function draw() {
text("Enter a noun", 50,100)
}