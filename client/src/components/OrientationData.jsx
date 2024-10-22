/* Quaternions are in the form [x, y, z, w] */

const BASIS = [0, 0, 0, 1]

export const timestamps = [
  0, // Corresponds to the basis orientation
  1,
  2,
  3,
  4
]

export const rotations = [
  BASIS,
  [0, 0.7071, 0, 0.7071],   // 90 degrees about y axis
  [-0.7071, 0, 0, 0.7071],  // -90 degrees about x axis
  [0, 0, 0.7071, 0.7071],
  [0, -0.7071, 0, 0.7071]
]