/**
 * Given a string, return a new string where each letter is shifted
 * by a given amount of positions in the alphabet.
 *
 * Complexity: O(n)
 */
function caesarCipher(string, shift) {
  // Handle numbers that are outside the alphabet length (e.g. -15, 677)
  const SHIFT = shift % 26;

  const lowerCaseString = string.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerCaseString.length; i++) {
    let currentLetter = lowerCaseString[i];

    // Handle space character (just add it to the new string)
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }

    const currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + SHIFT;

    // Handle corner cases where new index is greater than the length or smaller than zero
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    if (newIndex < 0) {
      newIndex = 26 + newIndex;
    }

    // Handle given uppercased letters
    if (string[i] === string[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else {
      newString += alphabet[newIndex];
    }
  };

  return newString;
}
