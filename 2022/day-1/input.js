import fs from 'fs';

export const input = fs
	.readFileSync('input.txt', 'utf-8')
	.replace(/\r/g, '')
	.split('\n\n')
	.map((x) => x.split('\n').map(Number));
