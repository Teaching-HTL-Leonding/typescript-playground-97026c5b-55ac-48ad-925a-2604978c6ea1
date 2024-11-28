function setup() {
    const SIZE = 400;
    const CIRCLE_DIAMETER = 50;

    createCanvas(SIZE, SIZE);
    background("black");

    strokeWeight(3);
    stroke("yellow");
    noFill();

    // Let's move the origin to 100/100
    translate(100, 100);
    circle(0, 0, CIRCLE_DIAMETER);

    // You can use the method `push` to save the current
    // drawing settings (fill settings, stroke settings).
    // `push` also saves the current origin.
     push(); // Saves the position of the origin (100/100)

    // Translate the origin 100px to the right
    // and draw a circle there.
    translate(100, 0);
    circle(0, 0, CIRCLE_DIAMETER);

    // Translate the origin 100px down
    // and draw a circle there.
    translate(0, 100);
    circle(0, 0, CIRCLE_DIAMETER);

    // ´pop´ restores the origin to the value 
    // it had when you called `push`.
    pop(); // Restores 

    // From the saved position we move down 100px and
    // draw a circle there.
    translate(0, 100);
    circle(0, 0, CIRCLE_DIAMETER);

    // **Note** that you can call `push` multiple times.
    // `pop` restores the drawing settings to the values
    // they had when you called `push` last.
}
