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
    let j = 0;
    while(j < 8){
        fill("white");
        textAlign(CENTER,CENTER);
        textSize(20);
        j++;
            text(j, 25, height - SQUARE_SIZE * j - 25);

            let letter ="";
        switch(j){
            case 1: letter = "h"; break;
            case 2: letter = "g"; break;
            case 3: letter = "f"; break;
            case 4: letter = "e"; break;
            case 5: letter = "d"; break;
            case 6: letter = "c"; break;
            case 7: letter = "b"; break;
            case 8: letter = "a"; break;
        }
        text(letter, width - SQUARE_SIZE * j - 25, height - 25);
    }
    // <<< Add the code for drawing the chess board here
}