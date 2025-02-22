const { test, expect } = require('@jest/globals');
const { experiments } = require('webpack');
const gameboard = require('./gameboard');
const myBoard = new gameboard(10, 10);

const anotherBoard = new gameboard(5, 5);
test('place a ship', () => {
  //   placeShip(ship, coordinate, hasShip)
  // const littleBoat = myBoard.placeShip((6, 6), true);
  // expect(myBoard.coordinate(6,6).hasShip).toBe(true)
  myBoard.placeShip();
  expect(myBoard.hasAShip).toBeTruthy();
})

test('empty board has no ships', () => {
  expect(anotherBoard.hasAShip).toBeFalsy();
})

test('receive an attack', () => {
  expect(myBoard.receiveAttack(5, 2)).toBe(5, 2)
})

test('set coordinates', () => {
  expect(myBoard.coordinate(1, 2).toBe((1, 2)))
})

// anotherBoard.placeAShip((2, 3))
test('set coordinate', () => {
  expect(anotherBoard.coordinate.hasAShip).toBeFalsy();
})