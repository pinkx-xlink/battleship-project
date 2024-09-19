function ship(length) {
  return {
    length: length,
    hits: hits,
    hit() {
      return (this.hits += 1);
    },
    isSunk() {
      return (this.isSunk = true);
    },
  };
}

module.exports = ship;

