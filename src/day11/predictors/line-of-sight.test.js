import { readLayout } from '../input-helper';
import { readLines } from '../../readInput';
import { SEAT_EMPTY, FLOOR } from '../waiting-area';
import { LineOfSightPredictor } from './line-of-sight';
import { Vector } from '../../generic/vector';
import { Matrix } from '../../generic/matrix';

test('ignore taken behind empty', () => {
    const seats = new Matrix(readLayout(readLines('day11_example_2.txt')));
    const predictor = new LineOfSightPredictor;
    const seat = new Vector(1, 1);
    expect(predictor.getNorth(seat, seats)).toBe(FLOOR);
    expect(predictor.getNorthEast(seat, seats)).toBe(FLOOR);
    expect(predictor.getEast(seat, seats)).toBe(SEAT_EMPTY);
    expect(predictor.getSouthEast(seat, seats)).toBe(FLOOR);
    expect(predictor.getSouth(seat, seats)).toBe(FLOOR);
    expect(predictor.getSouthWest(seat, seats)).toBe(FLOOR);
    expect(predictor.getWest(seat, seats)).toBe(FLOOR);
    expect(predictor.getNorthWest(seat, seats)).toBe(FLOOR);
});
