import { Vector } from '../../generic/vector';
import { FLOOR, SEAT_EMPTY, SEAT_TAKEN } from '../waiting-area';

export const LineOfSightPredictor = class {
    predict(vector, seats) {
        const seat = seats.getValue(vector);
        if (seat === FLOOR) {
            return seat;
        }

        const seatValues = [
            this.getNorth(vector, seats),
            this.getNorthEast(vector, seats),
            this.getEast(vector, seats),
            this.getSouthEast(vector, seats),
            this.getSouth(vector, seats),
            this.getSouthWest(vector, seats),
            this.getWest(vector, seats),
            this.getNorthWest(vector, seats),
        ];

        const seatsTaken = seatValues.filter(value => value === SEAT_TAKEN).length;

        if (seatsTaken === 0) {
            return SEAT_TAKEN;
        }

        if (seatsTaken >= 5) {
            return SEAT_EMPTY;
        }

        return seat;
    }

    getNorth(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y >= 0;
        }, 0, -1);
    }

    getNorthEast(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y >= 0 && x < seats.getValues()[ 0 ].length;
        }, 1, -1);
    }

    getEast(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return x < seats.getValues()[ 0 ].length;
        }, 1, 0);
    }

    getSouthEast(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y < seats.getValues().length && x < seats.getValues()[ 0 ].length;
        }, 1, 1);
    }

    getSouth(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y < seats.getValues().length;
        }, 0, 1);
    }

    getSouthWest(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y < seats.getValues().length && x >= 0;
        }, -1, 1);
    }

    getWest(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return x >= 0;
        }, -1, 0);
    }

    getNorthWest(vector, seats) {
        return this.returnFirstSeatInLine(vector, seats, function (x, y) {
            return y >= 0 && x >= 0;
        }, -1, -1);
    }

    returnFirstSeatInLine(vector, seats, condition, xModifier, yModifier) {
        let value = null;
        let x, y;
        for (
            y = vector.y + yModifier, x = vector.x + xModifier;
            condition(x, y);
            y += yModifier, x += xModifier
        ) {
            value = seats.getValue(new Vector(x, y));
            if (value !== FLOOR) {
                return value;
            }
        }

        return value;
    }
};
