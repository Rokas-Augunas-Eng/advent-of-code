import { input } from './input.js';

const [unfilteredStacks, unfilteredMoves] = input.split('\n\n').map((x) => x.split('\n'));

const parsedStacks = unfilteredStacks.map((line) =>
	[...line].filter((value, index) => index % 4 === 1)
);

const indexes = parsedStacks.pop();

const stacks = {};

for (const line of parsedStacks) {
	for (let i = 0; i < line.length; i++) {
		if (line[i] !== ' ') {
			if (!stacks[indexes[i]]) {
				stacks[indexes[i]] = [];
			}
			stacks[indexes[i]].unshift(line[i]);
		}
	}
}

const moves = [];
for (const move of unfilteredMoves) {
	const match = /move (\d+) from (\d+) to (\d+)/g.exec(move);
	moves.push({
		count: parseInt(match[1]),
		from: parseInt(match[2]),
		to: parseInt(match[3]),
	});
}

const localStacks = JSON.parse(JSON.stringify(stacks));
for (const move of moves) {
	for (let i = 0; i < move.count; i++) {
		const crate = localStacks[move.from].pop();
		localStacks[move.to].push(crate);
	}
}

const topStack = indexes
	.map((value) => {
		const stack = localStacks[value];
		return stack[stack.length - 1];
	})
	.join('');
