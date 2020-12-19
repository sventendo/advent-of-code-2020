import { Vector } from './vector';

test('get values', () => {
    const vector = new Vector(1, 2);
    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
});
