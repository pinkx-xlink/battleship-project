class Ship {
    hits = 0;
    constructor(length) {
        this.length = length;
    }
    hit() {
      this.hits++;
    };
    isSunk() {
      this.isSunk = true;
    };
}

module.exports = Ship;

