let hour = 1000 * 60 * 60;

export const temperatureData = Array.from({ length: 4 }, () =>
  Array.from({ length: 48 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 6 - 3).toFixed(1)
  ])
);

export const luminosityData = Array.from({ length: 4 }, () =>
  Array.from({ length: 48 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 200 + 600).toFixed(0)
  ])
);

/* What the data array actually looks like
export const temperatureData = [
  [
    [Date.now(), 1],
    [Date.now() - 1 * hour, 2],
    [Date.now() - 2 * hour, 3],
    [Date.now() - 3 * hour, 2],
    [Date.now() - 4 * hour, 2],
    [Date.now() - 5 * hour, 1]
  ],
  [
    [Date.now(), 3],
    [Date.now() - 1 * hour, 2],
    [Date.now() - 2 * hour, 2],
    [Date.now() - 3 * hour, 1],
    [Date.now() - 4 * hour, 1],
    [Date.now() - 5 * hour, 2]
  ],
  [
    [Date.now(), 1],
    [Date.now() - 1 * hour, 3],
    [Date.now() - 2 * hour, 2],
    [Date.now() - 3 * hour, 1],
    [Date.now() - 4 * hour, 2],
    [Date.now() - 5 * hour, 2]
  ],
  [
    [Date.now(), 4],
    [Date.now() - 1 * hour, 2],
    [Date.now() - 2 * hour, 2],
    [Date.now() - 3 * hour, 1],
    [Date.now() - 4 * hour, 1],
    [Date.now() - 5 * hour, 3]
  ]
]
*/

export const labels = Array.from({length: 4}, (_, i) => `Well ${i + 1}`)
