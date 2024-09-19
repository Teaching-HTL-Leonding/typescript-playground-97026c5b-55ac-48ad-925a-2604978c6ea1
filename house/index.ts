function setup() {
    createCanvas(500, 500);
    background("#E0FFFF");

    fill("#FF4500"); //Wand
    rect(90, 280, 200, 190);

    fill("#FFD700"); //Tür
    rect(165, 400, 50, 70);

    fill("#8B4513"); //Dach
    triangle(70, 280, 310, 280, 190, 160);

    fill("brown"); //Stamm
    rect(380, 280, 35, 190);

    fill("green"); //Blätter
    circle(395, 270, 80);
    circle(420, 300, 80);
    circle(370, 300, 80);

}
