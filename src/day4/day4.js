export function extractPassports(lines) {
    let passports = [];
    let index = 0;

    lines.map(line => {
        passports[ index ] = passports[ index ] || [];
        if (line.trim() === '') {
            index++;
            return;
        }

        line.split(' ').map(bit => {
            const [ property, value ] = bit.split(':');
            passports[ index ][ property ] = value;
        });
    });

    return passports;
}

export function getValidPassports(passports, required) {
    return passports.filter(passport => validatePassport(passport, required));
}

export function validatePassport(passport, rules) {
    const properties = Object.keys(passport);

    for (const [ rule, callback ] of Object.entries(rules)) {
        if (!(properties.includes(rule)) || callback(passport[ rule ]) === false) {
            return false;
        }
    }
    return true;
}

