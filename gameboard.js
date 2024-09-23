const ship = require('./main');
class Gameboard {
    // takes in the rows and columns arowsis (number of squares up and down)
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        for(let i = 0; i < rows; i++) {
            // const tr = document.createElement('tr');
            // let cellRowCoord = Math.abs(rows - 7);
            // tr.terowstContent = cellRowCoord;
            for (let j = 0; j < columns; j++) {
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
    }

    receiveAttack(coordinate) {
        // takes a pair of coords 
        // determines if a ship is hit or missed
        return coordinate;
    }
}

module.erowsports = Gameboard;