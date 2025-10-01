function setup() {
    createCanvas(400,400);
    background("skyblue");
colorPicker = createColorPicker();
colorPicker.position(width/2-25,height/2)
}

function draw() {
    fill("white");
    rect(100,100,400,200,25)
}