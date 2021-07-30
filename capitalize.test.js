import capitalize from './capitalize';

test('should capitalize first letter only', () => {
  expect(capitalize('hello, world')).toBe('Hello, world');
});

test('should return the input string if first letter is already capitalizzed', () => {
  expect(capitalize('Hello, world')).toBe('Hello, world');
});
