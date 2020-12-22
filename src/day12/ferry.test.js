import { NORTH, EAST, SOUTH, WEST, RIGHT, LEFT } from '../generic/compass';
import { Ferry } from './ferry';
import { Vector } from '../generic/vector';

test('turn', () => {
    const ferry = new Ferry();
    expect(ferry.direction).toBe(EAST);
    ferry.turn(RIGHT, 90);
    expect(ferry.direction).toBe(SOUTH);
    ferry.turn(RIGHT, 90);
    expect(ferry.direction).toBe(WEST);
    ferry.turn(RIGHT, 90);
    expect(ferry.direction).toBe(NORTH);
    ferry.turn(RIGHT, 90);
    expect(ferry.direction).toBe(EAST);
    ferry.turn(LEFT, 180);
    expect(ferry.direction).toBe(WEST);
});

test('add position', () => {
    const ferry = new Ferry();
    ferry.move(EAST, 2);
    ferry.addPosition(new Vector(1, 2));

    expect(ferry.position.getCoordinates()).toEqual(new Vector(3, 2));
});
