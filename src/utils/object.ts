export const sortObject = (object: Record<string, any>) => {
    const keys = Object.keys(object);
    keys.sort((a, b) => a.localeCompare(b));

    return keys.reduce((previous: any, current) => {
        previous[current] = object[current];
        return previous;
    }, {});
};
