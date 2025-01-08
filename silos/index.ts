// Set the initial fill levels for the silos. The fill levels are separated by commas.
const INITIAL_FILL = "3,7,8,3,10,2"

const SILO_MAX = 10; // Maximum fill for each silo
const CRICITAL_FILL = 8; // Critical fill level for each silo

// Store the fill values for the silos. Will be a value between 0 and SILO_MAX.
const silos: number[] = [];

// Constants for the layout
const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;

const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos

const BUTTON_SIZE = 20; // Size of the buttons ("add" and "remove")
const BUTTON_GAP = 15; // Gap between the bottom of the buttons and the top of the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the buttons


const TRIANGLE_GAP = BUTTON_SIZE / 4; // Gap between each Triangle Tip and the rect 
// <<< Add your arrays here

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    let num = 0;
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    if (INITIAL_FILL[i] === ",") {
      silos.push(num);
      num = 0;
    } else {
      num = num * 10 + parseInt(INITIAL_FILL[i].trim());
    }
  }

  silos.push(num);

  // <<< Add your code here
}
function draw() {
  background("black");

  // <<< Add your code here
  fill("yellow");
  //let filllevels = INITIAL_FILL.split(",")
  for (let i = 0; silos[i] <= SILO_MAX; i++) {
  let xcoordinate = i * (SILO_WIDTH + SILO_GAP);

    //Draw the filllevel numbers
    push();
    translate(SILO_WIDTH, SILOS_TOP + SILO_HEIGHT + SILO_WIDTH / 2);
    fill("yellow")
    textAlign(CENTER, CENTER);
    textSize(35);
    text(silos[i], xcoordinate, 0);
    pop();


    if (silos[i] < CRICITAL_FILL) {
      fill("green");
    } else { fill("red"); }

    //Draw the filllevels 
    push();
    translate(SILO_GAP, SILOS_TOP);
    rect(xcoordinate, SILO_HEIGHT - silos[i] * SILO_HEIGHT / SILO_MAX, SILO_WIDTH, silos[i] * SILO_HEIGHT / SILO_MAX);
    pop();

    //Draw the Silos
    push();
    translate(SILO_GAP, SILOS_TOP);
    noFill();
    stroke("yellow");
    strokeWeight(2);
    rect(xcoordinate, 0, SILO_WIDTH, SILO_HEIGHT);
    pop();

    //Draw the left buttons
    push();
    translate(SILO_GAP, BUTTON_TOP);
    fill("yellow");
    rect(xcoordinate, 0, BUTTON_SIZE, BUTTON_SIZE);
    fill("black");
    triangle(BUTTON_SIZE / 2 + xcoordinate, TRIANGLE_GAP, TRIANGLE_GAP + xcoordinate, BUTTON_SIZE - TRIANGLE_GAP, BUTTON_SIZE - TRIANGLE_GAP + xcoordinate, BUTTON_SIZE - TRIANGLE_GAP);
    pop();

    //draw the right buttons
    push();
    fill("yellow");
    translate(SILO_GAP + SILO_GAP + TRIANGLE_GAP, BUTTON_TOP);
    rect(xcoordinate, 0, BUTTON_SIZE, BUTTON_SIZE);
    fill("black");
    triangle(TRIANGLE_GAP + xcoordinate, TRIANGLE_GAP, BUTTON_SIZE / 2 + xcoordinate, BUTTON_SIZE - TRIANGLE_GAP, BUTTON_SIZE - TRIANGLE_GAP + xcoordinate, TRIANGLE_GAP);
    pop();

  }
}

function mouseClicked() {
  // <<< Add your code here
}