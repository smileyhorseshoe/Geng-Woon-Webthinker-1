function setup(){
    createCanvas(600, 400);
    background(220);
}

function draw(){
    fill(255, 0, 0);
//           x   y   w  h
    ellipse(300,100,100,100);
    
    // Todo: Challenge 3 Traffic Light
    fill("yellow");
    ellipse(300,200,100,100);
    fill("green");
    ellipse(300,300,100,100);
}