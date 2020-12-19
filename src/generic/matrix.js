import { Vector } from './vector';
import { hashCode } from './hash-code';

export const Matrix = class {
    constructor(values) {
        this.values = values;
    }

    getValue(vector) {
        if (this.values[ vector.y ] === undefined || this.values[ vector.y ][ vector.x ] === undefined) {
            return null;
        }

        return this.values[ vector.y ][ vector.x ];
    }

    setValue(vector, value) {
        if (this.values[ vector.y ] === undefined || this.values[ vector.y ][ vector.x ] === undefined) {
            throw new Error(`Out of bounds: [${vector.x},${vector.y}]`);
        }

        this.values[ vector.y ][ vector.x ] = value;
    }

    getNeighborsOfValue(vector, filterValue = null) {
        let neighbors = [];

        for (let x = vector.x - 1; x <= vector.x + 1; x++) {
            for (let y = vector.y - 1; y <= vector.y + 1; y++) {
                if (x === vector.x && y === vector.y) {
                    continue;
                }
                neighbors.push(this.getValue(new Vector(x, y)));
            }
        }

        let filterValueCallback = function (value, filterValue) {
            return true;
        };
        if (filterValue) {
            filterValueCallback = function (value, filterValue) {
                return value === filterValue;
            };
        }

        return neighbors.filter(value => value !== null && filterValueCallback(value, filterValue)).length;
    }

    getNeighbors(vector) {
        return this.getNeighborsOfValue(vector);
    }

    getValues() {
        return this.values;
    }

    cloneValues() {
        return JSON.parse(JSON.stringify(this.values));
    }

    getHash() {
        return hashCode(JSON.stringify(this.values));
    }

    countValue(value) {
        return this.values.flat().filter(item => item === value).length;
    }
};
