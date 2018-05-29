/**
 * Given a string, reverse every word in the string and return the new string
 *
 * Complexity: O(n)
 */
function reverseWords(string) {
  if (!string || !string.length) {
    return '';
  }
  
  const words = string.split(' ');
  const reversedWords = [];
  
  words.forEach(word => {
    let newString = '';
    
    for (let i = word.length - 1; i >= 0; i--) { 
      newString += word[i];
    }
    
    reversedWords.push(newString);
  });
  
  return reversedWords.join(' ');
}

console.log(reverseWords('BBQ burgers and mac cheese'));