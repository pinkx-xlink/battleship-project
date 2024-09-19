const gameboard = require('./gameboard');
const myBoard = new gameboard(10, 10);

test('receive an attack', () => {
  expect(myBoard.receiveAttack(5, 2)).toBe(5, 2)
})