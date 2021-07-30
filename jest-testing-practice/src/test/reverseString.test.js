import reverseString from '../reverseString';

test('should return a reversed string', () => {
  expect(reverseString('Hello, world')).toBe('dlrow ,olleH');
});
