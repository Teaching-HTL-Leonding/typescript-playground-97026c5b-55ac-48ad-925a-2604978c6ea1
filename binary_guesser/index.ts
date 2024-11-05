let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  noFill();
  stroke("yellow")
  rect(width / 8, height / 3, width / 8, height / 4);
  rect(width * 2.5 / 8, height / 3, width / 8, height / 4);
  rect(width / 2, height / 3, width / 8, height / 4);
  rect(width * 5.5 / 8, height / 3, width / 8, height / 4);


  fill("yellow");
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${num} in binary?`, width / 2, height / 5);

  text("0", width * 1.5 / 8, height * 0.475);
  text("0", width * 3 / 8, height * 0.475);
  text("0", width * 4.5 / 8, height * 0.475);
  text("0", width * 6 / 8, height * 0.475);

  // <<< Add your code here
}

  let nmb1: number = 0
  let nmb2: number = 0;
  let nmb3: number = 0;
  let nmb4: number = 0;
function mouseClicked() {
  textAlign(CENTER, CENTER);
  if(mouseX >= width / 8 && mouseX <= width / 4 && mouseY >= height / 3 && mouseY <= height * 2 / 3){
    fill("black");
    rect(width / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    if(nmb1 ===0){
      nmb1 = 1;
    }
    else{nmb1 = 0;}
  
    text(`${nmb1}`, width * 1.5 / 8, height * 0.475)
  } 
  if(mouseX >= width * 2.5 / 8 && mouseX <= width * 3.5 / 8 && mouseY >= height / 3 && mouseY <= height * 2 / 3){
    fill("black");
    rect(width * 2.5 / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    if(nmb2 === 0){nmb2 = 1;}
    else{nmb2 = 0;}
    text(`${nmb2}`, width * 3 / 8, height * 0.475);
  }
   if(mouseX >= width / 2 && mouseX <= width * 5 / 8 && mouseY >= height / 3 && mouseY <= height * 2 / 3){
    fill("black");
    rect(width / 2, height / 3, width / 8, height / 4);
    fill("yellow");
    if(nmb3 === 0){nmb3 = 1;}
    else{nmb3 = 0;}
    text(`${nmb3}`, width * 4.5 / 8, height * 0.475);
  } 
  if(mouseX >= width * 5.5 / 8 && mouseX <= width * 6.5 / 8 && mouseY >= height / 3 && mouseY <= height * 2 / 3){
    fill("black");
    rect(width * 5.5 / 8, height / 3, width / 8, height / 4);
    fill("yellow");
    if(nmb4 === 0){nmb4 = 1;}
    else{nmb4 = 0;}
    text(`${nmb4}`, width * 6 / 8, height * 0.475);
    
  }

    if (num === nmb1 * Math.pow(2, 3) + nmb2 * Math.pow(2, 2) + nmb3 * Math.pow(2, 1) + nmb4 * Math.pow(2, 0)){
      fill("lightgreengreen");
      text("Correct!", width / 2, height * 3 / 4);
    }
}