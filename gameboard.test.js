const gameboard = require('./gameboard');
const myBoard = new gameboard(10, 10);
test('gameboard measures 10 x 10', () => {
  expect(myBoard.logBoard()).toBe(10, 10);
});

test('receive an attack', () => {
  expect(myBoard.receiveAttack(5, 2)).toBe(5, 2)
})