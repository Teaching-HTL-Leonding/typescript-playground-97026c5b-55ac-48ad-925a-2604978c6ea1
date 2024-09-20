function setup() {
    createCanvas(300, 300);
    background("gold");
    }

function mouseClicked() {
    noStroke();
    fill("black");
    circle(mouseX, mouseY, 10);

    fill("gold");
    noStroke();

    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);
}

function mouseMoved(){
    noStroke();
    fill("green");
    circle(mouseX, mouseY, 10)
    
    fill("black");
     fill("gold");
    noStroke();

    rect(width / 2, height - 20, width , height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`,width - 100, height - 5);
}