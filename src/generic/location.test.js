import { EAST, LEFT, RIGHT } from './compass';
import { Vector } from './vector';
import { Location } from './location';

test('move', () => {
    const location = new Location(0, 0);
    expect(location.position).toEqual(new Vector(0, 0));
    location.move(EAST, 1);
    expect(location.position).toEqual(new Vector(1, 0));
});

test('right turns', () => {
    const location = new Location();
    expect(location.ninetyDegreesRightsTurns(0, RIGHT)).toBe(0);
    expect(location.ninetyDegreesRightsTurns(90, RIGHT)).toBe(1);
    expect(location.ninetyDegreesRightsTurns(180, RIGHT)).toBe(2);
    expect(location.ninetyDegreesRightsTurns(270, RIGHT)).toBe(3);
    expect(location.ninetyDegreesRightsTurns(0, LEFT)).toBe(0);
    expect(location.ninetyDegreesRightsTurns(90, LEFT)).toBe(3);
    expect(location.ninetyDegreesRightsTurns(180, LEFT)).toBe(2);
    expect(location.ninetyDegreesRightsTurns(270, LEFT)).toBe(1);
});

test('rotate waypoint', () => {
    const location = new Location(10, -1);

    location.rotate(RIGHT, 90);
    expect(location).toEqual(new Vector(1, 10));

    location.rotate(RIGHT, 90);
    expect(location).toEqual(new Vector(-10, 1));

    location.rotate(RIGHT, 90);
    expect(location).toEqual(new Vector(-1, -10));

    location.rotate(RIGHT, 90);
    expect(location).toEqual(new Vector(10, -1));
});
