
let num = 0;

function setup() {
  num = Math.floor(random(0, 16));


  createCanvas(400, 300);
  background("black");
  stroke("yellow");
  noFill();
  rect(width * 0.1, height / 3, width / 7, height / 3);
  rect(width * 0.325, height / 3, width / 7, height / 3);
  rect(width * 0.55, height / 3, width / 7, height / 3);
  rect(width * 0.75, height / 3, width / 7, height / 3);

  fill("yellow");
  textAlign(CENTER, CENTER);
  textSize(20);
  text(`${num} in binary ?`, width / 2, height / 8)


  text("0", width * 0.1, height / 3, width / 7, height / 3);
  text("0", width * 0.325, height / 3, width / 7, height / 3);
  text("0", width * 0.55, height / 3, width / 7, height / 3);
  text("0", width * 0.75, height / 3, width / 7, height / 3);

}
let stelle1 = 0;
let stelle2 = 0;
let stelle3 = 0;
let stelle4 = 0;

function mouseClicked() {


  textAlign(CENTER, CENTER);
  if (mouseX > width * 0.1 && mouseX < (width * 0.1 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.1, height / 3, width / 7, height / 3);
    fill("yellow");
    if (stelle1 === 0) {
      stelle1 = 1;
    } else {
      stelle1 = 0;
    }
    text(`${stelle1}`, width * 0.1, height / 3, width / 7, height / 3);
  } if (mouseX > width * 0.325 && mouseX < (width * 0.325 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.325, height / 3, width / 7, height / 3);
    fill("yellow");
    if (stelle2 === 0) {
      stelle2 = 1;
    } else {
      stelle2 = 0;
    }
    text(`${stelle2}`, width * 0.325, height / 3, width / 7, height / 3);
  } if (mouseX > width * 0.55 && mouseX < (width * 0.55 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.55, height / 3, width / 7, height / 3);
    fill("yellow");
    if (stelle3 === 0) {
      stelle3 = 1;
    } else {
      stelle3 = 0;
    }
    text(`${stelle3}`, width * 0.55, height / 3, width / 7, height / 3);
  } if (mouseX > width * 0.75 && mouseX < (width * 0.75 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.75, height / 3, width / 7, height / 3);
    fill("yellow");
    if (stelle4 === 0) {
      stelle4 = 1;
    } else {
      stelle4 = 0;
    }
    text(`${stelle4}`, width * 0.75, height / 3, width / 7, height / 3);
  }

  if (num === stelle1 * Math.pow(2, 3) + stelle2 * Math.pow(2, 2) + stelle3 * Math.pow(2, 1) + stelle4 * Math.pow(2, 0)) {
    fill("black");
    stroke("lightgreen");
    rect(width * 0.1, height / 3, width / 7, height / 3);
    rect(width * 0.325, height / 3, width / 7, height / 3);
    rect(width * 0.55, height / 3, width / 7, height / 3);
    rect(width * 0.75, height / 3, width / 7, height / 3);

    fill("lightgreen");
    text(`${stelle1}`, width * 0.1, height / 3, width / 7, height / 3);
    text(`${stelle2}`, width * 0.325, height / 3, width / 7, height / 3);
    text(`${stelle3}`, width * 0.55, height / 3, width / 7, height / 3);
    text(`${stelle4}`, width * 0.75, height / 3, width / 7, height / 3);
    text("Correct!", width / 2, height * 0.8);

  }

}
