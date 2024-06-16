import userInput from './utils';

// Random number from 1 - 10
const numberToGuess: number = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber: boolean = false;

while (!foundCorrectNumber) {
	// Get user input
	let guess: number = userInput('Guess a number from 1 to 10: ');
	// Convert the string input to a number
	guess = Number(guess);

	// Compare the guess to the secret answer and let the user know.
	if (guess === numberToGuess) {
		console.log('Congrats, you got it!');
		foundCorrectNumber = true;
	} else {
		console.log('Sorry, guess again!');
	}
}
