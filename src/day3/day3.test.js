import { part1, part2, treesHitForSlope } from './day3';
import { readLines } from '../readInput';

test('part 1', () => {
    const values = readLines('day3.txt');
    console.log(part1(values));
});

test('slope 1 down 3 right', () => {
    const lines = readLines('day3_example.txt');
    expect(treesHitForSlope(lines, 3, 1)).toBe(7);
});

test('different slopes', () => {
    const lines = readLines('day3_example.txt');
    expect(treesHitForSlope(lines, 1, 1)).toBe(2);
    expect(treesHitForSlope(lines, 3, 1)).toBe(7);
    expect(treesHitForSlope(lines, 5, 1)).toBe(3);
    expect(treesHitForSlope(lines, 7, 1)).toBe(4);
});

test('different slopes with skipping a row', () => {
    const lines = readLines('day3_example.txt');
    expect(treesHitForSlope(lines, 1, 2)).toBe(2);
});

test('part 2', () => {
    const values = readLines('day3.txt');
    console.log(part2(values));
});
