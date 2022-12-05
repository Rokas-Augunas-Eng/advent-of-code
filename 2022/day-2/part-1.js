import { input } from './input.js';
import lodash from 'lodash';
const { sum } = lodash;

let arrayNumber = [];
for (const a of input) {
	if (a === 'A Y') {
		arrayNumber.push(8);
	} else if (a === 'A X') {
		arrayNumber.push(4);
	} else if (a === 'A Z') {
		arrayNumber.push(3);
	} else if (a === 'B Y') {
		arrayNumber.push(5);
	} else if (a === 'B X') {
		arrayNumber.push(1);
	} else if (a === 'B Z') {
		arrayNumber.push(9);
	} else if (a === 'C Y') {
		arrayNumber.push(2);
	} else if (a === 'C X') {
		arrayNumber.push(7);
	} else {
		arrayNumber.push(6);
	}
}

const totalSum = sum(arrayNumber);
