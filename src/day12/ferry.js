import { NORTH, EAST, SOUTH, WEST, RIGHT, LEFT, FORWARD } from '../generic/compass';
import { Location } from '../generic/location';

export const Ferry = class {
    constructor() {
        this.direction = EAST;
        this.position = new Location(0, 0);
    }

    followCommand(command) {
        if ([ RIGHT, LEFT ].includes(command.command)) {
            this.turn(command.command, command.value);
            return;
        }

        if ([ NORTH, EAST, SOUTH, WEST, FORWARD ].includes(command.command)) {
            this.move(command.command, command.value);
            return;
        }

        throw new Error(`Unknown command: "${command.command}".`);
    }

    turn(direction, degrees) {
        const map = [ NORTH, EAST, SOUTH, WEST ];
        const currentDirection = map.indexOf(this.direction);
        const ninetyDegreeTurns = degrees / 90;
        const directionShift = direction === RIGHT ? 1 : -1;
        const mapIndex = ((currentDirection + (ninetyDegreeTurns * directionShift)) % 4 + 4) % 4;
        this.direction = map[ mapIndex ];
    }

    move(direction, distance) {
        if (direction === FORWARD) {
            direction = this.direction;
        }

        this.position.move(direction, distance);
    }

    addPosition(vector) {
        this.position.getCoordinates().add(vector);
    }

    getCoordinates() {
        return this.position.getCoordinates();
    }
};
