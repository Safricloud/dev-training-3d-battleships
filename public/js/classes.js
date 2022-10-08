'use strict';
// - Game class
//      - Player class
//          - Board class
//          - Ship class
class Coordinate {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class ShipType {
    constructor(shipType) {
        var _a;
        const types = [
            {
                name: 'Carrier',
                size: 5,
            },
            {
                name: 'Battleship',
                size: 4,
            },
            {
                name: 'Cruiser',
                size: 3,
            },
            {
                name: 'Submarine',
                size: 3,
            },
            {
                name: 'Destroyer',
                size: 2,
            },
        ];
        this.shipType = shipType;
        const size = ((_a = types.find((t) => t.name === shipType)) === null || _a === void 0 ? void 0 : _a.size) || 0;
        if (size === 0) {
            throw new Error('Invalid ship type');
        }
        this.size = size;
    }
}
class Board {
    constructor(size) {
        // Create an array 3 dimensions deep to make x, y, z coordinates
        let board = [];
        for (let i = 0; i < size; i++) {
            board.push([]);
            for (let j = 0; j < size; j++) {
                board[i].push([]);
                for (let k = 0; k < size; k++) {
                    board[i][j].push(0);
                }
            }
        }
        this.locations = board;
        this.size = size;
    }
    ;
}
class Ship {
    constructor(shipType, direction, coordinates) {
        this.shipType = new ShipType(shipType);
        this.direction = direction;
        this.coordinates = coordinates;
        this.health = this.shipType.size;
        this.sunk = false;
    }
}
class Player {
    constructor(name) {
        this.name = name;
        this.ships = [];
        this.hits = [];
        this.misses = [];
    }
}
class Game {
    constructor(players, boardSize = 10) {
        this.turn = 0;
        this.players = [];
        if (players && players.length === 2) {
            players.forEach((player) => {
                this.players.push(new Player(player));
            });
        }
        else {
            this.players.push(new Player('Player 1'));
            this.players.push(new Player('Player 2'));
        }
        this.board = new Board(boardSize);
        this.state = 'setup';
    }
}
export { Game, Board, Player, Ship };
//# sourceMappingURL=classes.js.map