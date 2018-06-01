/**
 * Given an array, return it sorted using the bubble sort algorithm
 *
 * Complexity: O()
 */
function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}

console.log(bubbleSort([7, 7, 8, 2, 13, 31, -5, 23, 6, 4, 23, 56, 1, 0]));