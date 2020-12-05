export function part1(lines) {
    return treesHitForSlope(lines, 3, 1);
}

export function part2(lines) {
    const slopes = [
        [ 1, 1 ],
        [ 3, 1 ],
        [ 5, 1 ],
        [ 7, 1 ],
        [ 1, 2 ],
    ];

    return slopes.map(slope => treesHitForSlope(lines, ...slope))
        .reduce((accumulator, value) => accumulator * value);
}

export function treesHitForSlope(lines, right, down) {
    let treesHit = 0;
    let column = 0;
    lines.map((rowData, y) => {
        if (y % down === 0) {
            if (rowData[ (column) % rowData.length ] === '#') {
                treesHit++;
            }
            column += right;
        }
    });

    return treesHit;
}
