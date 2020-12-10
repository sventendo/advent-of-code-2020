import { readLines } from '../readInput';
import { findContiguousSetForSum, findFirstInvalidValue } from './parser';
import { checkSumMinMax } from './array-utility';

test('part 1', () => {
    const values = readLines('day9.txt').map(line => parseInt(line));
    console.log(findFirstInvalidValue(values, 25));
});

test('part 2', () => {
    const values = readLines('day9.txt').map(line => parseInt(line));
    const invalidValue = findFirstInvalidValue(values, 25);
    let set = findContiguousSetForSum(values, invalidValue);
    console.log(checkSumMinMax(set));
});
