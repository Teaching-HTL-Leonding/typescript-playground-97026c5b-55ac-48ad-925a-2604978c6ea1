const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

  // <<< Draw the tree
  for(let i = TOP_MARGIN; i <= 500; i += i + i * HEIGHT_TO_WIDTH_RATIO){
   // translate(width / 2, i);
    for(let j = INITIAL_TRIANGLE_BASE_WIDTH; j <= 500; j += j + j * SIZE_INCREASE_BY_LAYER){
      triangle(width / 2 - j / 2, i, width / 2 + j / 2, i, width / 2, i - i / 2);
    }
  }
}
