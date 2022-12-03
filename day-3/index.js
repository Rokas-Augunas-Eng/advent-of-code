import fs from 'fs';
import _ from 'lodash';

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

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

let totalValuePart1 = [];
twoDupliateStrings.map((letter) => {
  if (letter.toUpperCase() === letter) {
    totalValuePart1.push(letter.charCodeAt(0) - 38);
  } else {
    totalValuePart1.push(letter.charCodeAt(0) - 96);
  }
});

const splitIntoThree = _.chunk(input, 3);
console.log(splitIntoThree);
let threeDupliateStrings = [];
for (const a of splitIntoThree) {
  const set1 = new Set(a[0].split(''));
  const set2 = new Set(a[1].split(''));
  const set3 = new Set(a[2].split(''));

  for (let char of set1.values()) {
    if (set2.has(char) && set3.has(char)) threeDupliateStrings.push(char);
  }
}

console.log(threeDupliateStrings);

let totalValuePart2 = [];
threeDupliateStrings.map((letter) => {
  if (letter.toUpperCase() === letter) {
    totalValuePart2.push(letter.charCodeAt(0) - 38);
  } else {
    totalValuePart2.push(letter.charCodeAt(0) - 96);
  }
});
console.log(_.sum(totalValuePart2));
