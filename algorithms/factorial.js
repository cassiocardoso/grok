/**
 * Given a number, return the factorial value of it
 *
 * Complexity: O(n)
 */
function factorial(num) {
  if (num <= 2) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(4));
