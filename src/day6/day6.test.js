import { readLines } from '../readInput';
import { countAnswersEveryoneAnsweredYesForGroup, countYesAnswersForGroup, extractGroups } from './day6';

test('countYesAnswersForSingleGroup', () => {
    let group = [ 'abc'.split('') ];
    console.log(group);
    expect(countYesAnswersForGroup(group)).toBe(3);
});

test('countYesAnswersForMultipleGroups', () => {
    const lines = readLines('day6_example.txt');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countYesAnswersForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    expect(yesAnswers).toBe(11);
});

test('part 1', () => {
    const lines = readLines('day6.txt');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countYesAnswersForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    console.log(yesAnswers);
})

test('sumOfAllYesAnswersForMultipleGroups', () => {
    const lines = readLines('day6_example_all_yes.txt');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countAnswersEveryoneAnsweredYesForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    expect(yesAnswers).toBe(6);
});

test('part 2', () => {
    const lines = readLines('day6.txt');
    const groups = extractGroups(lines);

    const allYesAnswers = groups.map(group => countAnswersEveryoneAnsweredYesForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    console.log(allYesAnswers);
})
