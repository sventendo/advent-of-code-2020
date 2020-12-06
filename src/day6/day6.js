export function countYesAnswersForGroup(group) {
    const answers = new Set();
    group.map(member => member.forEach(answer => answers.add(answer)));
    return answers.size;
}

export function extractGroups(lines) {
    let groups = [];
    let index = 0;

    lines.map(line => {
        groups[ index ] = groups[ index ] || [];
        if (line.trim() === '') {
            index++;
            return;
        }

        groups[ index ].push(line.split(''));
    });

    return groups;
}

export function countAnswersEveryoneAnsweredYesForGroup(group) {
    const answers = new Set(group.shift());
    for (const member of group) {
        [ ...answers.values() ].forEach(value => {
            if (member.includes(value) === false) {
                answers.delete(value);
            }
        });
    }

    return answers.size;
}
