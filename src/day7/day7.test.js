import { readInput } from '../readInput';
import { extractRules, getOuterMostBagsForColor, getTotalAmountOfBags } from './day7';

test('extract rules', () => {
    const lines = readInput('day7_example.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    expect(Object.keys(rules).length).toBe(9);
});

test('count possible outer-most bags for color', () => {
    const lines = readInput('day7_example.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    const outerMostBags = getOuterMostBagsForColor('shiny gold', rules);
    expect(Object.keys(outerMostBags).length).toBe(4);
});

test('part 1', () => {
    const lines = readInput('day7.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    const outerMostBags = getOuterMostBagsForColor('shiny gold', rules);
    console.log(Object.keys(outerMostBags).length);
});

test('count total amount of bags inside color', () => {
    const lines = readInput('day7_example.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    const totalAmount = getTotalAmountOfBags('shiny gold', rules);
    expect(totalAmount).toBe(32);
});

test('count total amount of bags inside color with more rules', () => {
    const lines = readInput('day7_example_2.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    const totalAmount = getTotalAmountOfBags('shiny gold', rules);
    expect(totalAmount).toBe(126);
});

test('part 2', () => {
    const lines = readInput('day7.txt').split('\n').filter(line => line);
    const rules = extractRules(lines);

    const totalAmount = getTotalAmountOfBags('shiny gold', rules);
    console.log(totalAmount);
});
