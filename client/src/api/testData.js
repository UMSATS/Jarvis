/* 
* Contains randomly generated datasets, useful
* for testing data display components without
* connecting to the database.
*/

let hour = 1000 * 60 * 60;

/* Payload datasets */
export const testTemperatureData = Array.from({ length: 4 }, () =>
  Array.from({ length: 720 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 6 - 3).toFixed(1)
  ])
);

export const testLuminosityData = Array.from({ length: 4 }, () =>
  Array.from({ length: 720 }, (_, i) => [
    Date.now() - i * hour, 
    (Math.random() * 200 + 600).toFixed(0)
  ])
);

export const testWellActivity = [
  1, 1, 0, 1, 
  1, 1, 0, 1,
  1, 1, 0, 1,
  1, 1, 0, 1
]
