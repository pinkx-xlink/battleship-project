import { test, jest, expect } from '@jest/globals';
const { experiments } = require('webpack');
// import { Ship } from './main';
const ship = require('./main');
// const ships = require('./main');
jest.mock('./main');
// jest.mock('./Ship');

// for test 1
const ship1 = new ship('ship1', 2);
// for test 3
const ship2 = new ship('baby', 2);

// const fishingBoat = new Ship('fishing-boat', '2');
// console.log(fishingBoat)
// ship1 takes a hit(

// test 1
// expect(ship1).toBe('carrier');
// test 1 returns: Expected: "carrier"
// Received: {"hit": [Function hit], "isSunk": [Function isSunk]} 

// test 3
// tests to see if the ship has sunk
test('ship2 is not sunk after a hit', () => {
  ship2.hit();
  expect(ship2.isSunk()).toBeFalsy();
});

test('ship2 is sunk after', () => {
  ship1.hit();
  ship1.hit();
  ship1.hit();
  expect(ship1.isSunk).toBeTruthy();
});

test('add 1 + 2 = 3', () => {
  const data = { one: 1};
  data['two'] = 2;
  expect(data).toStrictEqual({ one: 1, two: 2 });
});

expect(true).toBeTruthy();