import { Vector } from './vector';
import { Matrix } from './matrix';

test('get value', () => {
    const matrix = new Matrix([ [ 1, 2 ], [ 3, 4 ] ]);
    expect(matrix.getValue(new Vector(0, 0))).toBe(1);
    expect(matrix.getValue(new Vector(1, 0))).toBe(2);
    expect(matrix.getValue(new Vector(1, 1))).toBe(4);
});

test('count neighbors', () => {
    const matrix = new Matrix([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]);
    expect(matrix.getNeighbors(new Vector(0, 0))).toBe(3);
    expect(matrix.getNeighbors(new Vector(1, 0))).toBe(5);
    expect(matrix.getNeighbors(new Vector(2, 0))).toBe(3);
    expect(matrix.getNeighbors(new Vector(0, 1))).toBe(5);
    expect(matrix.getNeighbors(new Vector(1, 1))).toBe(8);
    expect(matrix.getNeighbors(new Vector(2, 1))).toBe(5);
    expect(matrix.getNeighbors(new Vector(0, 2))).toBe(3);
    expect(matrix.getNeighbors(new Vector(1, 2))).toBe(5);
    expect(matrix.getNeighbors(new Vector(2, 2))).toBe(3);
});

test('count neighbors of type', () => {
    const matrix = new Matrix([
        [ 0, 1, 1 ],
        [ 1, 1, 1 ],
        [ 1, 1, 1 ],
    ]);
    expect(matrix.getNeighborsOfValue(new Vector(0, 0), 1)).toBe(3);
    expect(matrix.getNeighborsOfValue(new Vector(1, 0), 1)).toBe(4);
    expect(matrix.getNeighborsOfValue(new Vector(2, 0), 1)).toBe(3);
    expect(matrix.getNeighborsOfValue(new Vector(0, 1), 1)).toBe(4);
    expect(matrix.getNeighborsOfValue(new Vector(1, 1), 1)).toBe(7);
    expect(matrix.getNeighborsOfValue(new Vector(2, 1), 1)).toBe(5);
    expect(matrix.getNeighborsOfValue(new Vector(0, 2), 1)).toBe(3);
    expect(matrix.getNeighborsOfValue(new Vector(1, 2), 1)).toBe(5);
    expect(matrix.getNeighborsOfValue(new Vector(2, 2), 1)).toBe(3);
});

test('count value', () => {
    const matrix = new Matrix([
        [ 0, 1, 1 ],
        [ 1, 1, 1 ],
        [ 1, 1, 1 ],
    ]);

    expect(matrix.countValue(0)).toBe(1);
    expect(matrix.countValue(1)).toBe(8);
});
