const ship = require('./main');
const ship1 = ship(5);

test('gets the length of the ship', () => {
  expect(ship(3).length).toBe(3);
});

// Gets the length of ship1 BEFORE a hit()
test('get length of ship1', () => {
  expect(ship1.length).toBe(5);
});
// ship1 takes a hit()
test('ship1 takes a hit', () => {
  expect(ship1.hit().hits).toBe(1);
});
