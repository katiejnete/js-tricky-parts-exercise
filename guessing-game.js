function guessingGame(guess = null) {
  let guessCount = 0;
  let isGameOver = false;
  const secretNum = Math.floor(Math.random() * 100);
  return function (guess) {
    if (isGameOver) return "The game is over, you already won!";
    if (guess !== secretNum) {
      guessCount++;
      return guess < secretNum
        ? `${guess} is too low!`
        : `${guess} is too high!`;
    } else {
      guessCount++;
      isGameOver = true;
      return `You win! You found ${guess} in ${guessCount} guesses.`;
    }
  };
}

module.exports = { guessingGame };
