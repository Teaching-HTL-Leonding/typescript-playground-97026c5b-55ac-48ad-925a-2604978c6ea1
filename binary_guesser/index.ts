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

  //textAlign(CENTER, CENTER);
  text(stelle1, width * 1.5 / 8, height * 6 / 12);
  text(stelle2, width * 3 / 8, height / 2);
  text(stelle3, width * 4.5 / 8, height / 2);
  text(stelle4, width * 6 / 8, height / 2);
  // <<< Add your code here
}
let stelle1 = 0;
let stelle2 = 0;
let stelle3 = 0;
let stelle4 = 0;
function mouseClicked() {
  if(mouseX >= width / 8 && mouseX <= width / 4 && mouseY >= height / 3 && mouseY <= height * 3 / 6){
    if(stelle1 === 1){
      stelle1 = 0;
    } else {stelle1 = 1;}
    fill("black");
    rect(width / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    text(stelle1, width * 1.5 / 8, height * 6 / 12);
  }
  if(mouseX >= width * 2.5 / 8 && mouseX <= width * 3.5 / 8 && mouseY >= height / 3 && mouseY <= height * 3 / 6){
    if(stelle2 === 1){
      stelle2 = 0;
    } else{stelle2 = 1;}
    fill("black");
    rect(width * 2.5 / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    text(stelle2, width * 3 / 8, height / 2);
  } 
  if(mouseX >= width / 2 && mouseX <= width * 5 / 8 && mouseY >= height / 3 && mouseY <= height * 3 / 6){
    if(stelle3 === 1){
      stelle3 = 0;
    }else{stelle3 = 1;}
    fill("black");
    rect(width / 2, height / 3, width / 8, height / 4);
    fill("yellow");
    text(stelle3, width * 4.5 / 8, height / 2);
  }
  if(mouseX >= width * 5.5 / 8 && mouseX <= width * 7 / 8 && mouseY >= height / 3 && mouseY <= height * 3 / 6){
    if(stelle4 === 1){
      stelle4 = 0;
    } else{stelle4 = 1;}
    fill("black");
    rect(width * 5.5 / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    text(stelle4, width * 6 / 8, height / 2);
  }
  let result = "";
  if(stelle1 === Math.pow(2,3) && stelle2 === Math.pow(2,2) && stelle3 === Math.pow(2,1) && stelle4 === Math.pow(2,0)){
    result = "Correct!";
  }
    text(result, width / 2, height * 3 / 4);
}
