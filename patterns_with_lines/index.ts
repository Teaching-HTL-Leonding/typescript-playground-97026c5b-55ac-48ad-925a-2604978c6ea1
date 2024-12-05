function setup() {
    createCanvas(601, 301);
    background("black");


    resetMatrix();
    fill("aqua");
    noStroke();



    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);

}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);
    noStroke();
    textSize(17);
    textAlign(CENTER, CENTER);
    fill("white");
    let mousexnumber = Math.round(mouseX / 601 * 100);
    text(`${mouseX} of 601 = ${mousexnumber}%`, 70, 295);

    noFill();
    stroke("aqua");

    // <<< Add your code here
    let HEIGHT_OF_LINE1 = 0;
    let HEIGHT_OF_LINE2 = 5;
    let color1 = 0;
    for (let x = 0; x < 601; x++) {
        colorMode(HSB);
        stroke(color1, 100, 100);
        for (let y = 0; y < 27; y += 1) {
            line(0, HEIGHT_OF_LINE1, 10, HEIGHT_OF_LINE2);
            HEIGHT_OF_LINE1 += 10;
            line(10, HEIGHT_OF_LINE2, 0, HEIGHT_OF_LINE1);
            HEIGHT_OF_LINE2 += 10;
            color1 = (color1 + 0.23) % 360;
        }
        translate(10, 0);
        HEIGHT_OF_LINE1 = 0;
        HEIGHT_OF_LINE2 = 5;
    }
    
}
