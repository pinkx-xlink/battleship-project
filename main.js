export class Ship {
  hits = 0;
  constructor(name, length) {
    this.name = name;
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

const destroyer = new Ship('destroyer', 1);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 3);
const carrier = new Ship('carrier', 5);

export const ships = [destroyer, submarine, cruiser, battleship, carrier];

// module.exports.Ship = Ship;
// module.exports.ships = ships;

