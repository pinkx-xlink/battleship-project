function ship(length) {
  return {
    length: length,
    hit() {
      return (this.length -= 1);
    },
    isSunk() {
      return (this.isSunk = true);
    },
  };
}
module.exports = ship;
