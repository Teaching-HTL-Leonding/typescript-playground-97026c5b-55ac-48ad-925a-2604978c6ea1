function setup() {
  createCanvas(400, 300);
  background("black");
  const stelle1 = Math.floor(random(1, 4095));
  const stelle2 = stelle1 / 16;
  const stelle3 = stelle2 / 16;

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  textSize(15);
  text(stelle1, width / 2, height - 20);

  stroke("Yellow");
  noFill();
  rect(width / 6, height / 3, width / 6, height / 3);
  rect(width / 2.45, height / 3, width / 6, height / 3);
  rect(width * 0.65, height / 3, width / 6, height / 3);

  if (stelle1 % 16 < 10) {
    text(`${stelle1 % 16}`, width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 10) {
    text("A", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 11) {
    text("B", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 12) {
    text("C", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 13) {
    text("D", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 14) {
    text("E", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle1 % 16 === 15) {
    text("F", width * 0.65, height / 3, width / 6, height / 3);
  }
  if (stelle2 % 16 < 10) {
    text(`${Math.floor(stelle2 % 16)}`, width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2 % 16) === 10) {
    text("A", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2 % 16) === 11) {
    text("B", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2 % 16) === 12) {
    text("C", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2 % 16) === 13) {
    text("D", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2 % 16) === 14) {
    text("E", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle2) % 16 === 15) {
    text("F", width / 2.45, height / 3, width / 6, height / 3);
  }
  if (stelle3 % 16 < 10) {
    text(`${Math.floor(stelle3 % 16)}`, width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 10) {
    text("A", width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 11) {
    text("B", width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 12) {
    text("C", width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 13) {
    text("D", width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 14) {
    text("E", width / 6, height / 3, width / 6, height / 3);
  }
  if (Math.floor(stelle3 % 16) === 15) {
    text("F", width / 6, height / 3, width / 6, height / 3);
  }
}