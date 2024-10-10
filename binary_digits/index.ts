function setup() {
  createCanvas(500, 500);
  background("black");
  const num = Math.floor(random(0, 64));

  // Add the necessary code here

  stroke("yellow");
  noFill();
  rect(width / 10.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 7, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 8.5, height / 3, width / 10, height / 4);


  textAlign(CENTER, CENTER);
  text(`${Math.floor((num / 32) % 2)}`, width / 10.5, height / 3, width / 10, height / 4);
  text(`${Math.floor((num / 16) % 2)}`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`${Math.floor((num / 8) % 2)}`, width / 10.5 * 4, height / 3, width / 10, height / 4);
  text(`${Math.floor((num / 4) % 2)}`, width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  text(`${Math.floor((num / 2) % 2)}`, width / 10.5 * 7, height / 3, width / 10, height / 4);
  text(`${num % 2}`, width / 10.5 * 8.5, height / 3, width / 10, height / 4);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}