const data = {
    well01: [true, 240, 140, 640, 650, 300, 200],
    well02: [true, 590, 380, 440, 780, 550, 690],
    well03: [false, 630, 480, 780, 650, 460, 780],
    well04: [true, 160, 790, 740, 600, 730, 440]
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