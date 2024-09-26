function setup() {
  createCanvas(200, 200);

}

function mouseMoved() {

  background("lightblue");
  noFill();
  stroke("black");
  strokeWeight(1);
  circle(mouseX, mouseY, 40);
  circle(mouseX, mouseY, 20);
  line(mouseX - 30, mouseY, mouseX + 30, mouseY);
  line(mouseX, mouseY - 30, mouseX, mouseY + 30);


  // Add your code here
}
