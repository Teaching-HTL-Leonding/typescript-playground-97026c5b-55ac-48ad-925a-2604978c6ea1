function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    for(let i = SQUARE_SIZE; i < SIZE - SQUARE_SIZE; i += SQUARE_SIZE){
        fill("beige");
        rect(i, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 2 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 2 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 4 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 4 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 6 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 6 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        fill("brown");
        rect(i + SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 3 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(SIZE - SQUARE_SIZE - i, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 3 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(i + 5 * SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);
        rect(i, i + 5 * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        fill("black");
        rect(i,height - SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        rect(width - SQUARE_SIZE, i, SQUARE_SIZE, SQUARE_SIZE);

    }
    
    for(let j = 1; j < 9; j += 1){
        fill("white");
        textAlign(CENTER,CENTER);
        textSize(20);
        for(let k = SQUARE_SIZE + 25; k < SIZE - SQUARE_SIZE; k += SQUARE_SIZE){
            text(j, 25, k);
        }
    }
    // <<< Add the code for drawing the chess board here
}