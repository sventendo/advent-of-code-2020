export function part1(values) {
    for (let indexA = 0; indexA < values.length; indexA++) {
        for (let indexB = indexA; indexB < values.length; indexB++) {
            if (values[ indexA ] + values[ indexB ] === 2020) {
                return values[ indexA ] * values[ indexB ];
            }
        }
    }

    console.error('No match found.');
}

export function part2(values) {
    for (let indexA = 0; indexA < values.length; indexA++) {
        for (let indexB = indexA; indexB < values.length; indexB++) {
            if (values[ indexA ] + values[ indexB ] > 2020) {
                continue;
            }

            for (let indexC = indexB; indexC < values.length; indexC++) {
                if (values[ indexA ] + values[ indexB ] + values[ indexC ] === 2020) {
                    return values[ indexA ] * values[ indexB ] * values[ indexC ];
                }
            }
        }
    }

    console.error('No match found.');
}
