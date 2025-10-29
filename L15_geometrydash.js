function setup() {
    createCanvas(1000,700);
    background("black");
}
function draw() {
    rect(0,690,1000,10)
    fill("red")
    drawSpike(50,690,80,650,110,610)
}
function drawSpike(x1,y1,x2,y2,x3,y3) {
    fill("blue")
    triangle()
}