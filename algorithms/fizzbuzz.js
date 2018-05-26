/**
 * Classic FizzBuzz problem
 *
 * Print every number from 1 to 100.
 * If number is multiple of 3 print Fizz instead of the number.
 * If number is multiple of 5 print Buzz instead of the number.
 * If number is multiple of 3 and 5 print FizzBuzz instead of the number.
 *
 * Complexity: O(n)
 */
function fizzbuzz(num) {
  const isFizz = (num) => num % 3 === 0;
  const isBuzz = (num) => num % 5 === 0;
  const isFizzBuzz = (num) => num % 15 === 0;
  const result = [];
  
  for (let i = 1; i <= num; i++) {
    if (isFizzBuzz(i)) {
      console.log('FizzBuzz');
    } else if (isFizz(i)) {
      console.log('Fizz');
    } else if (isBuzz(i)) {
      console.log('Buzz');
    } else {
      console.log(i); 
    }
  }
}

fizzbuzz(30);