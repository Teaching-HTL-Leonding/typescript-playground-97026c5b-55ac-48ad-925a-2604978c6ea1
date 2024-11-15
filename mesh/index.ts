const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  colorMode(RGB);

  let i = MARGIN;
  let color = 0;
  while(i <= SIZE - MARGIN){
    stroke(color, 240, 170);
    for(let j = MARGIN; j <= SIZE - MARGIN; j += MARGIN){
      line(MARGIN, i, SIZE - MARGIN, j);
    }
    i += MARGIN;
  }
  // <<< Add your code here
}