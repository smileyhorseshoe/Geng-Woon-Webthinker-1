let inputSomeText;
let button1;
let story = ;





function setup() {
    createCanvas(600,400);
    background("skyblue");
    inputSomeText = createInput(story,"text");
    inputSomeText.position(width/2, height/2+100);
    inputSomeText.input(updateLabel); 
}
function draw() {

}