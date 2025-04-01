let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

const movementRadius = 50;
const stickRadius = 10;

let stickPositionX = 0;
let stickPositionY = 0;

let stickX = 0;
let stickY = 0;
let stickOriginX = 0;
let stickOriginY = 0;
const controlStickRadius = 10;


let isDragging = false;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
  stickOriginX = width / 2;
  stickOriginY = height - movementRadius;
}

function draw() {
  background("lightblue");

      if(fighterPositionX > 250){
      fighterPositionX = 250
    }
    else if(fighterPositionX < -250){
      fighterPositionX = -250
    }
    if(fighterPositionY> 250){
      fighterPositionY = 250
    }
    else if(fighterPositionY < -250){
      fighterPositionY = -250
    }
  

  const speedX = stickPositionX / 5;
  const speedY = stickPositionY / 5;
  fighterPositionX += speedX;
  fighterPositionY += speedY;

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();

  push();
  translate(width / 2, height - movementRadius);

  fill("white");
  stroke("red");
  circle(0, 0, movementRadius * 2);

  fill("black");
  noStroke();
  circle(stickPositionX, stickPositionY, stickRadius * 2);
  pop();
  
}

function mousePressed() {
  // Is the mouse click inside the joystick?
  const dist = calcDistance(
    stickPositionX, 
    stickPositionY, 
    mouseX - width / 2, 
    mouseY - (height - movementRadius));
  isDragging = dist < stickRadius;
  // if (dist <= stickRadius) {
  //   // inside
  //   isDragging = true;
  // } else {
  //   // outside
  //   isDragging = false;
  // }
}

function mouseDragged() {
  if (isDragging) {
    stickPositionX = mouseX - stickOriginX;
    stickPositionY = mouseY - stickOriginY;

    // Berechne die Distanz zum Zentrum des Joysticks
    const distanceFromCenter = calcDistance(0, 0, stickPositionX, stickPositionY);
    
    // Falls der Stick außerhalb des Radius ist, skaliere ihn zurück
    if (distanceFromCenter > movementRadius - controlStickRadius) {
      const scale = (movementRadius - controlStickRadius) / distanceFromCenter;
      stickPositionX *= scale;
      stickPositionY *= scale;
    }
  }
}

function mouseReleased() {
  isDragging = false;
}

// This method returns the distance between center of joystick
// and mouse position.
function calcDistance(jsX: number, jsY: number, mX: number, mY: number): number {
  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);

  
}