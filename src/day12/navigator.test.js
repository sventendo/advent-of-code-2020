import { Navigator } from './navigator';
import { Ferry } from './ferry';
import { Location } from '../generic/location';
import { Vector } from '../generic/vector';

test('example directions', () => {
    const navigator = new Navigator(new Ferry(), new Location(10, -1));

    navigator.followCommand({ command: 'F', value: 10 });
    expect(navigator.ferry.getCoordinates()).toEqual(new Vector(100, -10));

    navigator.followCommand({ command: 'N', value: 3});
    expect(navigator.waypoint.getCoordinates()).toEqual(new Vector(10, -4));

    navigator.followCommand({ command: 'F', value: 7 });
    expect(navigator.ferry.getCoordinates()).toEqual(new Vector(170, -38));

    navigator.followCommand({ command: 'R', value: 90 });
    expect(navigator.waypoint.getCoordinates()).toEqual(new Vector(4, 10));

    navigator.followCommand({ command: 'F', value: 11 });
    expect(navigator.ferry.getCoordinates()).toEqual(new Vector(214, 72));
});
