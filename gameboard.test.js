const gameboard = require('./gameboard');
const myBoard = new gameboard(10, 10);

test('place a ship', () => {
  expect(myBoard.placeShip(6, 6)).toBe(true)
})

test('receive an attack', () => {
  expect(myBoard.receiveAttack(5, 2)).toBe(5, 2)
})

