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
    text(`${stelle1}`, width * 0.1, height / 3, width / 7, height / 3);
    if (stelle1 === 0) {
      stelle1 = 1;
    } else if (stelle1 === 1) {
      stelle1 = 0;
    }
  } if (mouseX > width * 0.325 && mouseX < (width * 0.325 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.325, height / 3, width / 7, height / 3);
    fill("yellow");
    text(`${stelle2}`, width * 0.325, height / 3, width / 7, height / 3);
    if (stelle2 === 0) {
      stelle2 = 1;
    } else if (stelle2 === 1) {
      stelle2 = 0;
    }
  } if (mouseX > width * 0.55 && mouseX < (width * 0.55 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.55, height / 3, width / 7, height / 3);
    fill("yellow");
    text(`${stelle3}`, width * 0.55, height / 3, width / 7, height / 3);
    if (stelle3 === 0) {
      stelle3 = 1;
    } else if (stelle3 === 1) {
      stelle3 = 0;
    }
  } if (mouseX > width * 0.75 && mouseX < (width * 0.75 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
    fill("black");
    rect(width * 0.75, height / 3, width / 7, height / 3);
    fill("yellow");
    text(`${stelle4}`, width * 0.75, height / 3, width / 7, height / 3);
    if (stelle4 === 0) {
      stelle4 = 1;
    } else if (stelle4 === 1) {
      stelle4 = 0;
    }
    if(stelle1)
  }

}
