function setup() {
    createCanvas(600, 300);
    background("black");
    noStroke();

    // <<< Add your code here

    fill("orange");
    rect(0,0, width / 2, height / 2);

    fill("green");
    rect(width / 2, 0, width / 2, height / 2);

    fill("blue");
    rect(0, height / 2, width / 2, height / 2);

    fill("red");
    rect(width / 2, height / 2, width / 2, height / 2);

    fill("black");
    rect(width / 4, height / 2 * 0.75, width / 2, height / 4);
}

function mouseClicked() {
    background("black");
    noStroke();

    fill("orange");
    rect(0,0, width / 2, height / 2);

    fill("green");
    rect(width / 2, 0, width / 2, height / 2);

    fill("blue");
    rect(0, height / 2, width / 2, height / 2);

    fill("red");
    rect(width / 2, height / 2, width / 2, height / 2);

    fill("black");
    rect(width / 4, height / 2 * 0.75, width / 2, height / 4);

    let message: string;

    if(mouseX < width / 2 && mouseY < height / 2) {
        message = "Yellow";

    } else if(mouseX > width / 2 && mouseY < height / 2) {
        message = "Green";

    } else if( mouseX < width /2 && mouseY > height / 2) {
        message = "Blue";
    } else{
        message = "Red";
    }
    
    fill("white");
    textAlign(CENTER)
    textSize(50);
    text(`${message}`, width / 2, height / 2 + 20);


}

// <<< Add the function `moveClicked` with the required code here
