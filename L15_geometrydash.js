function setup() {
    createCanvas(1000,700);
    background("black");
}
function draw() {
    rect(0,690,1000,10)
    fill("red")
    drawSpike(50,80,110,690,650,610)
}
function drawSpike(x1,x2,y1,y2) {
    fill("blue")
    triangle()
}