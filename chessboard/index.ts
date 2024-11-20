function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for(let i = SQUARE_SIZE; i < SIZE - 2 * SQUARE_SIZE; i += SQUARE_SIZE){
        fill("white");
        rect(i, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 2 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 2 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 4 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 4 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 6 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 6 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        fill("red");
        rect(i + SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 3 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(SIZE - SQUARE_SIZE - i, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 3 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 5 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 5 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
    }
    

    // <<< Add the code for drawing the chess board here
}
