const { memoizedFibonacci, recursiveFibonacci } = require("./../fibonacci");

describe('Fibonacci algorithm', () => {
  describe('memoized version', () => {
    it('should return correct value', () => {
      expect.assertions(4);
      expect(memoizedFibonacci(0)).toBe(1);
      expect(memoizedFibonacci(1)).toBe(1);
      expect(memoizedFibonacci(5)).toBe(5);
      expect(memoizedFibonacci(9)).toBe(34);
    });

    it('should throw an error if a negative number is passed', () => {
      expect((() => memoizedFibonacci(-1))).toThrowError('Negative numbers are not allowed');
    });

    it('should throw an error no number is passed', () => {
      expect((() => memoizedFibonacci('lorem'))).toThrowError('You must enter a number');
      expect((() => memoizedFibonacci([]))).toThrowError('You must enter a number');
      expect((() => memoizedFibonacci({}))).toThrowError('You must enter a number');
    });
  });

  describe('recursive version', () => {
    it('should return correct value', () => {
      expect.assertions(3);
      expect(recursiveFibonacci(0)).toBe(1);
      expect(recursiveFibonacci(1)).toBe(1);
      expect(recursiveFibonacci(5)).toBe(5);
    });
  });
});
