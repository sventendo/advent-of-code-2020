export const AdapterKit = class {
    constructor(values) {
        values.push(0);
        values.push(Math.max(...values) + 3);
        this.allValues = Object.fromEntries(values.map(value => [ value, 0 ]));
    }

    useAdaptersOfType(type) {
        const values = Object.keys(this.allValues);
        values
            .map(value => {
                let valueAdaptingTo = this.allValues[ parseInt(value) + type ];
                let valueAdaptingFrom = this.allValues[ value.toString() ];
                if (valueAdaptingTo !== undefined && valueAdaptingFrom === 0) {
                    this.allValues[ value ] = type;
                }
            });

        return Object.values(this.allValues)
            .filter((value) => {
                return value === type;
            })
            .length;
    }

    countCombinations() {
        const chainsOfOnes = this.countChainsOfOne();

        let combinations = 1;

        // Looking at the values in example 2 - there are 4 chains of 5 consecutive one-jolt adapters.
        // The result is divisible by 7*7*7*7. There are clues that led to a lot of trial and error.
        const exponentialFactorMap = [
            1,
            1,
            1,
            2,
            4,
            7,
        ];
        for (const [ index, value ] of Object.entries(chainsOfOnes)) {
            let factor = Math.pow(exponentialFactorMap[ parseInt(index) ], value);
            combinations *= factor;
        }
        return combinations;
    }

    countChainsOfOne() {
        let values = Object.keys(this.allValues).map(value => parseInt(value));

        let links = {};
        let linkType = 1;
        for (const [ index, value ] of values.entries()) {
            if (values[ index + 1 ] === value + 1) {
                linkType++;
            } else {
                links[ linkType ] = links[ linkType ] || 0;
                links[ linkType ]++;
                linkType = 1;
            }
        }

        return links;
    }
};
