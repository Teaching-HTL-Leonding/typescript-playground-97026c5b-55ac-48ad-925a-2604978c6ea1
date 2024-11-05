const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(300, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");


    fill("white");  
    rect(width / 30, height / 60, width * 0.925, height / 6);

    fill("black");
    line(0, height * 1 / 5, width, height * 1 / 5);
    line(width / 3, height * 1 / 5, width / 3, height * 4 / 5);
    line(width * 2 / 3, height * 1 / 5, width * 2 / 3, height);
    line(0, height * 2 / 5, width, height * 2 / 5);
    line(0, height * 3 / 5, width, height * 3 / 5);
    line(0, height * 4 / 5, width, height * 4 / 5);

    textAlign(CENTER, CENTER);
    textSize(50);
    text("1", width / 6, height * 1.5 / 5);
    text("2", width / 2, height * 1.5 / 5);
    text("3", width * 5 / 6, height * 1.5 / 5);
    text("4", width / 6, height * 2.5 / 5);
    text("5", width / 2, height * 2.5 / 5);
    text("6", width * 5 / 6, height * 2.5 / 5);
    text("7", width / 6, height * 3.5 / 5);
    text("8", width / 2, height * 3.5 / 5);
    text("9", width * 5 / 6, height * 3.5 / 5);
    text("C", width * 5 / 6, height * 4.5 / 5);
    text("0", width / 3, height * 4.5 / 5);

    textAlign(RIGHT, CENTER);
    fill("black");
    text(displaynumber, width * 0.85, height / 10);
   

    // <<< Add code here
}

    let displaynumber: string = "";
function mouseClicked() {



if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight && mouseY < lineHeight * 2){
displaynumber += "1";
}
if(mouseX > cellWidth && mouseX < cellWidth * 2 && mouseY > lineHeight && mouseY < lineHeight * 2){
displaynumber += "2";
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight && mouseY < lineHeight * 2){
displaynumber += "3";
}
if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displaynumber += "4";
}
if(mouseX > cellWidth && mouseX < cellWidth * 2 && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displaynumber += "5";
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 2 && mouseY < lineHeight * 3){
displaynumber += "6";
}
if(mouseX > 0 && mouseX < cellWidth && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displaynumber += "7";
}
if(mouseX > cellWidth  && mouseX < cellWidth * 2 && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displaynumber += "8";
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 3 && mouseY < lineHeight * 4){
displaynumber += "9";
}
if(mouseX > 0 && mouseX < cellWidth * 2 && mouseY > lineHeight * 4 && mouseY < lineHeight * 5){
displaynumber += "0";
}
if(mouseX > cellWidth * 2 && mouseX < cellWidth * 3 && mouseY > lineHeight * 4 && mouseY < lineHeight * 5){
displaynumber += "";
} 
    }
    // <<< Add code here
