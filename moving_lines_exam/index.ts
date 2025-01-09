//Configuration for the number of lines, and the range of colors The format is:
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

let startlines: number = 4;

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let colorrange: number[] = [];
let minlines: number[] = [];

// Upper bound of random hue value
const plus = "+";
const minus = "-";

const BUTTON_XY = 5;
const BUTTON_WIDTH = 50;
const BUTTON_GAP = 10;
let mincolor = 0;
let maxcolor = 0;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    let num = 0;
    for (let i = 0; i < CONFIGURATION.length; i++) {
        if (CONFIGURATION[i] === ";") {
            startlines = num;
            num = 0;
        } else if (CONFIGURATION[i] === "-") {
            mincolor = num
            num = 0;
        } else {
            num = num * 10 + parseInt(CONFIGURATION[i]);
        }
    }
    maxcolor = num;
    for (let i = 0; i < startlines; i++) {

        // Set random start and end position
        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        // Set random color
        lineColor.push(random(mincolor, maxcolor));
    }

}

function draw() {

    background("black");
    for (let i = 0; i < startlines; i++) {

        push();
        // Draw current line
        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

        // Move start and end point
        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        // Reverse direction when edge has been reached
        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDx[i] = -lineStartDx[i];
        }
        if (lineStartY[i] < 0 || lineStartY[i] > height) {
            lineStartDy[i] = -lineStartDy[i];
        }

        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDx[i] = -lineEndDx[i];
        }
        if (lineEndY[i] < 0 || lineEndY[i] > height) {
            lineEndDy[i] = -lineEndDy[i];
        }

        pop();
    }
    // draw the buttons
    fill("white");
    rect(BUTTON_XY, BUTTON_XY, BUTTON_WIDTH, BUTTON_WIDTH);
    rect(BUTTON_WIDTH + BUTTON_GAP, BUTTON_XY, BUTTON_WIDTH, BUTTON_WIDTH);
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(35);
    text(plus, BUTTON_XY + BUTTON_WIDTH / 2, BUTTON_XY + BUTTON_WIDTH / 2);
    text(minus, BUTTON_GAP + BUTTON_WIDTH + BUTTON_WIDTH / 2, BUTTON_XY + BUTTON_WIDTH / 2);
}

function mouseClicked() {
    if (mouseX >= BUTTON_XY && mouseX <= BUTTON_XY + BUTTON_WIDTH
        && mouseY >= BUTTON_XY && mouseY <= BUTTON_XY + BUTTON_WIDTH) {
        startlines = startlines + 1;

        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        lineColor.push(random(mincolor, maxcolor));
    }
    if (mouseX >= BUTTON_WIDTH + BUTTON_GAP && mouseX <= BUTTON_WIDTH + BUTTON_GAP + BUTTON_WIDTH
        && mouseY >= BUTTON_XY && mouseY <= BUTTON_XY + BUTTON_WIDTH && startlines > 1) {

        startlines = startlines - 1;

        lineStartX.splice(startlines, 1);
        lineStartY.splice(startlines, 1);
        lineEndX.splice(startlines, 1);
        lineEndY.splice(startlines, 1);

        lineStartDx.splice(startlines, 1);
        lineStartDy.splice(startlines, 1);
        lineEndDx.slice(startlines, 1);
        lineEndDy.splice(startlines, 1);
    }
}

