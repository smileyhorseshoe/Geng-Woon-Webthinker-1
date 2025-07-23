let colorValue = 0;
posX = 50;
// g = 235
// b = 124
function setup() {
    createCanvas(1200, 600);
    background(220);
  //  noLoop(); // Stops continuous drawing
  }
  
function draw() {
//   let diameter = 80;
//   let x = 75;
//   // Recap 1: Repeating Circles
// for (let i=1; i<10; i++) {
//   // fill(i * 50)
//   fill(i*50,235,135)
//  circle(x,200,diameter);
//  x = x + diameter + 10;





  // Task 1: Colour Gradient

  // Task 2: Colour Loop
//  fill(colorValue%255,g%255,b%255);
//  circle(250,250,200);
//  colorValue++;
// g+g+2;
// b+b+2;
  // Task 3: Colour Alternate
fill(  (colorValue%2) *255);
circle(posX,250,100)
colorValue++;
posX=posX+105
  // Task 4: Grid of Circles
// C1


}
