const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

const MONTHS: string[] = ["Jan","Feb","Mar","Apr","May","Jun","Jul"," Aug","Sep","Oct","Nov","Dec"];

function setup() {
  createCanvas(460, 300);

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  // 3. Draw Y labels
  // 4. Draw X labels
  drawAxes();
  drawXLabels();
  drawYLabels();
  
}

function drawAxes() {
  // <<< Add code to draw X and Y axes here
  strokeWeight(3);
  line(30, 30, 30, 190);

  line(30, 170, 390, 170);


}

function drawYLabels() {
  // <<< Add code to draw labels for the Y axis here
  for(let i = 0; i < 9; i ++){
    let ytemp = 35;
  
    push();
    translate(30, 30);
    translate(0, 20* i);
    line(- 7, 0, 7, 0);
    textAlign(CENTER, CENTER);
    text(ytemp - i * 5, - 20, 0);
    pop();
  }
}

function drawXLabels() {
  // <<< Add code to draw labels for the X axis here

    for(let i = 0; i <= MONTHS.length; i ++){
      push();
      translate( 30 + 30 * i, 170);
      line(0, -7, 0, 7);
      pop();
      push()
      translate(45, 160)
      textAlign(CENTER, CENTER);
      text(MONTHS[i], 30 * i, 0);
      pop(); 
  }
}

function drawTemperatures(temperatures: number[]) {
  // <<< Add code to draw the temperatures here
}
