import { calculateSeatNumber } from './day5';
import { readLines } from '../readInput';

test('calculate seat number', () => {
    expect(calculateSeatNumber('FBFBBFFRLR')).toBe(357);
});

test('part 1', () => {
    const lines = readLines('day5.txt');
    const seatNumbers = lines.map(line => calculateSeatNumber(line));
    console.log(Math.max(...seatNumbers));
});

test('part 2', () => {
    const lines = readLines('day5.txt');
    const seatNumbers = lines.map(line => calculateSeatNumber(line));
    const lowestSeat = Math.min(...seatNumbers);
    const highestSeat = Math.max(...seatNumbers);
    for (let seatNumber = lowestSeat; seatNumber < highestSeat; seatNumber++) {
        if (seatNumbers.includes(seatNumber) === false) {
            console.log(seatNumber);
            return;
        }
    }

    throw new Error('No free seat found.');
});
