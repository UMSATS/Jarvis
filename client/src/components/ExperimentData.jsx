let hour = 1000 * 60 * 60;

export const temperatureData = Array.from({ length: 4 }, () =>
  Array.from({ length: 720 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 6 - 3).toFixed(1)
  ])
);

export const luminosityData = Array.from({ length: 4 }, () =>
  Array.from({ length: 720 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 200 + 600).toFixed(0)
  ])
);

export const wellActivity = [
  1, 1, 0, 1, 
  1, 1, 0, 1,
  1, 1, 0, 1,
  1, 1, 0, 1
]

export const labels = Array.from({length: 16}, (_, i) => `Well ${i + 1}`)
