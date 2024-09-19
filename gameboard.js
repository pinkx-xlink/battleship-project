
class Gameboard {
    // takes in the x and y axis (number of squares up and down)
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    logBoard() {
        return this.x, this.y;
    }
    placeShip() {
    }
}

module.exports = Gameboard;