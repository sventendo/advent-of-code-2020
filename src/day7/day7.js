export function extractRules(lines) {
    let rules = {};
    lines.map(line => {
        const matches = line.match(/^(.+) bags contain/);
        const bagOutsideColor = matches[ 1 ];
        rules[ bagOutsideColor ] = {};

        if (line.match(/contain no other bag/)) {
            return;
        }

        line.match(/(\d[\w\s]+)/g).map(
            bagInside => {
                const [ , amount, bagInsideColor ] = bagInside.match(/^(\d) (.*) bag/);
                rules[ bagOutsideColor ][ bagInsideColor ] = parseInt(amount);
            },
        );
    });

    return rules;
}

let failSafe;

export function getOuterMostBagsForColor(color, rules) {
    failSafe = 0;
    return getValidBagsForColor(color, rules);
}


function getValidBagsForColor(color, rules, allBags = {}) {
    failSafe++;
    if (failSafe > 1000) {
        throw new Error('Recursion maximum reached. Aborting.');
    }
    for (const colorCandidate in rules) {
        if (color in rules[ colorCandidate ]) {
            if (colorCandidate in allBags) {
                continue;
            }
            allBags[ colorCandidate ] = rules[ colorCandidate ];
            getValidBagsForColor(colorCandidate, rules, allBags);
        }
    }
    return allBags;
}

export function getTotalAmountOfBags(color, rules) {
    failSafe = 0;
    return getAmountOfBags(color, rules);
}

function getAmountOfBags(color, rules, multiplier = 1, totalAmount = 0) {
    failSafe++;
    if (failSafe > 1000) {
        throw new Error('Recursion maximum reached. Aborting.');
    }
    for (const rule in rules[ color ]) {
        let amount = rules[ color ][ rule ];
        totalAmount += amount * multiplier;
        totalAmount = getAmountOfBags(rule, rules, amount * multiplier, totalAmount);
    }

    return totalAmount;
}
