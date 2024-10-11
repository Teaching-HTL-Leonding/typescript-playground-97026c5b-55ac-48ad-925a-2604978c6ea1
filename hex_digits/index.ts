function setup() {
  createCanvas(400, 300);
  background("black");
  const num = Math.floor(random(0, 1_000_000));


  // Add the necessary code here
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  stroke("Yellow");
  noFill();
  rect(width / 6, height / 3, width / 6, height / 3);
  rect(width / 2.5, height / 3, width / 6, height / 3);
  rect(width / 3, height / 3, width / 6, height / 3);
}