const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('returns Fizz when number is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns Buzz when number is 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('returns FizzBuzz when number is 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('returns the number when otherwise', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});