function setup() {
    createCanvas(300, 300);
    background("gold");
    }

function mouseClicked() {
    noStroke();
    fill("red");
    circle(mouseX, mouseY, 10);

    fill("gold");
    noStroke();

    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
}

function mouseMoved(){
    circle(mouseX, mouseY, )10
    fill("green");
    


}