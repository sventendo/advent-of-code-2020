import { readLines } from '../readInput';
import { findContiguousSetForSum, findFirstInvalidValue } from './parser';

test('find first invalid value', () => {
    const values = readLines('day9_example.txt').map(line => parseInt(line));
    expect(findFirstInvalidValue(values, 5)).toBe(127);
});

test('find_contiguous_set', () => {
    const values = readLines('day9_example.txt').map(line => parseInt(line));
    const invalidValue = findFirstInvalidValue(values, 5);

    let set = findContiguousSetForSum(values, invalidValue);
    expect(set).toEqual([15, 25, 47, 40]);
});

test('find_contiguous_set', () => {
    const values = readLines('day9_example.txt').map(line => parseInt(line));
    const invalidValue = findFirstInvalidValue(values, 5);

    let set = findContiguousSetForSum(values, invalidValue);
    expect(set).toEqual([15, 25, 47, 40]);
});

