export function readInput(fileName) {
    const fs = require('fs');
    const path = require('path');

    const inputPath = path.join(__dirname, '..', 'resources', 'puzzle_input', fileName);
    const input = fs.readFileSync(inputPath);

    return input.toString();
}
