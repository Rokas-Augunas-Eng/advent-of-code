import { input } from './input.js';

let array = [];
for (const number of input) {
	array.push(number.reduce((prev, curr) => prev + curr));
}

const topThreeElfs = array
	.sort((a, b) => b - a)
	.slice(0, 3)
	.reduce((prev, curr) => prev + curr, 0);
