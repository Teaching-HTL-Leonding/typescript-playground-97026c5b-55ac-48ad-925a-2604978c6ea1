let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

let smallcircleradius = 10;
let smallcircleMx = 0;
let smallcircleMy = 0;

let startdragging = false;


function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);

  smallcircleMx = width / 2;
  smallcircleMy = height - 50;

  mouseDragged();

  
}

function draw() {
  background("lightblue");

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();

  fill("white");
  stroke("red");
  circle(width / 2, height - 50, 100);

  noStroke();
  fill("black");
  circle(smallcircleMx, smallcircleMy, 2 * smallcircleradius);
}

function distance (){
}

function mousePressed(x:number,y:number){
  let dx = mouseX - x;
  let dy = mouseY - y;

  if(Math.sqrt(dx * dx + dy * dy) <= 10){
    startdragging = true;
  }
  
}

function mouseDragged() {
  if(startdragging){
    smallcircleMx = mouseX;
    smallcircleMy = mouseY;
  }
  
}

function mouseReleased() {
  
}
