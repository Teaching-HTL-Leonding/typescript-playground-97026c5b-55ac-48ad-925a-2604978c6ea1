// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomnumber1 = 0;
let randomnumber2 = 0;
let operator = 0;

// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    createCanvas(400, 400);
    background("black");

    let randomnumber1 = Math.floor(random(1, 101));
    let randomnumber2 = Math.floor(random(1, 101));
    let randomnumber3 = Math.floor(random(1, 101));
    let truenumber = Math.floor(random(1, 4));
    let operator = "Math.floor(random(1, 4))";

    //if(operator === 1){
    //   operator = randomnumber1 + randomnumber2;
    //} else if (operator === 2){
    //    operator =  randomnumber1 - randomnumber2;
    // } else {operator = randomnumber1 * randomnumber2;}
    textSize(40);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(randomnumber1, width / 5, height / 2);
    text(randomnumber2, width / 2, height / 2);
    text(randomnumber3, width * 0.8, height / 2);

    if (truenumber === 1) {
        truenumber = randomnumber1;
    } else if (truenumber === 2) {
        truenumber = randomnumber2;
    } else { truenumber = randomnumber3 }

    if(operator === "1"){
        operator = "+";
    }

    text(truenumber, width / 2, height / 5)
    // <<< TODO: Add your code here
}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    // <<< TODO: Add your code here
}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
