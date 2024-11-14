function setup() {
    const SIZE = 400;  // Size of canvas
    const STRIPE_THICKNESS = 50; // Thickness of the stripes

    createCanvas(SIZE, SIZE);
    background("yellow");

    noStroke();

    let i = STRIPE_THICKNESS;
    while(i < SIZE){
        fill("lime");
        rect(i - i, 2 * i - 100, SIZE, STRIPE_THICKNESS);
        i += STRIPE_THICKNESS;
    }


    // <<< Add your code here
}
