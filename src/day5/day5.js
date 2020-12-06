export function calculateSeatNumber(code) {
    const row = parseInt(code.substr(0, 7).replace(/F/g, '0').replace(/B/g, '1'), 2);
    const column = parseInt(code.substr(7, 3).replace(/L/g, '0').replace(/R/g, '1'), 2);

    return row * 8 + column;
}
