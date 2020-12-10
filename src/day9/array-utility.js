export function cartesianProduct(values) {
    let product = [];
    for (const [ index, element ] of values.entries()) {
        for (let otherElementIndex = index + 1; otherElementIndex < values.length; otherElementIndex++) {
            product.push(element + values[ otherElementIndex ]);
        }
    }

    return product;
}

export function checkSumMinMax(values) {
    return Math.min(...values) + Math.max(...values);
}
