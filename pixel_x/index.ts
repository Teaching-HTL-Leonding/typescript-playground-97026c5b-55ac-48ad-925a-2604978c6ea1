function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");


    noStroke();

    let i = GRID;
    while(i < SIZE - GRID){
        fill("yellow");
        rect(i, i, 25, 25)
        i += GRID;     
    }
    while()

    // <<< Add your code here
}
