// General API utility functions

export const dateToRFC = (d) => {
    // removes the fractional seconds from the ISO string
    return d.toISOString().replace(/\.\d{3}Z$/, 'Z');
}
