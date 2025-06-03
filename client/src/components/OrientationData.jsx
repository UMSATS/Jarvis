/* Quaternions are in the form [x, y, z, w] */

import * as THREE from 'three'

export const timestamps = [
  0,
  1,
  2,
  3,
  4
]

const rotations = [
  [0, 0, 0, 1],
  [0, 0.7071, 0, 0.7071],   // 90 degrees about y axis
  [-0.7071, 0, 0, 0.7071],  // -90 degrees about x axis
  [0, 0, 0.7071, 0.7071],
  [0, -0.7071, 0, 0.7071]
]

export const orientationData = []

// Create absolute orientations using rotations
const orientation = new THREE.Quaternion()
for (let i = 0; i < rotations.length; i++) {
  const rotation = new THREE.Quaternion(...rotations[i])
  orientation.multiply(rotation).normalize()
  orientationData.push(orientation.clone())
}
