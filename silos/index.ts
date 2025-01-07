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

// <<< Add your arrays here

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  // <<< Add your code here
}
function draw() {
  background("black");

  // <<< Add your code here
  fill("yellow");
  textAlign(CENTER, CENTER);
  textSize(35);
      let filllevels = INITIAL_FILL.split(",")
    for (let i = 0; parseInt(filllevels[i]) <= SILO_MAX; i++) {
      text(filllevels[i], width / 7 + 70 * i, height * 3 / 4);
      if(i <)
      switch(i){
        case 1:
      }
      
  }
      noFill();
      stroke("yellow");
      rect(SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
      rect(4 * SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
      rect(7 * SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
      rect(10 * SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
      rect(13 * SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
      rect(width - 3 * SILO_GAP, SILOS_TOP, SILO_WIDTH, SILO_HEIGHT);
}

function mouseClicked() {
  // <<< Add your code here
}