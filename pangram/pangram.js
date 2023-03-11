//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let letter of alphabet) {
    if (!sentence.toLowerCase().includes(letter)) {
      return false;
    }
  }

  return true;
};