function setup() {
    createCanvas(400, 400);
    const text1:string =`Hello`;
    const text2:string=`World`;

    let text3 =`${text1} ${text2}`;
    text3 = `${text3}`;
    text(text3, 50, 50);

    const longText = `dddddddddddddddddddddddddd ddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd`;
    text(longText, 0, 200, 400, 400);
}

function draw() {


}
