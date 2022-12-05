import fs from 'fs';

export const input = fs
	.readFileSync('input.txt', 'utf-8')
	.split('\n')
	.map((line) => {
		return Array.from(line.matchAll(/\d+/g), (d) => Number.parseInt(d, 10));
	});
