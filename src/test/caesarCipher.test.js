import caesar from '../caesarCipher';

test('should return the correct cipher with a key of 1 and no punctuation', () => {
  expect(caesar('attack at dawn', 1)).toBe('buubdl bu ebxo');
});

test('should return the correct cipher with punctuation', () => {
  expect(caesar('alea jacta Est!', 1)).toBe('bmfb kbdub ftu!');
});

test('should wrap from z to a', () => {
  expect(caesar('veni vidi vici', 10)).toBe('foxs fsns fsms');
});
