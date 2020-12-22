export function parse(direction) {
    const matches = direction.match(/^(.)(\d+)$/);
    if (!matches) {
        throw new Error(`Unable to parse directions: "${direction}"`);
    }

    return {
        command: matches[ 1 ],
        value: parseInt(matches[ 2 ]),
    };
}
