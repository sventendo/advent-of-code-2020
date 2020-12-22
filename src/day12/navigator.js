import { EAST, FORWARD, LEFT, NORTH, RIGHT, SOUTH, WEST } from '../generic/compass';

export const Navigator = class {
    /**
     * @param {Ferry} ferry
     * @param {Location} waypoint
     */
    constructor(ferry, waypoint) {
        this.ferry = ferry;
        this.waypoint = waypoint;
    }

    followCommand(command) {
        if ([ RIGHT, LEFT ].includes(command.command)) {
            this.waypoint.rotate(command.command, command.value);
            return;
        }

        if ([ NORTH, EAST, SOUTH, WEST ].includes(command.command)) {
            this.waypoint.move(command.command, command.value);
            return;
        }

        if (command.command === FORWARD) {
            this.ferry.addPosition(this.waypoint.getCoordinates().clone().multiply(command.value));
            return;
        }

        throw new Error(`Unknown command: "${command.command}".`);
    }
};
