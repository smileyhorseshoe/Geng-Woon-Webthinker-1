let inputSomeText;
let button1;
let verb;
let adjective;
let adverb;
let place;
let story = "long long long time ago...";
let story1 = "long long long time ago..."
let story2 = "long long long time ago...";
let story3 = "long long long time ago...";
let story4 = "long long long time ago..."




function setup() {
    createCanvas(600,600);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(150,90);
    inputSomeText.size(300);
    inputVerb = createInput(story1,"text")
    inputVerb.position(150,140)
    inputVerb.size(300)
    inputAdjective = createInput(story2,"text")
    inputAdjective.position(150,190)
    inputAdjective.size(300)
    inputAdverb = createInput(story3,"text")
    inputAdverb.position(150,240)
    inputAdverb.size(300)
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
    story1 = inputVerb.value();
}
function updateStory2() {
    background("skyblue")
    story2 = inputVerb.value()
}
function updateStory3() {
    background("skyblue")
    story3 = inputVerb.value
}
textAlign(CENTER,CENTER)
text(story,width/2,250)
text(story2,width/2,270)
text(story3,width/2,290)
text(story4,width/2,310)
}
function draw() {
text("Enter a noun", 50,100)
text("Enter a verb", 50,150)
text("Enter a adjective", 50,200)
text("Enter an adverb", 50,250)
}