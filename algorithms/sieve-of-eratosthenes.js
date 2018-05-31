/**
 * Given a number, return an array of all prime numbers up to the given one
 *
 * Complexity: O()
 */
function sieveOfEratosthenes(num) {
  // Array of prime numbers where each index will be the number
  // and the value will be true or false if it's prime number or not
  const primes = [];
  const result = [];
  
  for (let i = 0; i <= num; i++) {
    primes[i] = true;
  }
  
  primes[0] = false;
  primes[1] = false;
  
  for (let j = 2; j <= Math.sqrt(num); j++) {
    for (let k = 2; j * k <= num; k++) {
      primes[j * k] = false;
    }
  }
  
  for (let l = 0; l <= primes.length; l++) {
    if (primes[l]) {
      result.push(l);
    }
  }
  
  return result;
}

console.log(sieveOfEratosthenes(20));