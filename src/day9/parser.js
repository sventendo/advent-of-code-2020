import { cartesianProduct } from './array-utility';

export function findFirstInvalidValue(values, preambleSize) {
    for (let index = preambleSize; index < values.length; index++) {
        let from = index - preambleSize;
        let valuesToCheck = values.slice(from, from + preambleSize);
        let validValues = cartesianProduct(valuesToCheck, preambleSize);
        if (validValues.includes(values[ index ]) === false) {
            return values[ index ];
        }
    }
    throw new Error('No invalid value found.');
}

export function findContiguousSetForSum(values, sum) {
    let sumIndex = values.indexOf(sum);
    for (let index = sumIndex - 1; index > 0; index--) {
        let testSum = 0;
        let testIndex = index;
        while (testSum <= sum) {
            if (testIndex < 0) {
                throw new Error('Invalid index.');
            }
            testSum += values[ testIndex ];

            if (testSum === sum) {
                return values.slice(testIndex, index + 1);
            }

            testIndex--;
        }
    }
    throw new Error('No contiguous set found.');
}
