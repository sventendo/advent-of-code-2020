import { cartesianProduct, checkSumMinMax } from './array-utility';

test('sum', () => {
    let result = cartesianProduct([ 1, 2, 3, 5 ]);
    result.sort();

    expect(result).toEqual([ 3, 4, 5, 6, 7, 8 ]);
});

test('checksum_min_max', () => {
    expect(checkSumMinMax([ 15, 25, 47, 40 ])).toBe(62);
});
