export function part1(lines) {
    let validPasswords = 0;

    lines.forEach(line => {
        const bits = line.match(/(\d+)\-(\d+)\s(.):\s(\w+)/);
        const occurrences = (bits[4].match(new RegExp(bits[3], 'g')) || []).length;
        const valid = occurrences >= bits[1] && occurrences <= bits[2];

        if (valid) {
            validPasswords++;
        }
    });

    return validPasswords;
}

export function part2(lines) {
    let validPasswords = 0;

    lines.forEach(line => {
        const bits = line.match(/(\d+)\-(\d+)\s(.):\s(\w+)/);
        const valid = bits[4][bits[1] - 1] === bits[3] ^ bits[4][bits[2] - 1] === bits[3];

        if (valid) {
            validPasswords++;
        }
    });

    return validPasswords;
}
