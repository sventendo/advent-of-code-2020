import { readLayout } from './input-helper';
import { readLines } from '../readInput';
import { SEAT_TAKEN, WaitingArea } from './waiting-area';
import { Matrix } from '../generic/matrix';
import { NeighborPredictor } from './predictors/neighbors';
import { LineOfSightPredictor } from './predictors/line-of-sight';

test('part 1', () => {
    const lines = readLayout(readLines('day11.txt'));

    const waitingArea = new WaitingArea(new Matrix(lines), new NeighborPredictor);
    waitingArea.waitUntilStable();

    console.log(waitingArea.countSeatsOfType(SEAT_TAKEN));
});

test('part 2', () => {
    const lines = readLayout(readLines('day11.txt'));

    const waitingArea = new WaitingArea(new Matrix(lines), new LineOfSightPredictor);
    waitingArea.waitUntilStable();

    console.log(waitingArea.countSeatsOfType(SEAT_TAKEN));
});
