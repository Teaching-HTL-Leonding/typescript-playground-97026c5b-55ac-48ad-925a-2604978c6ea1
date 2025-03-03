/** 
 * Get the initial value for currentWordStatus with underscores based on wordToGuess
 * 
 * @param wordToGuess Word to guess
 * 
 * @returns Initial value for currentWordStatus
 * 
 * This function must return a string with the same length as wordToGuess.
 * If a character in wordToGuess is a letter, the corresponding character
 * in the return value must be an underscore. If a character in wordToGuess
 * is a space, the corresponding character in the return value must be a space.
 */
function getInitialCurrentWord(wordToGuess: string): string {
    // <<< Add code here
    let invisibleword = "";

    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === " ") {
            invisibleword += " ";
        } else { invisibleword += "_"; }

    }

    return invisibleword; // Placeholder, remove this line once you added your code
}

/**
 * Handles a guess from a user
 * 
 * @param key Key that the user guessed
 * @param wordToGuess Word to guess
 * @param currentWordStatus Current word status
 * 
 * @returns New value for currentWordStatus
 * 
 * This function must return a new value for currentWordStatus based on the
 * key that the user guessed. If the key is in wordToGuess, the corresponding
 * characters in currentWordStatus must be revealed.
 */
function guessKey(key: string, wordToGuess: string, currentWordStatus: string): string {
    // <<< Add code here
    let result = "";

    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === key) {
            result += wordToGuess[i];
        } else {
            result += currentWordStatus[i];
        }
    }

    return result; // Placeholder, remove this line once you added your code
}

/**
 * Draws the result text
 * 
 * @param win False if the user has reached 10 wrong guesses, otherwise true
 * 
 * Draws the result text on the screen. If the user has lost (10 wrong guesses),
 * the text must be "Game Over" in red.
 * 
 * If the user has guessed the word correctly, the text must be:
 * 
 * * "No wrong guesses!" if number of wrong guesses is zero.
 * * "One wrong guess!" if number of wrong guesses is one.
 * * "n wrong guesses" otherwise ("n" is number of wrong guesses).
 */
function drawResult(win: boolean, wrongGuesses: number) {
    // <<< Add code here
    fill("green");
    textAlign(CENTER, CENTER);
    textSize(35);

    if (!win) {
        fill("red");
        text("Game over!", width / 2, height / 2);
    } else if (wrongGuesses === 0) {

        text("no wrong guesses", width / 2, height / 2);
    } else if (wrongGuesses === 1) {
        text("one wrong guess", width / 2, height / 2);

    } else {
        text(`${wrongGuesses} wrong guesses`, width / 2, height / 2);
    }


}