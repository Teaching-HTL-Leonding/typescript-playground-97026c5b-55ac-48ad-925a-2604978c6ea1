function setup() {
    createCanvas(500, 500);
    background("#00FFFF");

    //Kopf
    strokeWeight(3);
    fill("lightgrey"); 
    stroke("black")
    circle(250, 270, 270);

    //Auge Links
    fill("black"); 
    circle(210, 250, 35);

    //Auge Rechts
    fill("black"); 
    circle(290, 250, 35);

    //Nase
    fill("pink"); 
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
    triangle(145, 175, 200, 130, 160, 70);
    triangle(300, 130, 355, 175, 340, 70);



    
    




}
