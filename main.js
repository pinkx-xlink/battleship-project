class Ship {
    hits = 0;
    constructor(length) {
        this.length = length;
    }
    hit() {
      this.hits++;
    };
    isSunk() {
      if (this.length === this.hits) {
        return this.isSunk = true;
      } else {
        return this.isSunk = false;
      }
      
    };
}

module.exports = Ship;

