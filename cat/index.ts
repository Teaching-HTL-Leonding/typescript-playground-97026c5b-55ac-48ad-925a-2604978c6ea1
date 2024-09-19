function setup() {
    createCanvas(500, 500);
    background("#00FFFF");

    fill("lightgrey"); //Kopf
    stroke("black")
    circle(250, 270, 270);

    fill("black"); //Auge Links
    circle(210, 250, 35);

    fill("black"); //Auge Rechts
    circle(290, 250, 35);

    fill("pink"); //Nase
    stroke("black")
    strokeWeight(3);
    triangle(230, 280, 250, 300, 270, 280);

    line(250, 300, 250, 330);
    line(250, 330, 285, 345);
    line(250, 330, 215, 345);
    line(285, 345, 320, 335);
    

    
    




}
