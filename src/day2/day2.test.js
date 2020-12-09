import { part1, part2 } from './day2';
import { readLines } from '../readInput';

test('part 1', () => {
    const values = readLines('day2.txt');
    console.log(part1(values));
});

test('part 2', () => {
    const values = readLines('day2.txt');
    console.log(part2(values));
});
