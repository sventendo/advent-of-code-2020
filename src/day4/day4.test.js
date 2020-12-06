import { extractPassports, getValidPassports } from './day4';
import { readInput } from '../readInput';

test('extractsPassportData', () => {
    const lines = readInput('day4_example.txt').split('\n');

    expect(extractPassports(lines)).toHaveLength(4);
});

test('validatePassportsFieldsPresent', () => {
    const lines = readInput('day4_example.txt').split('\n');
    const passports = extractPassports(lines);

    const rules = {
        byr: (value) => !!value,
        iyr: value => !!value,
        eyr: value => !!value,
        hgt: value => !!value,
        hcl: value => !!value,
        ecl: value => !!value,
        pid: value => !!value,
    };

    expect(getValidPassports(passports, rules)).toHaveLength(2);
});

const rulesPresence = {
    byr: (value) => !!value,
    iyr: value => !!value,
    eyr: value => !!value,
    hgt: value => !!value,
    hcl: value => !!value,
    ecl: value => !!value,
    pid: value => !!value,
};

test('part 1', () => {
    const lines = readInput('day4.txt').split('\n');
    const passports = extractPassports(lines);

    console.log(getValidPassports(passports, rulesPresence).length);
});

const rulesSpecific = {
    byr: value => value.length === 4 && value >= 1920 && value <= 2002,
    iyr: value => value.length === 4 && value >= 2010 && value <= 2020,
    eyr: value => value.length === 4 && value >= 2020 && value <= 2030,
    hgt: value => {
        const match = value.match(/^(\d+)(in|cm)$/);
        if (match && match[ 2 ] === 'cm') {
            return match[ 1 ] >= 150 && match[ 1 ] <= 193;
        }
        if (match && match[ 2 ] === 'in') {
            return match[ 1 ] >= 59 && match[ 1 ] <= 76;
        }
        return false;
    },
    hcl: value => value.match(/^#[0-9a-f]{6}$/) !== null,
    ecl: value => [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ].includes(value),
    pid: value => value.match(/^\d{9}$/) !== null,
};

test('examplePassportsFieldsInvalid', () => {

    const lines = readInput('day4_invalid_passports.txt').split('\n');
    const passports = extractPassports(lines);

    expect(getValidPassports(passports, rulesSpecific)).toHaveLength(0);
});
test('examplePassportsFieldsValid', () => {

    const lines = readInput('day4_valid_passports.txt').split('\n');
    const passports = extractPassports(lines);

    expect(getValidPassports(passports, rulesSpecific)).toHaveLength(4);
});

test('part 2', () => {
    const lines = readInput('day4.txt').split('\n');
    const passports = extractPassports(lines);


    console.log(getValidPassports(passports, rulesSpecific).length);
});
