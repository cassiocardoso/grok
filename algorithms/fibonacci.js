/**
 * Return the value in the Fibonacci sequence of a given position
 * Complexity: O(2^n)
 */
function recursiveFibonacci(index) {
  if (index < 3) {
    return 1;
  }

  return recursiveFibonacci(index - 1) + recursiveFibonacci(index - 2);
}

/**
 * Return the value in the Fibonacci sequence of a given position
 * Complexity: O(n)
 */
function memoizedFibonacci(index, cache = {}) {
  if (index < 0) {
    return 0;
  } else if (index < 3) {
    return 1;
  } else if (cache[index]) {
    return cache[index];
  }

  return (cache[index] =
    memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache));
}

module.exports = {
  memoizedFibonacci,
  recursiveFibonacci
};
