let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  noFill();
  stroke("yellow");
  rect(width / 8, height / 3, width / 8, height / 4);
  rect(width * 2.5 / 8, height / 3, width / 8, height / 4);
  rect(width / 2, height / 3, width / 8, height / 4);
  rect(width * 5.5 / 8, height / 3, width / 8, height / 4);

  fill("yellow");
  textSize(30);
  textAlign(CENTER);
  text(`${num} in binary ?`, width / 2, height / 5);

  textAlign(CENTER, CENTER);
  textSize(20);
  text(stelle1, width / 5, height * 6 / 12);
  // <<< Add your code here
}
let stelle1 = "0";
let stelle2 
let stelle3
let stelle4
function mouseClicked() {
  if(mouseX >= width / 8 && mouseX <= width / 4 && mouseY >= height / 3 && mouseY <= height * 2 / 6){
    if(stelle1 === ""){
      stelle1 = "0";
    } else {stelle1 = "1";}
  }
  
}
