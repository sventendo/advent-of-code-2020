import { calculateSeatNumber } from './day5';
import { readInput } from '../readInput';

test('calculate seat number', () => {
    expect(calculateSeatNumber('FBFBBFFRLR')).toBe(357);
});

test('part1', () => {
    const lines = readInput('day5.txt').split('\n').filter(line => line);
    const seatNumbers = lines.map(line => calculateSeatNumber(line));
    console.log(Math.max(...seatNumbers));
});

test('part2', () => {
    const lines = readInput('day5.txt').split('\n').filter(line => line);
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
