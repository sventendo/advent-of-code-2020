import { Ferry } from './ferry';
import { readLines } from '../readInput';
import { parse } from './directions-parser';
import { Vector } from '../generic/vector';

test('follow commmands', () => {
    const ferry = new Ferry();
    const commands = readLines('day12_example.txt');
    for (const command of commands) {
        ferry.followCommand(parse(command));
    }

    expect(ferry.position.coordinates).toEqual(new Vector(17, 8));
    expect(ferry.position.coordinates.manhattanDistance()).toBe(25);
});
