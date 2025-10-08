let inputSomeText;
let button1;
let verb;
let adjective;
let adverb;
let place;
let story = "e.g. dog";
let story1 = "e.g. jump"
let story2 = "e.g. happy";
let story3 = "e.g. angrily";
let story4 = "e.g. ang mo kio"




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
    inputPlace = createInput(story4,"text")
    inputPlace.position(150,290)
    inputPlace.size(300)
    button1 = createButton("Click on Me");
    button1.position(50,325);
    button1.size(100,50);
    button1.mousePressed(updateStory);
}
function updateStory() {
    background("skyblue")
    story = inputSomeText.value();
    story1 = inputVerb.value();
    story2 = inputAdjective.value();
    story3 = inputAdverb.value();
    story4 = inputPlace.value();
    textAlign(CENTER,CENTER)
text(story,width/2,350)
text(story1,width/2,370)
text(story2,width/2,390)
text(story3,width/2,410)
text(story4,width/2,430)
}
function draw() {
text("Enter a noun", 50,100)
text("Enter a verb", 50,150)
text("Enter a adjective", 50,200)
text("Enter an adverb", 50,250)
text("Enter a place",50,300)
}