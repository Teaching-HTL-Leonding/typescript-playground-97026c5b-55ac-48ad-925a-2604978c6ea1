function setup() {
    createCanvas(500, 500);
    background("lightgrey");

    //Roboterkopf
    strokeWeight(3);
    fill("grey");
    rect(100, 150, 300, 300);

    //Augen
    fill("black");
    circle(150, 220, 60);
    circle(350, 220, 60);

    //Antenne
    line(250, 150, 250, 50);
    fill("white");
    circle(250, 50, 40)

    //Mund
    rect(170, 330, 170, 40);

}
