/**
 * Given an array of positive integers and a target value, return all possible sets that add up to the target value.
 */

const array = [2, 4, 6, 10];
const target = 16;

function recursiveCountSets(array, target) {
	return recursiveCountToI(array, target, array.length - 1);
}

function recursiveCountToI(array, target, i) {
	if (target === 0) {
		return 1;
	} else if (target < 0) {
		return 0;
	} else if (i < 0) {
		return 0;
	} else if (target < array[i]) {
		return recursiveCountToI(array, target, i - 1);
	} else {
		return recursiveCountToI(array, target - array[i], i - 1) + recursiveCountToI(array, target, i - 1)
	}
}

// console.log('recursive solution: ', recursiveCountSets(array, target));

let cache = {};

function dynamicCountSets(array, target) {
	return dynamicCount(array, target, array.length - 1, cache);
}

function dynamicCount(array, target, i, cache) {
	let key = `${target}:${i}`;
	let value;

	if (cache[key]) {
		return cache[key];
	}

	if (target === 0) {
		return 1;
	} else if (target < 0) {
		return 0;
	} else if (i < 0) {
		return 0;
	} else if (target < array[i]) {
		value = dynamicCount(array, target, i - 1, cache);
	} else {
		value = (dynamicCount(array, target - array[i], i - 1, cache) + dynamicCount(array, target, i - 1, cache))
	}

	cache[key] = value;

	return value;
}

console.log('dynamic solution', dynamicCountSets(array, target));
