function setup() {
    createCanvas(500, 500);
    background("#00FFFF");

    strokeWeight(3);
    fill("lightgrey"); //Kopf
    stroke("black")
    circle(250, 270, 270);

    fill("black"); //Auge Links
    circle(210, 250, 35);

    fill("black"); //Auge Rechts
    circle(290, 250, 35);

    fill("pink"); //Nase
    stroke("black")
    triangle(230, 280, 250, 300, 270, 280);

    //Bart
    line(250, 300, 250, 330);
    line(250, 330, 285, 345);
    line(250, 330, 215, 345);
    line(285, 345, 320, 335);
    line(215, 345, 180, 335);
    line(180, 325, 233, 325);
    line(267, 325, 320, 325);
    line(180, 300, 233, 315);
    line(267, 315, 320, 300);

    //Ohren
    fill("lightgrey");
    triangle(165, 155, 220, 130, 190, 70);
    triangle(275, 130, 335, 155, 305, 70);



    
    




}
