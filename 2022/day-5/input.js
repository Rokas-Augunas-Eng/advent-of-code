import fs from 'fs';

export const input = fs.readFileSync('input.txt', 'utf8').replace(/\r/g, '').trimEnd();
