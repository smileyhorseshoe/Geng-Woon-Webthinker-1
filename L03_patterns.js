let colorValue = 0;
posX = 50;
// g = 235
// b = 124
function setup() {
    createCanvas(200, 200);
    background(220);
   noLoop(); // Stops continuous drawing
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
// const diameter =50;
let xpos = 50;
let ypos = 50;
// for (let i = 0; i < 8; i++) {
//   fill(0,colorValue,0);
//   circle(xpos,ypos,diameter);
//   xpos = xpos + 60
//   ypos = ypos +60
//   colorValue = colorValue + 40
// }

  // Task 1: Colour Gradient

  // Task 2: Colour Loop
//  fill(colorValue%255,g%255,b%255);
//  circle(250,250,200);
//  colorValue++;
// g+g+2;
// b+b+2;
  // Task 3: Colour Alternate
// fill(  (colorValue%2) *255);
// circle(posX,250,100)
// colorValue++;
// posX=posX+105
  // Task 4: Grid of Circles
// C1

// for (let i = 0; i < 8; i++) {
//     noStroke()
//   fill(0)
//   if (i %2===0) fill(255);
//   rect(xpos,50,50,50);
//   xpos = xpos + 60;
// }
noStroke();
fill("white")
rect(0,50,width,100);
fill("red")
circle(width / 2, height / 2, 50);

}
