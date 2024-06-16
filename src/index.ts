import userInput from './utils';

const menuText = `
ROCK PAPER SCISSORS
1. Start Game
2. Exit

choose a number : `;

let menuLooper: boolean = false;

while (!menuLooper) {
	let menuInput: number = userInput(menuText);
	menuInput = Number(menuInput);

	if (menuInput === 1) {
		console.log('START');
	} else if (menuInput === 2) {
		menuLooper = true;
	}
}
