import { Matrix } from '../generic/matrix';
import { Vector } from '../generic/vector';

export const FLOOR = 0;
export const SEAT_EMPTY = 1;
export const SEAT_TAKEN = 2;

export const WaitingArea = class {
    constructor(matrix, predictor) {
        if (matrix instanceof Matrix === false) {
            throw new Error('Matrix must be of type Matrix');
        }
        this.seats = matrix;
        this.cycle = 0;

        this.predictor = predictor;
    }

    wait = function () {
        const seatsAfterCycle = new Matrix(this.seats.cloneValues());
        for (let y = 0; y < this.seats.getValues().length; y++) {
            for (let x = 0; x < this.seats.getValues()[ 0 ].length; x++) {
                const seat = new Vector(x, y);
                seatsAfterCycle.setValue(seat, this.predictValue(seat));
            }
        }
        this.seats = seatsAfterCycle;
    };

    getValue(vector) {
        return this.seats.getValue(vector);
    }

    predictValue(vector) {
        return this.predictor.predict(vector, this.seats);
    }

    getHash() {
        return this.seats.getHash();
    }

    /**
     * Return the number of cycles before the state is stable.
     */
    waitUntilStable() {
        let oldHash = '';
        let newHash = this.getHash();

        let cycle = 0;

        while (oldHash !== newHash) {
            if (cycle > 1000) {
                throw new Error('Cycle limit reached. Aborting.');
            }
            this.wait();
            oldHash = newHash;
            newHash = this.getHash();
            cycle++;
        }

        return cycle - 1;
    }

    countSeatsOfType(type) {
        return this.seats.countValue(type);
    }
};
