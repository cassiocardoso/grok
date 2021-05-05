/**
 * A fixed point in an array is an element whose value is equal to its
 * index. Given a sorted array of distinct elements, return a fixed point,
 * if one exists. Otherwise, return `false`.
 *
 * Examples:
 * Given [-6, 0 , 2, 40], you should return `2`.
 * Given [1, 5, 7, 4] you should return `false`.
 */

// Constant O(n)
function valueOfIndex(arr) {
	let response = false;

	arr.forEach(el => {
		if (arr.indexOf(el) === el) {
			response = el;
		}
	});

	return response;
}

// This is just an optimization where if a matching value is found, the for loop if stopped.
// Instead of a constant O(n), it becomes the worst case.
function valueOfIndex2(arr) {
	let response = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr[i]) {
			response = arr[i];
			break;
		}
	}

	return response;
}

console.log(valueOfIndex2([-6, 0 , 2, 40]));
console.log(valueOfIndex2([1, 5, 7, 4]));
