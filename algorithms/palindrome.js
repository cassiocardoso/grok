/**
 * Check if an input is palindrome or not.
 * No regex available. String is lowercased. Punctuation is ignored.
 *
 * Complexity: O(n)
 */
function isPalindrome(str) {
  string = str.toLowerCase();
  const charactersArr = string.split('');
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const lettersArr = [];
  
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });
  
  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('subi no onibus'));
console.log(isPalindrome('meat'));