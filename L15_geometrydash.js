function setup() {
    createCanvas(1000,700);
    background("black");
}
function draw() {
    rect(width/2,height/2,100,100)
    fill("red")
    
    // drawSpike(850,880,675,620)
    triangle(150,690,200,550,250,690)
}
function drawSpike(x1,x2,y1,y2) {
    fill("blue")
    triangle()
}