import fs from 'fs';

const input = fs
  .readFileSync('calories.txt', 'utf-8')
  .replace(/\r/g, '')
  .split('\n\n')
  .map((x) => x.split('\n').map(Number));

let most = 0;
for (const elf of input) {
  const sum = elf.reduce((prev, curr) => prev + curr);
  if (sum > most) most = sum;
}

let array = [];
for (const calorie of input) {
  array.push(calorie.reduce((prev, curr) => prev + curr));
}

const topThreeElfs = array
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, curr) => prev + curr, 0);

console.log(topThreeElfs);
