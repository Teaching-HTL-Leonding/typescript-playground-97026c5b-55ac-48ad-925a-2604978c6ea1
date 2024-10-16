function setup() {
  createCanvas(400, 300);
  background("black");
  const stelle1 = Math.floor(random(1, 4095));
  const stelle2 = 4095 / 16;
  const stelle3 = stelle2 / 16;


  
 // const stelle1 = Math.fllor(random(0, 10));


  // Add the necessary code here


  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();

  text(stelle1, width / 2, height - 20);

  stroke("Yellow");
  noFill();
  rect(width / 6, height / 3, width / 6, height / 3);
  rect(width / 2.45, height / 3, width / 6, height / 3);
  rect(width * 0.65, height / 3, width / 6, height / 3); 
  
  text(`${Math.floor(stelle3 %16)}`,width / 6, height / 3, width / 6, height / 3);
  text(`${Math.floor(stelle2 %16)}`,width / 2.45, height / 3, width / 6, height / 3);
  text(`${stelle1 % 16}`,width * 0.65, height / 3, width / 6, height / 3); 
 // text(`${num}`, width / 6, height / 3, width / 6, height / 3);


}