// Constants for the game grid
const GRID_SIZE = 300;           // The size of the Tic Tac Toe grid
const CELL_SIZE = GRID_SIZE / 3; // The size of each cell in the grid
const LINE_THICKNESS = 3;        // Thickness of the grid lines

// Canvas size
const CANVAS_WIDTH = GRID_SIZE; // Width of the canvas
const CANVAS_HEIGHT = GRID_SIZE + 50; // Height of the canvas (extra space for messages)

// <<< Add variables here
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let cell5 = "";
let cell6 = "";
let cell7 = "";
let cell8 = "";
let cell9 = "";

function setup() {
    // Create the canvas with specified width and height
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

// Remember: The draw function is called repeatedly (once per frame) to update the display.
// In this exercise, we redraw the entire game board in each frame.
function draw() {
    background("grey");
    strokeWeight(LINE_THICKNESS);
    line(width / 3, 0, width / 3, height - 50);
    line( width * 2 / 3, 0, width * 2 / 3, height - 50);
    line(0, (height - 50) / 3, width, (height - 50) / 3);
    line(0, (height - 50) * 2 / 3, width, (height - 50) * 2 / 3);
 
    text("Player", 70, 335);
    fill("black")
    textSize(30);
    textAlign(LEFT, CENTER);
    text(player, 160, 335);
    text("turn", 185, 335)


    // <<< Add code here
}

let player = "";
//let player1 = X;
function mouseClicked() {
    let cell1 = player;
    if( player ===""){
        player = "O";
     }else if (player === "X"){ player = "O";}
     else {player = "X"}

     if(mouseX <= width / 3 && mouseY <= (height - 50) / 3){
       if(cell1 === ""){
        textAlign(CENTER, CENTER);
        textSize(40);
        text(cell1, width / 6, ( height - 50) / 6);}
        

     }
    
    // <<< Add code here
}
