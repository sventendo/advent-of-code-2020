import { part1, part2 } from './day2';
import { readInput } from '../readInput';

test('part 1', () => {
    const values = readInput('day2.txt').split('\n').filter(line => line);
    console.log(part1(values));
});

test('part 2', () => {
    const values = readInput('day2.txt').split('\n').filter(line => line);
    console.log(part2(values));
});
