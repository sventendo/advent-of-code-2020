import { FLOOR, SEAT_EMPTY, SEAT_TAKEN, WaitingArea } from './waiting-area';
import { Matrix } from '../generic/matrix';
import { Vector } from '../generic/vector';
import { readLines } from '../readInput';
import { readLayout } from './input-helper';
import { NeighborPredictor } from './predictors/neighbors';
import { LineOfSightPredictor } from './predictors/line-of-sight';

test('construct and wait', () => {
    const seats = new Matrix([ [ SEAT_EMPTY, FLOOR ], [ SEAT_EMPTY, FLOOR ] ]);
    const waitingArea = new WaitingArea(seats, new NeighborPredictor);
    expect(waitingArea.getValue(new Vector(0, 1))).toBe(SEAT_EMPTY);
    waitingArea.wait();
    expect(waitingArea.getValue(new Vector(0, 1))).toBe(SEAT_TAKEN);
});

test('construct and wait example', () => {
    const lines = readLayout(readLines('day11_example.txt'));

    const waitingArea = new WaitingArea(new Matrix(lines), new NeighborPredictor);
    let oldHash;
    let newHash = waitingArea.getHash();

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).not.toBe(oldHash);

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).not.toBe(oldHash);

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).not.toBe(oldHash);

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).not.toBe(oldHash);

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).not.toBe(oldHash);

    waitingArea.wait();
    oldHash = newHash;
    newHash = waitingArea.getHash();
    expect(newHash).toBe(oldHash);
});

test('count cycles until stable, neighbors', () => {
    const lines = readLayout(readLines('day11_example.txt'));

    const waitingArea = new WaitingArea(new Matrix(lines), new NeighborPredictor);
    expect(waitingArea.waitUntilStable()).toBe(5);

    expect(waitingArea.countSeatsOfType(SEAT_TAKEN)).toBe(37);
});

test('count cycles until stable, line of sight', () => {
    const lines = readLayout(readLines('day11_example.txt'));

    const waitingArea = new WaitingArea(new Matrix(lines), new LineOfSightPredictor);
    expect(waitingArea.waitUntilStable()).toBe(6);

    expect(waitingArea.countSeatsOfType(SEAT_TAKEN)).toBe(26);
});
