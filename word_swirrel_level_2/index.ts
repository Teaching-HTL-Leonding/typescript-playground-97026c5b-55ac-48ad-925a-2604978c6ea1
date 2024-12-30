const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

  // <<< Add your code here
  let wordToScramble = wordToGuess;

  let scrambleWord = "";
  while(wordToScramble.length > 0){
    let letterIndex = Math.floor(random(wordToScramble.length));
    scrambleWord += wordToScramble[letterIndex];
    wordToScramble = wordToScramble.substring(0, letterIndex) + wordToScramble.substring(letterIndex + 1);

  }
  let letter1 = scrambleWord[0];
  let letter2 = scrambleWord[1];
  let letter3 = scrambleWord[2];
  let letter4 = scrambleWord[3];
  let letter5 = scrambleWord[4];

  fill("white");
  textSize(75);
  rotate(5);
  text(letter1, 50, 50);
  text(letter2, 350, 200);
  text(letter3, 250, 150);
  text(letter4, 100, 250);
  text(letter5, 470, 250);

}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2) 
  }
}
