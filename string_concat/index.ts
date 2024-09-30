function setup() {
  createCanvas(500, 500);
  background("lightblue");
}


function mouseClicked() {
  //background("lightblue");
    const text1:string =`mouseX`;
    const text2:string=`mouseY`;
    const text3:string ="/";

    let text4 =`${text1}${text3}${text2}`;
    text4 = `${text4}`;
 // const xco: string = "0 + mouseX";
 // const yco: string = "0 + mouseY";
  //const zco: string = "/";

  //let text1: string = "${xco} ${zco} ${yco}";
  //text1= "${text1}";
  
  stroke("black");
  text(text4, 0, 10);
  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 40);
  




}
