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




module.exports = Ship;

