/**
 * Given an array, return an object that returns the mean, median and mode of the numbers in the array
 *
 * Complexity: O()
 */
function getMean(arr) {
  let sum = 0;
  let mean = 0;
  
  arr.forEach((num) => sum += num);
  
  mean = sum / arr.length;
  
  return mean
}

function getMedian(arr) {
  arr.sort((a, b) => a - b);
  let median = 0;
  
  if (arr.length % 2 !== 0) {
    median = arr[Math.floor(arr.length / 2)];
  } else {
    const mid1 = arr[(arr.length / 2) - 1];
    const mid2 = arr[(arr.length / 2)];
  
    median = (mid1 + mid2) / 2;
  }
  
  return median;
}

function getMode(arr) {
  const modeObj = {};
  
  arr.forEach((num) => {
    if (!modeObj[num]) {
      modeObj[num] = 0
    }
    modeObj[num]++;
  });
  
  let maxFrequency = 0;
  let modes = [];
  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [ num ];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) {
      modes.push(num);
    }
  }
  
  if (modes.length === Object.keys(modeObj).length) {
    modes = [];
  }
  
  return modes;
}

function meanMedianMode(arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr),
  };
}

console.log(meanMedianMode([3, 5, 6, 2, 3, 4, 2, 7, 4, 8, 5, 2]));