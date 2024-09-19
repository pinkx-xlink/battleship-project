class Ship {
    hits = 0;
    constructor(length) {
        this.length = length;
    }
    hit() {
      this.hits++;
    };
    isSunk() {
      if (this.length <= this.hits) {
        this.isSunk = true;
      } else {
        this.isSunk = false;
      }
      
    };
}

module.exports = Ship;

