import { input } from './input.js';
import lodash from 'lodash';
const { sum } = lodash;

const splitStrings = input.map((string) => {
	const firstPart = string.substring(0, string.length / 2);
	const secondPart = string.substring(string.length / 2);
	return [firstPart, secondPart];
});

let twoDupliateStrings = [];
for (const a of splitStrings) {
	const set1 = new Set(a[0].split(''));
	const set2 = new Set(a[1].split(''));

	for (let char of set1.values()) {
		if (set2.has(char)) twoDupliateStrings.push(char);
	}
}

let totalValuePart = [];
twoDupliateStrings.map((letter) => {
	if (letter.toUpperCase() === letter) {
		totalValuePart.push(letter.charCodeAt(0) - 38);
	} else {
		totalValuePart.push(letter.charCodeAt(0) - 96);
	}
});

const result = sum(totalValuePart);
