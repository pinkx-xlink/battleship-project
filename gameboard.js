const ship = require('./main');
class Gameboard {
    // takes in the x and y axis (number of squares up and down)
    constructor(x, y) {
        this.x = x;
        this.y = y;
        for(let i = 0; i < x; i++) {
            // const tr = document.createElement('tr');
            // let cellRowCoord = Math.abs(x - 7);
            // tr.textContent = cellRowCoord;
            for (let j = 0; j < y; j++) {
            //   const cell = document.createElement('td');
            //   let cellColumnCoord = y;
            //   cell.textContent = cellColumnCoord;
            }
        }
        const coordinate = (x, y) => {
            const xPosition = x;
            const yPosition = y;
        }
    }
    // be able to place a ship by calling the Ship class...
    placeShip(coordinate) {
        this.coordinate = new ship(1);
        coordinate.hasShip = true;
    }

    receiveAttack(coordinate) {
        // takes a pair of coords 
        // determines if a ship is hit or missed
        return coordinate;
    }
}

module.exports = Gameboard;