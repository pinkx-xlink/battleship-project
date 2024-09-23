const Ship = require('./main');
const ships = require('./main');
const ship1 = new Ship('carrier', 5);

test('gets the length of the ship', () => {
  expect(new Ship('example', 3).length).toBe(3);
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

  test('log all the different types of ships', () => {
    expect(ships).toBe([destroyer, submarine, cruiser, battleship, carrier]);
  })