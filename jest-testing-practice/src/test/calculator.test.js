import calculator from '../calculator';

test('should add two numbers and return the sum', () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test('should subtract two numbers and return the rest', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('should divide two numbers and return the quotient', () => {
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test('should multiply two numbers and return the product', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
