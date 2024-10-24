let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

  let colour: string;
function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));
  switch(colorIx){
    case 0: colour = `clubs`; break;
    case 1: colour =`diamonds`; break;
    case 2: colour = `hearts`; break;
    default: colour = `spades`; break;

  }
  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));
  let cardnumber : string;
  switch(cardIx) {
    case 1: cardnumber = `A`; break;
    case 11: cardnumber = `J`; break;
    case 12: cardnumber = `Q`; break;
    case 13: cardnumber = `K`; break;
    default: cardnumber = `${cardIx}`; break;

  }
  cardImage=loadImage(`${BASE_URL}/${colour}/${cardnumber}.png`);
  // <<< Add code here
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
