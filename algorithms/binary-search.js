function binarySearch(numArray, key) {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElement = numArray[middleIndex];
  
  if (middleElement === key) {
    return true;
  } else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
     return binarySearch(numArray.splice(0, middleIndex), key);
  }
  
  return false;
}

console.log(binarySearch([1, 4, 7, 10, 11, 15, 29, 30, 31, 42, 47, 49, 50, 51, 55, 56], 56));