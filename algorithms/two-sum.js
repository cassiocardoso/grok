/**
 * Given an array of numbers, find all pairs that sum to a given value
 *
 * Complexity: O(n)
 */
function twoSum(numArray, sum) {
  const pairs = [];
  const hashTable = [];
  
  for (let i = 0; i < numArray.length; i++) {
    const currentNumber = numArray[i];
    const counterpart = sum - currentNumber;
    
    if (hashTable.indexOf(counterpart) !== -1) {
      pairs.push([currentNumber, counterpart]);
    }
    
    hashTable.push(currentNumber);
  }
  
  return pairs;
}

const numArray = [1, 2, 5, 28, 39, 41, 34, 12, 14, 40];
const sum = 42;

console.log(twoSum(numArray, sum));




// ------

let left = 0;
let right = arr.length;
let sum = 0;

while (left < right) {
 sum = arr[left] + arr[right];
 if(sum == target) {
  return true;
 } else if (sum > target) {
  right--;
 } else if (sum < target) {
  left++;
 }
}