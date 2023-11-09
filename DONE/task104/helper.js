const toLowerCase = (s) => {
    return s.toLowerCase();
}

const toUpperCase = (s) => {
    return s.toUpperCase();
}

export const createSamples = (s) => {
    const lower = toLowerCase(s);
    const upper = toUpperCase(s);
    return `${lower}${upper}`;
}