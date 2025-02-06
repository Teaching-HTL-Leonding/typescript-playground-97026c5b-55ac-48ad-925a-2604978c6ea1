const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);
  background("black");
  strokeWeight(2);
  stroke("lime");
  noFill();

  addRandomCircle();
  circle_interval = setInterval(addRandomCircle, waiting_time);




  // <<< Add code here
}

function draw() {
  background("black");

  // <<< Add code here
  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);

  }
  noStroke();
  textSize(30);
  textAlign(LEFT, CENTER);
  fill("white");
  text(`Points: ${points}`, 10, 30);

}

// <<< Add functions here
function addRandomCircle() {
  circles_x.push(random(0, width));
  circles_y.push(random(0, height));
  circles_diameter.push(random(10, 51));
}

function isInside(x: number, y: number, circle_index: number): boolean {
  const dx = x - circles_x[circle_index];
  const dy = y - circles_y[circle_index];
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circles_diameter[circle_index] / 2;
}

function mouseClicked() {
  for (let i = 0; i < circles_x.length; i++) {
    if (isInside(mouseX, mouseY, i)) {
      circles_x.splice(i, 1);
      circles_y.splice(i, 1);
      circles_diameter.splice(i, 1);
      points += 1;
    }
  }
}
