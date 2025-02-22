// module.exports = {};
class Ship {
  constructor(name, length, hits = 0, isSunk = false) {
    this.name = name;
    this.length = length;
    this.hits = hits;
    this.isSunk = isSunk;
  }
  
  // how many times a battleship has been hit:
  hit() {
    this.hits += 1;
    return this.hits.toString();
  }

  // determines whether a battleship has been sunk:
  isSunk() {
    if (this.length >= this.hits) {
      this.isSunk = true;
    } else {
      this.isSunk = false;
    }
  };
}

const destroyer = new Ship('destroyer', 1);
const submarine = new Ship('submarine', 2);
const cruiser = new Ship('cruiser', 3);
const battleship = new Ship('battleship', 3);
const carrier = new Ship('carrier', 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];

module.exports = Ship;
// module.exports.ships = ships;

