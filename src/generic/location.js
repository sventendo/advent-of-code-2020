import { EAST, NORTH, RIGHT, SOUTH, WEST } from './compass';
import { Vector } from './vector';

export const Location = class {
    constructor(x, y) {
        this.coordinates = new Vector(x, y);
    }

    getCoordinates() {
        return this.coordinates;
    }

    move(direction, distance) {
        if ([ NORTH, EAST, SOUTH, WEST ].includes(direction) === false) {
            throw new Error(`Unknown direction: ${direction}`);

        }
        const directionMap = {
            [ NORTH ]: [ 0, -1 ],
            [ EAST ]: [ 1, 0 ],
            [ SOUTH ]: [ 0, 1 ],
            [ WEST ]: [ -1, 0 ],
        };
        let directionMapElement = directionMap[ direction ];
        const vector = new Vector(...directionMapElement);

        this.coordinates = this.coordinates.add(vector.multiply(distance));
    }

    rotate(direction, degrees) {
        const rightTurns = this.ninetyDegreesRightsTurns(direction, degrees);

        let newCoordinates = new Vector().add(this.coordinates);
        Array(rightTurns).fill(null).map(() => newCoordinates = new Vector(newCoordinates.y * (-1), newCoordinates.x));

        this.coordinates = newCoordinates;
    }

    ninetyDegreesRightsTurns(direction, degrees) {
        const ninetyDegreeTurns = (degrees / 90) % 4;
        return (direction === RIGHT ? ninetyDegreeTurns : 4 - ninetyDegreeTurns) % 4;
    }
};
