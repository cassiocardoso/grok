/**
 * Given an array, return it sorted using the bubble sort algorithm
 *
 * Complexity: O(n^2)
 */
function bubbleSort(array) {
  for (let lastUnsortedIndex = array.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--) {
  	for (let i = 0; i < lastUnsortedIndex; i++) {
  		if (array[i] > array[i + 1]) {
  			swap(array, i, i + 1);
			}
		}
  }

  return array;
}

function swap(array, i, j) {
	if (i === j) {
		return;
	}

	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

console.log(bubbleSort([7, 7, 8, 2, 13, 31, -5, 23, 6, 4, 23, 56, 1, 0]));
