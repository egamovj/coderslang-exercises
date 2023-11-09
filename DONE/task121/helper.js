export const min = (a, b, c) => {
    let minimum = a;

    if (b < minimum) {
        minimum = b;
    }

    if (c < minimum) {
        minimum = c;
    }

    return minimum;
}