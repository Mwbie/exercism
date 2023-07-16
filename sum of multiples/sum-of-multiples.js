//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// sum-of-multiples.js

export function sum(factors, limit) {
  let sum = 0;
  for (let i = 0; i < limit; i++) {
    if (factors.some((factor) => i % factor === 0)) {
      sum += i;
    }
  }
  return sum;
}
