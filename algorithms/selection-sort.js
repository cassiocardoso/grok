/**
 * Sort a given array using the selection sort algorithm.
 *
 * It works by selecting the biggest element in the array in each iteration and only swapping it at the end of the run.
 * It's an in-place, unstable algorithm
 *
 * Time complexity: O(n^2)
 */

function selectionSort(array) {
	let lastUnsortedIndex = array.length - 1;

	for (lastUnsortedIndex; lastUnsortedIndex > 0; lastUnsortedIndex--) {
		let largest = 0;

		for (let i = 1; i <= lastUnsortedIndex; i++) {
			if (array[i] > array[largest]) {
				largest = i;
			}
		}

		swap(array, largest, lastUnsortedIndex);
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

console.log(selectionSort([7, 7, 8, 2, 13, 31, -5, 0]));
