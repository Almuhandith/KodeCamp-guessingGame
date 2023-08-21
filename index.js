const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const randNum = Math.floor(Math.random() * 10) + 1;


function askForGuess() {
  rl.question('Guess a number between 1 and 10: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Thanks for playing!');
      rl.close();
      return;
    }

    const guess = parseInt(input);

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
      askForGuess();
      return;
    }

    if (guess === randNum) {
      console.log(`You won!`);
      askForGuess();
    } else {
      console.log(`You lost! The correct answer is ${randNum}`);
      askForGuess();
    }
  });
}

askForGuess();
