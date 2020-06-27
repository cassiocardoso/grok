/**
 * Sort a given array using the insertion sort algorithm.
 *
 * It works by sorting the element from the beginning of the array by adding elements to the sorted partition
 * It's an in-place, stable algorithm
 *
 * Time complexity: O(n^2)
 */

function insertionSort(array) {}

function swap(array, i, j) {
	if (i === j) {
		return;
	}

	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

console.log(insertionSort([7, 13, 31, -5, 0, -8, 2, 7, 1]));
