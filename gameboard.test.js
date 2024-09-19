const { experiments } = require('webpack');
const gameboard = require('./gameboard');
const myBoard = new gameboard(10, 10);

test('place a ship', () => {
  myBoard.placeShip(6, 6);
  // expect(myBoard.hasShip).toBe(true)
  // expect(myBoard.coordinate(6, 6).hasShip.toBe(true));
})

test('receive an attack', () => {
  expect(myBoard.receiveAttack(5, 2)).toBe(5, 2)
})

