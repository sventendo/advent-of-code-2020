import { FLOOR, SEAT_EMPTY } from './waiting-area';

export function readLayout(lines) {
    return lines
        .map(line =>
            line.replaceAll('L', SEAT_EMPTY)
                .replaceAll('.', FLOOR)
                .split('')
                .map(value => parseInt(value)),
        );
}
