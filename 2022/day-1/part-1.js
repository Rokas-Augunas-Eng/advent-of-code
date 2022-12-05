import { input } from './input.js';

let most = 0;
for (const number of input) {
	const sum = number.reduce((prev, curr) => prev + curr);
	if (sum > most) most = sum;
}
