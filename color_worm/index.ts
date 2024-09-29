function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    background(0); // Another way of writing black
    noStroke();
}

//GLOBAL variabke "color_hue-".  Althogh TypeScript does not require
// specifying a data type, you MUST ALWAYS do it in this course
// for practicing purposes!
//          +-------Data type ( e.g. number, string, boolea)
//          v
let color_hue: number = 0;
function mouseMoved() {
    // Draw a circle with the current hue
    fill(color_hue, 100, 100);
    circle(mouseX, mouseY, 40);

    // Note the ude of the % operator (modulo)
    color_hue = (color_hue + 5) % 360;
}
