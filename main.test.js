const ship = require('./main');
const gameboard = require('./main');
const ship1 = new ship(5);

test('gets the length of the ship', () => {
  expect(new ship(3).length).toBe(3);
});

// Gets the length of ship1
test('get length of ship1', () => {
  expect(ship1.length).toBe(5);
});
// ship1 takes a hit()
test('ship1 takes a hit', () => {
  ship1.hit();
  expect(ship1.hits).toBe(1);
});

// tests to see if the ship has sunk
test('ship2 is sunk', () => {
    const ship2 = new ship(2);
    ship2.hit();
    ship2.hit();
    expect(ship2.isSunk()).toBe(true);
  });

  test('gameboard measures 10 x 10', () => {
    expect(gameboard(10, 10)).toBe(10, 10)
  });