/**
 * Without using `.flat()`, create a function to flatten an array
 *
 * const arr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10]
 * flatten(arr) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

function flatten(arr) {
	return arr.reduce((acc, item) => {
		if (Array.isArray(item)) {
			acc = acc.concat(flatten(item));
		} else {
			acc.push(item);
		}

		return acc;
	}, [])
}

const arr = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
console.log(flatten(arr));

const arr2 = [];
console.log(flatten(arr2));

const arr3 = [1, 2, 3];
console.log(flatten(arr3));
