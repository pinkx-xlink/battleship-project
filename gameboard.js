
class Gameboard {
    // takes in the x and y axis (number of squares up and down)
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    logBoard() {
        return this.x, this.y;
    }
    placeShip(a, b) {
        this.a = a;
        this.b = b;
        return a, b;
    }
}

module.exports = Gameboard;