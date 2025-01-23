let nextSmiling = true;
function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);

}
function mouseClicked(){
  nextSmiling = !nextSmiling; 
  smile(nextSmiling); 
}

// Function DEFINITION
//       +-------------------------- Function name
//       |     +-------------------- Parameter name
//       |     |      +------------- Parameter type
//       v     v      v
function smile(happy: boolean) {
  // <<< Add your code here
  push();
  let x = random(0, width);
  let y = random(0, height);
  let diameter = 100;

 

  if(happy){
    fill("yellow");
  }else{
    fill("green");
  }
  circle(x, y, diameter);
  fill("black");
  circle(x -10, y - 10, 5);
  circle(x + 10, y - 10, 5)

  if(happy){
    noFill();
    arc(x, y + 7, 30, 15, 25, 165);
  }else{
    noFill();
    arc(x, y + 7, 30, 15, 180, 360);
  }

}
