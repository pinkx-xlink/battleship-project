
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
    }


    logBoard() {
        return this.x, this.y;
    }
    // be able to place a ship by calling the Ship class...
}

module.exports = Gameboard;