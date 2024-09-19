const ship = require('./main');

test('gets the length of the ship', () => {
  expect(ship(4)).toBe(4);
});