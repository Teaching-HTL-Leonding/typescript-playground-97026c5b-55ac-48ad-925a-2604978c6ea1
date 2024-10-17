let num = 0;

function setup() {
  num = Math.floor(random(0, 16));
  const rect1=( "width / 6, height / 3, width / 6, height /3");

  createCanvas(400, 300);
  background("black");
  stroke("yellow");
  noFill();
  rect(width / 8, height / 3, width / 7, height /3);
  rect(width / 2.95, height / 3, width / 7, height / 3);
  rect(width * 0.55, height / 3, width / 7, height / 3);
  rect(width * 0.75, height / 3, width / 7, height / 3);

  // <<< Add your code here
}

function mouseClicked() {
  // <<< Add your code here
}
