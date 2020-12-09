import { readLines } from '../readInput';
import { Parser } from './parser';

test('get last value before loop', () => {
    const lines = readLines('day8_example.txt');
    const parser = new Parser(lines);
    expect(parser.getLastInputBeforeLoop()).toBe(5);
});

test('part 1', () => {
    const lines = readLines('day8.txt');
    const parser = new Parser(lines);
    console.log(parser.getLastInputBeforeLoop());
});

test('auto fix code', () => {
    const lines = readLines('day8_example.txt');
    const parser = new Parser(lines);
    parser.autoFixCode();
    expect(parser.accumulator).toBe(8);
});

test('part 2', () => {
    const lines = readLines('day8.txt');
    const parser = new Parser(lines);
    parser.autoFixCode();
    console.log(parser.accumulator);
});
