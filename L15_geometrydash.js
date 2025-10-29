function setup() {
    createCanvas(1000,700);
    background("black");
}
function draw() {
    rect(0,690,1000,10)
    fill("red")
    drawSpike()
}
function drawSpike() {
    fill("blue")
    triangle(50,690,80,650,110,610)
}