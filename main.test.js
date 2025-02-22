import { test, jest, expect } from '@jest/globals';
const { experiments } = require('webpack');
const ship = require('./main');
jest.mock('./main');

// for test 1
const ship1 = new ship('ship1', 2);
// for test 3
const ship2 = new ship('baby', 2);

// test 1
// expect(ship1).toBe('carrier');
// test 1 returns: Expected: "carrier"
// Received: {"hit": [Function hit], "isSunk": [Function isSunk]} 

// test 3
test('ship2 is not sunk after a hit', () => {
  ship2.hit();
  expect(ship2.isSunk()).toBeFalsy();
});

test('ship2 is sunk after 3 hits', () => {
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