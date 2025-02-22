const { test, expect } = require('@jest/globals');

const Ship = require('./main');
// const ships = require('./main');
jest.mock('./main');

// const fishingBoat = new Ship('fishing-boat', '2');
// console.log(fishingBoat)

//let ship1 = new Ship('carrier', 5);
test('make a new ship', () => {
  const newShip = new Ship('destroyer', 1);
  expect(Ship).toHaveBeenCalledTimes(1)
  // expect(newShip.name).toBe('destroyer');
  // expect(newShip.length).toBe(1);
});

// ship1 takes a hit()
// test('ship1 takes a hit', () => {
//   ship1.hit();
//   expect(ship1.hits).toBe(1);
// });

// tests to see if the ship has sunk
test('ship2 is sunk', () => {
  const ship2 = new Ship('baby', 2);
  ship2.hit();
  ship2.hit();
  expect(ship2.isSunk()).toBe(true);
});


test('should log carrier info', () => {
  const carrier = new Ship('carrier', 5);
  expect(console.log(carrier).toBe('carrier', 5))
})

// test('log all the different types of ships', () => {
//   expect(console.log(ships)).toBe(["destroyer, submarine, cruiser, battleship, carrier"]);
// })