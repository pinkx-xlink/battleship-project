const ship = require('./main');
class Gameboard {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        for(let x = 0; x < rows; x++) {
            // const tr = document.createElement('tr');
            // let cellRowCoord = Math.abs(rows - 7);
            // tr.terowstContent = cellRowCoord;
            for (let y = 0; y < columns; y++) {
            //   const cell = document.createElement('td');
            //   let cellColumnCoord = columns;
            //   cell.terowstContent = cellColumnCoord;
            }
        }
        const coordinate = (rows, columns) => {
            const rowsPosition = rows;
            const columnsPosition = columns;
        }
    }
    // be able to place a ship bcolumns calling the Ship class...
    // placeShip(coordinate, hasShip) {
        // this.coordinate = new ship(1);
        // this.hasShip = true;
    // }

    receiveAttack(coordinate) {
        // takes a pair of coords 
        // determines if a ship is hit or missed
        return coordinate;
    }
}

module.exports = Gameboard;