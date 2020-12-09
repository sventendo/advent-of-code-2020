import { part1, part2 } from './day1';
import { readLines } from '../readInput';

test('part 1', () => {
    const values = readLines('day1.txt').map(value => parseInt(value));
    console.log(part1(values));
});

test('part 2', () => {
    const values = readLines('day1.txt').map(value => parseInt(value));
    console.log(part2(values));
});
