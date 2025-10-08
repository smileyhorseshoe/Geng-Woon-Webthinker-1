let inputSomeText;
let button1;
let story = "long long long time ago...";





function setup() {
    createCanvas(600,400);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(50,50);
    inputSomeText.input(updateLabel); 
}
function draw() {

}