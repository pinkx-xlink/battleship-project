const gameboard = require('./gameboard');

test('gameboard measures 10 x 10', () => {
    expect(gameboard(10, 10).logBoard()).toBe(10, 10)
  });