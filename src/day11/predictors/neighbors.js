import { FLOOR, SEAT_EMPTY, SEAT_TAKEN } from '../waiting-area';

/**
 *
 * @param {Vector} vector
 * @param {Matrix} seats
 * @returns {number|any}
 */
export const NeighborPredictor = class {
    predict(vector, seats) {
        const seat = seats.getValue(vector);
        if (seat === FLOOR) {
            return seat;
        }

        const neighboringSeatsTaken = seats.getNeighborsOfValue(vector, SEAT_TAKEN);
        if (neighboringSeatsTaken === 0) {
            return SEAT_TAKEN;
        }
        if (neighboringSeatsTaken >= 4) {
            return SEAT_EMPTY;
        }
        return seat;
    }
};
