class Ship {
  hits = 0;
  constructor(length) {
    this.length = length;
  }
  // how many times a battleship has been hit:
  hit() {
    this.hits++;
  };
  // determines whether a battleship has been sunk:
  isSunk() {
    if (this.length === this.hits) {
      return this.isSunk = true;
    } else {
      return this.isSunk = false;
    }
  };
}

class Gameboard {
    // takes in the x and y axis (number of squares up and down)
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


module.exports = Ship;

