const temperatureData = {
  well01: [1, 2, 3, 2, 2, 1],
  well02: [3, 2, 2, 1, 1, 2],
  well03: [1, 3, 2, 1, 2, 2],
  well04: [4, 2, 2, 1, 1, 3]
};

const luminosityData = {
  well01: [240, 140, 640, 650, 300, 200],
  well02: [590, 380, 440, 780, 550, 690],
  well03: [630, 480, 780, 650, 460, 780],
  well04: [160, 790, 740, 600, 730, 440]
};

const activeWells = {
  well01: true,
  well02: true,
  well03: false,
  well04: true
}

const timestamps = [
  { timestamp: 1 },
  { timestamp: 2 },
  { timestamp: 3 },
  { timestamp: 4 },
  { timestamp: 5 },
  { timestamp: 6 }
];

export const chartableTemperatureData = {
  data: temperatureData,
  timestamps: timestamps,
  activity: activeWells
}

export const chartableLuminosityData = {
  data: luminosityData,
  timestamps: timestamps,
  activity: activeWells
}

const labels = {
  well01: 'Well 01',
  well02: 'Well 02',
  well03: 'Well 03',
  well04: 'Well 04'
};

const colors = {
  well01: '#1DDAE0',
  well02: '#991DE0',
  well03: '#ED698D',
  well04: '#BDED1D'
};

export const graphicalData = {
  labels: labels,
  colors: colors
};