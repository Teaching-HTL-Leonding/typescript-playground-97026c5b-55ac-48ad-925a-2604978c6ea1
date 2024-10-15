function setup() {
  createCanvas(400, 300);
  background("black");
  let num = Math.floor(random(1, 4095));
  let num1 = Math.floor(random(1, 256))
  
 // const stelle1 = Math.fllor(random(0, 10));


  // Add the necessary code here


  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  if ((num / 256) === 1) {
    text("1",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 2) {
    text("2",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 3) {
    text("3",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 4) {
    text("4",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 5) {
    text("5",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 6) {
    text("6",width / 6, height / 3, width / 6, height / 3);

  } 
    if ((num / 256) === 7) {
    text("7",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 8) {
    text("8",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 9) {   
    text("9",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 10) {   
    text("A",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 11) {
    text("B",width / 6, height / 3, width / 6, height / 3);
  }
    if ((num / 256) === 12) {
    text("C",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 13) {
    text("D",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256)=== 14) {
    text("E",width / 6, height / 3, width / 6, height / 3);
  }
      if ((num / 256) === 15) {
    text("F",width / 6, height / 3, width / 6, height / 3);
  } 
    if ((num / 16) === 1) {
    text("1",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 2) {
    text("2",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 3) {
    text("3",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 4) {
    text("4",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 5) {
    text("5",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 6) {
    text("6",width / 2.45, height / 3, width / 6, height / 3);
  } 
    if ((num / 16) === 7) {
    text("7",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 8) {
    text("8",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 9) {   
    text("9",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 10) {   
    text("A",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 11) {
    text("B",width / 2.45, height / 3, width / 6, height / 3);
  }
    if ((num / 16) === 12) {
    text("C",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 13) {
    text("D",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16)=== 14) {
    text("E",width / 2.45, height / 3, width / 6, height / 3);
  }
      if ((num / 16) === 15) {
    text("F",width / 2.45, height / 3, width / 6, height / 3);
  } 
  text(num, width / 2, height - 20);

  stroke("Yellow");
  noFill();
  rect(width / 6, height / 3, width / 6, height / 3);
  rect(width / 2.45, height / 3, width / 6, height / 3);
  rect(width * 0.65, height / 3, width / 6, height / 3); 

 // text(`${num}`, width / 6, height / 3, width / 6, height / 3);


}