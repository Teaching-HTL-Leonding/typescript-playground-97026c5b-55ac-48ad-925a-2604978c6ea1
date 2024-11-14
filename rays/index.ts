const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
    let i = GRID;           
    while (i < SIZE) {  
        stroke("yellow");     
        line(i, 0, i, SIZE);
        stroke("green");
        line(0, i, SIZE, i);
        i += GRID;           
    }
}

function mouseMoved() {
  background("black");
  
  strokeWeight(2);
  // <<< Add your code here
}
