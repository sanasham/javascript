const sum = require('./sum');

test('should add numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
