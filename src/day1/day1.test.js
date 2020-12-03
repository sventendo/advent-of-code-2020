import { part1, part2 } from './day1';
import { readInput } from '../readInput';

test('part 1', () => {
    const values = readInput('day1.txt').split('\n').map(value => parseInt(value));
    console.log(part1(values));
});

test('part 2', () => {
    const values = readInput('day1.txt').split('\n').map(value => parseInt(value));
    console.log(part2(values));
});
