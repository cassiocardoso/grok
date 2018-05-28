/**
 * Generate a note excerpt from a given text.
 * Consider all words are lower cased and there are no punctuations.
 * If a word is repeated more than once in the note, it must have at least this amount of occurencies in the magazine text.
 *
 * Complexity: O(n+m)
 */
function harmlessRansomNote(noteText, magazineText) {
  const noteArr = noteText.split(' ');
  const magazineArr = magazineText.split(' ');
  const magazineObj = {};
  let noteIsPossible = true;
  
  // Create a hash table of the existing words in the magazine text
  magazineArr.forEach((word) => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0
    }
    
    magazineObj[word] += 1;
  });
  
  // Go through all the words in the note and start comparing with the existing words in the magazine text
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word] -= 1;
      
      if (magazineObj[word] < 0) {
        noteIsPossible = false;
      }
    } else {
      noteIsPossible = false;
    }
  });
  
  return console.log(`Note is possible? ${noteIsPossible}`);
}

const NOTE_TEXT = 'this is a note for you from a secret admirer';
const MAGAZINE_TEXT = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice for you';

harmlessRansomNote(NOTE_TEXT, MAGAZINE_TEXT);