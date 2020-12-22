export const Vector = class {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Vector} vector
     */
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }

    /**
     * @param {number} factor
     */
    multiply(factor) {
        this.x *= factor;
        this.y *= factor;
        return this;
    }

    manhattanDistance() {
        return Math.abs(this.x) + Math.abs(this.y);
    }

    clone() {
        return new Vector(this.x, this.y);
    }
};
