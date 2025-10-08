let inputSomeText;
let button1;
let verb;
let story = "long long long time ago...";
let story1 = "long long long time ago.."





function setup() {
    createCanvas(600,400);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(150,90);
    inputSomeText.size(300);
    inputVerb = createInput(story1,"text")
    inputVerb.position(150,140)
    inputVerb.size(300)

    button1 = createButton("Click on Me");
    button1.position(50,300);
    button1.size(100,50);
    button1.mousePressed(updateStory);
}
function updateStory() {
    background("skyblue")
    story = inputSomeText.value();
function updateStory1() {
    background("skyblue")
    
}
textAlign(CENTER,CENTER)
text(story,width/2,250)
}
function draw() {
text("Enter a noun", 50,100)
text("Enter a verb", 50,150)
}