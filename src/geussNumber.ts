import userInput from './utils';

const GeussNumber = (): void => {
	const numberToGuess: number = Math.floor(Math.random() * 10) + 1;
	let foundCorrectNumber: boolean = false;

	while (!foundCorrectNumber) {
		let guess: number = userInput('Guess a number from 1 to 10: ');
		guess = Number(guess);

		if (guess === numberToGuess) {
			console.log('Congrats, you got it!');
			foundCorrectNumber = true;
		} else {
			console.log('Sorry, guess again!');
		}
	}
};

export default GeussNumber;
