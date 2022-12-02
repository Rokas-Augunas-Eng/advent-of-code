import fs from 'fs';
import _ from 'lodash';

const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

let arrayNumberPart1 = [];
for (const a of input) {
  if (a === 'A Y') {
    arrayNumberPart1.push(8);
  } else if (a === 'A X') {
    arrayNumberPart1.push(4);
  } else if (a === 'A Z') {
    arrayNumberPart1.push(3);
  } else if (a === 'B Y') {
    arrayNumberPart1.push(5);
  } else if (a === 'B X') {
    arrayNumberPart1.push(1);
  } else if (a === 'B Z') {
    arrayNumberPart1.push(9);
  } else if (a === 'C Y') {
    arrayNumberPart1.push(2);
  } else if (a === 'C X') {
    arrayNumberPart1.push(7);
  } else {
    arrayNumberPart1.push(6);
  }
}

const totalSumPart1 = _.sum(arrayNumberPart1);

let arrayNumberPart2 = [];
for (const a of input) {
  if (a === 'A Y') {
    arrayNumberPart2.push(4);
  } else if (a === 'B Y') {
    arrayNumberPart2.push(5);
  } else if (a === 'C Y') {
    arrayNumberPart2.push(6);
  } else if (a === 'A X') {
    arrayNumberPart2.push(3);
  } else if (a === 'B X') {
    arrayNumberPart2.push(1);
  } else if (a === 'C X') {
    arrayNumberPart2.push(2);
  } else if (a === 'A Z') {
    arrayNumberPart2.push(8);
  } else if (a === 'B Z') {
    arrayNumberPart2.push(9);
  } else if (a === 'C Z') {
    arrayNumberPart2.push(7);
  } else null;
}

const totalSumPart2 = _.sum(arrayNumberPart2);
