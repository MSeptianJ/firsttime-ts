import GeussNumber from './geussNumber';
import userInput from './utils';

const menuText = `
RANDOM GAMES
1. Geuss Number
2. Rock Paper Scissors
3. Exit

choose a number : `;

let menuLooper: boolean = false;

while (!menuLooper) {
	let menuInput: number = userInput(menuText);
	menuInput = Number(menuInput);

	if (menuInput === 1) {
		GeussNumber();
	} else if (menuInput === 2) {
		console.log('START');
	} else if (menuInput === 3) {
		menuLooper = true;
	}
}
