const data = {
    well01: [true, 1, 2, 3, 2, 2, 1],
    well02: [true, 3, 2, 2, 1, 1, 2],
    well03: [false, 1, 3, 2, 1, 2, 2],
    well04: [true, 4, 2, 2, 1, 1, 3]
};

const timestamps = [
    { timestamp: 1 },
    { timestamp: 2 },
    { timestamp: 3 },
    { timestamp: 4 },
    { timestamp: 5 },
    { timestamp: 6 }
];

const labels = {
    well01: 'Well 01',
    well02: 'Well 02',
    well03: 'Well 03',
    well04: 'Well 04',
};

const colors = {
    well01: '#1DDAE0',
    well02: '#991DE0',
    well03: '#ED698D',
    well04: '#BDED1D',
};

export const chartableData = {
    data: data,
    timestamps: timestamps,
    labels: labels,
    colors: colors,
};