import { readLines } from '../readInput';
import { AdapterKit } from './adapter-parser';

test('part 1', () => {
    const values = readLines('day10.txt').map(value => parseInt(value));
    const adapterKit = new AdapterKit(values);

    let adaptersType1 = adapterKit.useAdaptersOfType(1);
    let adaptersType3 = adapterKit.useAdaptersOfType(3);

    console.log(adaptersType1 * adaptersType3);
});

test('part 2', () => {
    const values = readLines('day10_example_2.txt').map(value => parseInt(value));
    const adapterKit = new AdapterKit(values);

    console.log(adapterKit.countCombinations());
});
