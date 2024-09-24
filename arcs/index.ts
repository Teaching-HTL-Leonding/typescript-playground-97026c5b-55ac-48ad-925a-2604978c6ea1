function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);

  stroke("black");
  strokeWeight(10);
  fill("yellow");

  circle(200, 200, 375);

  fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);


  noFill();
  arc(200, 250, 100, 50, 0, 180);

  noFill();
  arc(280, 230, 50, 50, 270, 0);

  arc(120, 230, 50, 50, 270, 135);
}
