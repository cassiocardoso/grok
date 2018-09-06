/**
 * Implement the division of two integers without using the division,
 * multiplication, or modulus operators.
 * Return the quotient as an integer, ignoring the remainder.
 */
function division(number1, number2) {
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    console.log('ERROR: You must pass numbers');
    
    return;
  }

  if (number2 === 0) {
    console.log('ERROR: You can not divide by 0');
    
    return;
  }
  
  if (number2 === 1) {
    return number1;
  }
  
  if (number1 > 0 && number1 < number2) {
    return 0;
  }
  
  // Calculate the sign of the divisor
  const sign = (number1 < 0) || (number2 < 0) ? -1 : 1;
  
  // Make dividend and divisor positive
  let [dividend, divisor] = [Math.abs(number1), Math.abs(number2)];
  
  // Initialize the quotient
  let quotient = 0;
  
  while (dividend >= divisor) {
    // Decrease the dividend
    dividend -= divisor;

    // Increment the quotient
    quotient += 1;    
  }
  
  return sign * quotient;
}

console.log('test', division(1, 2));