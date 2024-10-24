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

   

    // <<< Add code here
}

function mouseClicked() {
    let nmb1: string;
    let nmb2: string;
    let nmb3: string;
    let nmb4: string;
    let nmb5: string;
    let nmb6: string;
    let nmb7: string;
    let nmb8: string;
    let nmb9: string;
    let nmb0: string;

    if(mouseX <= width / 3 && mouseY >= height * 1 / 5 && mouseY <= height * 2 / 5) {
        nmb1 = "1";
    }else if(mouseX > width / 3 && mouseX <= width * 2 / 3 && mouseY >= height * 1 / 5 && mouseY <= height * 2 / 5) {
        nmb2 = "2";
    }else if(mouseX > width * 2 / 3 && mouseY >= height + 1 / 5 && mouseY <= height * 2 / 5) {
        nmb3 = "3";
    }

    // <<< Add code here
}
