// Configuration for the number of lines, and the range of colors The format is:
// <number of lines>;<min hue>-<max hue>
//
// "number of lines" is the number of lines to draw, can be between 1 and 30
// "min hue" is the minimum hue (HSB color space), can be between 0 and 360
// "max hue" is the maximum hue (HSB color space), can be between 0 and 360
const CONFIGURATION = "5;0-360";

const lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];       // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

lineStartDx.push(random(0, 5));
lineStartDy.push(random(0, 5));
lineEndDx.push(random(0, 5));
lineEndDy.push(random(0, 5));

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;      
       // Upper bound of random hue value


function setup() {
    
    createCanvas(500, 500);
    colorMode(HSB);

    // Set random start and end position
    lineStartX = random(50, 450);
    lineStartY = random(50, 450);
    lineEndX = random(50, 450);
    lineEndY = random(50, 450);

    // Set random movement
    lineStartDx = random(0, 5);
    lineStartDy = random(0, 5);
    lineEndDx = random(0, 5);
    lineEndDy = random(0, 5);

    // Set random color
    lineColor = random(minColor, maxColor);
    }
}

function draw() {

    for(let i = 0; i <= 10; i ++){
    background("black");

    push();
    // Draw current line
    stroke(lineColor[i], 100, 100);
    strokeWeight(2);
    line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

    // Move start and end point
    lineStartX += lineStartDx;
    lineStartY += lineStartDy;
    lineEndX += lineEndDx;
    lineEndY += lineEndDy;

    // Reverse direction when edge has been reached
    if (lineStartX < 0 || lineStartX > width) {
        lineStartDx = -lineStartDx;
    }
    if (lineStartY < 0 || lineStartY > height) {
        lineStartDy = -lineStartDy;
    }

    if (lineEndX < 0 || lineEndX > width) {
        lineEndDx = -lineEndDx;
    }
    if (lineEndY < 0 || lineEndY > height) {
        lineEndDy = -lineEndDy;
    }

    pop();
    }
}
