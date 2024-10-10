function setup() {
    createCanvas(400, 200);
        background("black");
    noStroke();

    fill("orange")
    rect(0, 0, width  / 3, height * 0.75);

    fill("green");
    rect(width / 3, 0, width / 3, height * 0.75);

    fill("red");
    rect(width * (2 / 3), 0, width / 3, height * 0.75);

    // <<< Add your code here
}

function mouseClicked() {
    background("black");
    noStroke();

    fill("orange")
    rect(0, 0, width  / 3, height * 0.75);

    fill("green");
    rect(width / 3, 0, width / 3, height * 0.75);

    fill("red");
    rect(width * (2 / 3), 0, width / 3, height * 0.75);
    let message: string;

    if(mouseX < width / 3) {
        message = "Yellow";
    } else if (mouseX < width / 3 * 2) {
        message = "Green";
    } else {
        message = "Red";
    }

    fill("white");
    textSize(30);
    textAlign(CENTER, CENTER);
    text(`${message}`, width / 2 , height * 0.9);

}