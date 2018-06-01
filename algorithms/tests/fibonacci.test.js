const { memoizedFibonacci, recursiveFibonacci } = require("./../fibonacci");

describe('Fibonacci algorithm', () => {
  describe('memoized version', () => {
    it('should return correct value', () => {
      expect.assertions(5);
      expect(memoizedFibonacci(-1)).toBe(0);
      expect(memoizedFibonacci(0)).toBe(1);
      expect(memoizedFibonacci(1)).toBe(1);
      expect(memoizedFibonacci(5)).toBe(5);
      expect(memoizedFibonacci(9)).toBe(34);
    });
  });

  describe('recursive version', () => {
    it('should return correct value', () => {
      expect.assertions(4);
      expect(recursiveFibonacci(-1)).toBe(1);
      expect(recursiveFibonacci(0)).toBe(1);
      expect(recursiveFibonacci(1)).toBe(1);
      expect(recursiveFibonacci(5)).toBe(5);
    });
  });
});
