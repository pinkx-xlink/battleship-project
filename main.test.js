import { test, jest, expect } from '@jest/globals';
const { experiments } = require('webpack');
// import { Ship } from './main';
const ship = require('./main');
// const ships = require('./main');
jest.mock('./main');

jest.mock('./Ship', jest.fn())
// const fishingBoat = new Ship('fishing-boat', '2');
// console.log(fishingBoat)
// ship1 takes a hit(
const ship1 = new ship('ship1', 2);
test('ship1 takes a hit', () => {
  ship1.hit();
  expect(ship1.hits).toBe('1');
});

test('make a new ship', () => {
  const newShip = new Ship('destroyer', 1);
  expect(Ship).toHaveBeenCalledTimes(1)
});

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
});


test('add 1 + 2 = 3', () => {
  const data = { one: 1}
  data['two'] = 2;
  expect(data).toEqual({one: 1, two 2});
});