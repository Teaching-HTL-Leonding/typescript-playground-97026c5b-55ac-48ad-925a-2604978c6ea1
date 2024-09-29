function setup() {
  createCanvas(400, 400);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically
  const eyed = headWidth * 0.2;
  const viertelkopfx = headWidth * 0.75;
  const dreiviertelkopfx = headWidth * 1.25;
  const viertelkopfy = headHeight * 0.75;
  const mundY = headHeight * 1.2;
  const mundlaenge = headWidth * 0.5;
  const mundhoehe = headHeight * 0.1;
  const antennenstartY = headHeight / 2;
  const antennenendeY = antennenstartY * 0.5;
  const antennenkopfd = eyed * 0.5;


  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);

  fill("black");
  circle(viertelkopfx, viertelkopfy, eyed);//auge links
  circle(dreiviertelkopfx, viertelkopfy, eyed);//auge rechts
  
  fill("white");
  rect(viertelkopfx, mundY, mundlaenge, mundhoehe); // Mund

  line(headWidth, antennenstartY, headWidth, antennenendeY);

  circle(headWidth, antennenendeY, antennenkopfd);

  // Add your code here
}
