let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;



function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
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
  circle(width / 2, height - 50, 20);
}

function mousePressed() {
  console.log(`mouse pressed`);
}

function mouseDragged() {
  console.log(`mouse dragged`);
}

function mouseReleased() {
  console.log(`mouse released`);
}
