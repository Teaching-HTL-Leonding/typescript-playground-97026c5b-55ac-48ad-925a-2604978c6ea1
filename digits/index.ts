function setup() {
  createCanvas(400, 300);
  background("black");
  const num = Math.floor(random(0, 1_000_000));


  // Add the necessary code here
  
  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  stroke("Yellow");
  noFill();
  rect(width / 10.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 7, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 8.5, height / 3, width / 10, height / 4);

textAlign(CENTER, CENTER);
  text(`${Math.floor(num / 100000) % 10}`,width / 10.5, height / 3, width / 10, height / 4);
  text(`${Math.floor(num / 10000) % 10}`,width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`${Math.floor(num / 1000) % 10}`,width / 10.5 * 4, height / 3, width / 10, height / 4);
  text(`${Math.floor(num / 100 ) % 10}`,width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  text(`${Math.floor(num / 10) % 10}`,width / 10.5 * 7, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 8.5, height / 3, width / 10, height / 4);

  

}
