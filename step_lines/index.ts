function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(0.25);
    stroke("lightgray");

    // Draw vertical lines
    let i = 0;
    while (i < SIZE) {
        line(i, 0, i, SIZE);
        i += 25;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        stroke("yellow");
        strokeWeight(2);
        line(0, i, SIZE, i);
        i += GRID;
    }
    while(i < SIZE)

    strokeWeight(2);

    // Draw left part of the lines
    stroke("yellow");
    // <<< Write your code here

    // Draw right part of the lines
    stroke("red");
    // <<< Write your code here
}
