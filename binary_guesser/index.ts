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

  /*text("0",width * 0.1, height / 3, width / 7, height / 3);
  text("0",width * 0.325, height / 3, width / 7, height / 3);
  text("0",width * 0.55, height / 3, width / 7, height / 3);
  text("0",width * 0.75, height / 3, width / 7, height / 3);*/



  // <<< Add your code here
}
let stelle1 = 0;
let stelle2 = 0;
let stelle3 = 0;
let stelle4 = 0;

function mouseClicked() {
  textAlign(CENTER, CENTER);
  if(mouseX > width *0.1 && mouseX < (width * 0.1 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))){
  fill("black");
  rect(width * 0.1, height / 3, width / 7, height / 3);
  fill("yellow");
  text(`${stelle1}`,width * 0.1, height / 3, width / 7, height / 3);
  if(stelle1 === 0){
    stelle1 = 1;
  }else if(stelle1 === 1) {
    stelle1 = 0;
  }
 } if(mouseX > width *0.325 && mouseX < (width * 0.325 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
  text("1",width * 0.325, height / 3, width / 7, height / 3);
 } if(mouseX > width *0.55 && mouseX < (width * 0.55 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
  text("1",width * 0.55, height / 3, width / 7, height / 3);
 } if(mouseX > width *0.75 && mouseX < (width * 0.75 + width / 7) && mouseY > height / 3 && mouseY < (height / (2 / 3))) {
  text("1",width * 0.75, height / 3, width / 7, height / 3);
 }



 /*textAlign(CENTER, CENTER);
 text(`${message}`,width / 8.5, height / 3, width / 7, height /3);
 text(`${message}`,width / 3, height / 3, width / 7, height / 3);
 text(`${message}`,width * 0.55, height / 3, width / 7, height / 3);
 text(`${message}`,width * 0.75, height / 3, width / 7, height / 3);*/
}
