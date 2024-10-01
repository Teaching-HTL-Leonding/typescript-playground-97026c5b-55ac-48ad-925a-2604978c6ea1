function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

let position_clicks: string = "0/0";
function mouseClicked() {
  background("lightblue");

  noFill();
  fill("cyan");
  noStroke();
  circle(mouseX, mouseY, 50);

  position_clicks = `${position_clicks}, ${mouseX},/${mouseY}`;

  fill("lightblue")
  rect(0, 0, width, 50);

  fill("black");
  textSize(20);
  text(position_clicks, 10, 10, width - 10, height - 10);



  }