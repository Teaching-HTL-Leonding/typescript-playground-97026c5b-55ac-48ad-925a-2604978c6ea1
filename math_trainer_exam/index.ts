// This program generates a simple math quiz in a graphical window, where the user selects the correct result
// of a randomly generated arithmetic operation.

// <<< TODO: Declare your GLOBAL variables here
let randomnumber1 = 0;
let randomnumber2 = 0;
let operator = 0;
let randomoperand1 = 0;
let randomoperand2 = 0;
let message: string = "";
let truenumber = 0;

// setup function runs once and sets up the quiz elements on the canvas
function setup() {
    createCanvas(400, 400);
    background("black");

    stroke("yellow");
    noFill();

    rect(width / 8, height * 0.4, width / 5, height / 5);
    rect(width * 3.25 / 8, height * 0.4, width / 5, height / 5);
    rect(width * 5.5 / 8, height * 0.4, width / 5, height / 5);

    let randomnumber1 = Math.floor(random(1, 101));
    let randomnumber2 = Math.floor(random(1, 101));
    let randomnumber3 = Math.floor(random(1, 101));
    let position = Math.floor(random(1, 4));
    let operator = Math.floor(random(1, 4));
    let randomoperand1 = Math.floor(random(1, 101));
    let randomoperand2 = Math.floor(random(1, 101));


    if (message === "+" || message === "-") {
        randomoperand1 = Math.floor(random(1, 101));
        randomoperand2 = Math.floor(random(1, 101))
    } else {
        randomoperand1 = Math.floor(random(1, 11));
        randomoperand2 = Math.floor(random(1, 11));
    }
    textSize(40);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(randomnumber1, width / 5, height / 2);
    text(randomnumber2, width / 2, height / 2);
    text(randomnumber3, width * 0.8, height / 2);

    if (position === 1) {
        truenumber = randomnumber1;
    } else if (position === 2) {
        truenumber = randomnumber2;
    } else { truenumber = randomnumber3; }

    if (operator === 1) {
        message = "+";
    } else if (operator === 2) {
        message = "-";
    } else if (operator === 3) {
        message = "*";
    }
    if (message === "+") {
        truenumber = randomoperand1 + randomoperand2;
    } else if (message === "-") {
        truenumber = randomoperand1 - randomoperand2;
    } else if (message === "*") {
        truenumber = randomoperand1 * randomoperand2;
    }


    text(`${randomoperand1} ${message} ${randomoperand2}`, width / 2, height / 5);


}

// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {
    if (mouseX < width / 8 && mouseX < width * 1 / 5 * 1 / 8 && mouseY < height * 0.4 && mouseY < height * 0.6) {
        fill("yelllow");
        text("1", width / 2, height * 0.8)
    }

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
