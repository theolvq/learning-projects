import analyze from '../analyze';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('should return all expected values from an array', () => {
  expect(analyze(array)).toEqual({ average: 55, min: 1, max: 10, length: 10 });
});
