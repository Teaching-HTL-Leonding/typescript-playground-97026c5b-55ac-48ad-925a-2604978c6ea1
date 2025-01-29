const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];
const MONTHS: string[] = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];


function setup() {
  createCanvas(460, 300);

  drawAxes();
  drawYLabels();
  drawXLabels();

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
}

function drawAxes() {
  // <<< Add code to draw X and Y axes here
  stroke("black");
  strokeWeight(2);
  line(50, 50, 50, 250);
  line(50, 225, 410, 225);
}

function drawYLabels() {
  // <<< Add code to draw labels for the Y axis here
  for(let i = - 5; i <= 35; i += 5){
    let y = 225 - i * 5;


    stroke("black");
    strokeWeight(2);
    line(45, y , 55, y);
    noStroke();
    textAlign(RIGHT, CENTER);
    textSize(10);
    text(i, 40, y);
  }
}

function drawXLabels() {
  // <<< Add code to draw labels for the X axis here
 for( let i = 0;  i <= MONTHS.length; i ++){
  let x = 410 - 30 * i;

  stroke("black");
  strokeWeight(2);
  line(x, 220, x, 230);

    noStroke();
    textAlign(CENTER, CENTER);
    textSize(10);
    push();
    translate(50, 5);
    text(MONTHS[i], 15 + 30 * i, 210);
    pop();


 }
}

function drawTemperatures(temperatures: number[]) {
  // <<< Add code to draw the temperatures here
  for(let i = 0; i <= AVG_TEMP_JOHANNESBURG.length; i ++){
    fill("yellow");
    let temp = 1;
    translate(5, 0);
    push();
    translate(30 * i, 0);
    rect()
  }
}
