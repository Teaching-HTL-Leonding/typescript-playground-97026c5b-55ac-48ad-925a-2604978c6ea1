const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
    let i = MARGIN;           
    while (i < SIZE) {  
        stroke("yellow");     
        line(i, 0, i, SIZE);
        stroke("green");
        line(0, i, SIZE, i);
        i += MARGIN;           
    }
}

function mouseMoved() {
  background("black"); 
  strokeWeight(2);
      let i = MARGIN;           
    while (i < SIZE) {  
        stroke("green");     
        line(i, 0, mouseX, mouseY)
        line( i, SIZE, mouseX, mouseY);
        stroke("yellow");
        line(0, i, mouseX, mouseY);
        line(SIZE, i, mouseX, mouseY);
        i += MARGIN;           
    }
}

  // <<< Add your code here

