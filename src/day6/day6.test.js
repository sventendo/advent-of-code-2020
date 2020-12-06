import { readInput } from '../readInput';
import { countAnswersEveryoneAnsweredYesForGroup, countYesAnswersForGroup, extractGroups } from './day6';

test('countYesAnswersForSingleGroup', () => {
    let group = [ 'abc'.split('') ];
    console.log(group);
    expect(countYesAnswersForGroup(group)).toBe(3);
});

test('countYesAnswersForMultipleGroups', () => {
    const lines = readInput('day6_example.txt').split('\n');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countYesAnswersForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    expect(yesAnswers).toBe(11);
});

test('part 1', () => {
    const lines = readInput('day6.txt').split('\n');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countYesAnswersForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    console.log(yesAnswers);
})

test('sumOfAllYesAnswersForMultipleGroups', () => {
    const lines = readInput('day6_example_all_yes.txt').split('\n');
    const groups = extractGroups(lines);

    const yesAnswers = groups.map(group => countAnswersEveryoneAnsweredYesForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    expect(yesAnswers).toBe(6);
});

test('part 2', () => {
    const lines = readInput('day6.txt').split('\n');
    const groups = extractGroups(lines);

    const allYesAnswers = groups.map(group => countAnswersEveryoneAnsweredYesForGroup(group))
        .reduce((accumulator, value) => accumulator + value);

    console.log(allYesAnswers);
})
