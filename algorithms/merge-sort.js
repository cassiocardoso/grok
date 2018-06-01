/**
 * Sort a given array using the merge sort algorithm
 *
 * Complexity: O()
 */

// Take in a single, unsorted array and split it into two halves
function mergeSort(array) {
  // If the array has zero or one element, it's 
  if (array.length < 2) {
    return array;
  }
  
  const middleIndex = Math.floor(array.length / 2);
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);
  
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

// Takes two sorted arrays and returns a single sorted array
function merge(array1, array2) {
  let result = [];
  
  // Run this loop while both arrays have, at least, one item
  while (array1.length && array2.length) {
    let lowestNumber;
    
    // Get the lowest number comparing the first element of each array
    // `.shift` method removes the element from the array
    lowestNumber = array1[0] < array2[0] ? array1.shift() : array2.shift();

    
    result.push(lowestNumber);
  }
  
  // Check which array still have some items and push this items to the resulting array
  result = array1.length ? result.concat(array1) : result.concat(array2);
  
  return result;
}

console.log(mergeSort([3, 1, 0, 5, 12, -2, 3, 8, 20, 15, 7, 9]));