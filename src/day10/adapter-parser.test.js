import { readLines } from '../readInput';
import { AdapterKit } from './adapter-parser';

test('count required adapters', () => {
    const values = readLines('day10_example.txt').map(value => parseInt(value));
    const adapterKit = new AdapterKit(values);

    expect(adapterKit.useAdaptersOfType(1)).toBe(7);
    expect(adapterKit.useAdaptersOfType(3)).toBe(5);
});

test('count combinations', () => {
    const values = readLines('day10_example.txt').map(value => parseInt(value));
    const adapterKit = new AdapterKit(values);

    expect(adapterKit.countCombinations()).toBe(8);
});

test('count more combinations', () => {
    const values = readLines('day10_example_2.txt').map(value => parseInt(value));
    const adapterKit = new AdapterKit(values);

    expect(adapterKit.countCombinations()).toBe(19208);
});
