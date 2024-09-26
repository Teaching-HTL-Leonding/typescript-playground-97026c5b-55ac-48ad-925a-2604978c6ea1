function setup() {
  createCanvas(400, 400);
  background("lightblue");

}

function mouseMoved() {
  let position1 = round(mouseX / 40) * 40;
  let position2 = round(mouseY / 40) * 40;
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

  stroke("white");
  strokeWeight(7);
  line(position1 - 10, position2, position1 + 10, position2);
  line(position1, position2 + 10, position1, position2 - 10);

  noStroke();
  fill("lightblue");
  rect(0,350, 100, 50);
  fill("black");
  textSize(20);
  text(` ${position1}/${position2}`, 5, height - 5);


  // Add your code here
}
