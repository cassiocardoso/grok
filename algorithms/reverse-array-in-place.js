/**
 * Given an array, reverse an return it without using another temporary array
 *
 * Complexity: O(n/2)
 */
function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));