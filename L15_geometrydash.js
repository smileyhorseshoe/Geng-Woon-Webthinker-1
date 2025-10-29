function setup() {
    createCanvas(1000,700);
    background("black");
}
function draw() {
    rect(0,600,100,100)
    fill("red")
    
    drawSpike(840,1000,600,1)
    // triangle(150,690,200,550,250,690)
}
function drawSpike(x1,x2,y1,y2) {
    fill("blue")
    let x3 = (x1+x2)/2;

    triangle(x1,y2,x2,y2,x3,y1)
}