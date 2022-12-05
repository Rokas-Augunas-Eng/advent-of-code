import { input } from './input.js';
import lodash from 'lodash';
const { sum, chunk } = lodash;

const splitIntoThree = chunk(input, 3);

let threeDupliateStrings = [];
for (const a of splitIntoThree) {
	const set1 = new Set(a[0].split(''));
	const set2 = new Set(a[1].split(''));
	const set3 = new Set(a[2].split(''));

	for (let char of set1.values()) {
		if (set2.has(char) && set3.has(char)) threeDupliateStrings.push(char);
	}
}

let totalValuePart = [];
threeDupliateStrings.map((letter) => {
	if (letter.toUpperCase() === letter) {
		totalValuePart.push(letter.charCodeAt(0) - 38);
	} else {
		totalValuePart.push(letter.charCodeAt(0) - 96);
	}
});

const result = sum(totalValuePart);
