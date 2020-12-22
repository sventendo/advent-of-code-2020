import { readLines } from '../readInput';
import { Ferry } from './ferry';
import { parse } from './directions-parser';
import { Navigator } from './navigator';
import { Location } from '../generic/location';

test('part 1', () => {
    const ferry = new Ferry();
    const commands = readLines('day12.txt');
    for (const command of commands) {
        ferry.followCommand(parse(command));
    }

    console.log(ferry.position.coordinates.manhattanDistance());
});

test('part 2', () => {
    const navigator = new Navigator(new Ferry(), new Location(10, -1));
    const commands = readLines('day12.txt');
    for (const command of commands) {
        navigator.followCommand(parse(command));
    }

    console.log(navigator.ferry.position.coordinates.manhattanDistance());
});
