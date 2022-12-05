import { input } from './input.js';
const overlapping = input.filter(([start1, end1, start2, end2]) => {
	return (start1 >= start2 && end1 <= end2) || (start1 <= start2 && end1 >= end2);
}).length;
