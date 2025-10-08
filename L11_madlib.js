let inputSomeText;
let button1;
let story = "long long long time ago...";





function setup() {
    createCanvas(600,400);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(50,50);
    inputSomeText.size(300)
    button1 = createButton("Click on Me")
    button1.position(50,100)
    button1.size(100,50)
}
function draw() {

}