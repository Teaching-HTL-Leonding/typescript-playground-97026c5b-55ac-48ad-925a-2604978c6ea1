function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    stroke("yellow");
    strokeWeight(2);
    i = GRID;
    while(i < SIZE){
        line(GRID, i, GRID * (i / GRID), i);
        i += GRID;
    }

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    while(i < SIZE){
        line(GRID, i, GRID * (i / GRID), i);
        i += GRID;
    }
    // <<< Write your code here

    // Draw right part of the lines
    stroke("red");
    // <<< Write your code here
}
