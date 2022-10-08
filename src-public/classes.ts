'use strict';

import {
    GameInterface,
    BoardInterface,
    PlayerInterface,
    ShipInterface,
    CoordinateInterface,
    ShipTypeInterface,
} from './interfaces.js';

// - Game class
//      - Player class
//          - Board class
//          - Ship class

class Coordinate implements CoordinateInterface {
    x;
    y;
    z;

    constructor(x: Number, y: Number, z: Number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class ShipType implements ShipTypeInterface {
    shipType;
    size;

    constructor(shipType: ShipTypeInterface['shipType']) {
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
        const size: Number = types.find((t) => t.name === shipType)?.size || 0;
        if (size === 0) {
            throw new Error('Invalid ship type');
        }
        this.size = size;
    }
}

class Board implements BoardInterface {
    locations: Number[][][];;
    size;

    constructor(size: Number) {
        // Create an array 3 dimensions deep to make x, y, z coordinates
        let board: any = [];
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
}

class Ship implements ShipInterface {
    shipType;
    direction;
    coordinates;
    health;
    sunk;

    constructor(
        shipType: ShipTypeInterface['shipType'],
        direction: ShipInterface['direction'],
        coordinates: CoordinateInterface
    ) {
        this.shipType = new ShipType(shipType);
        this.direction = direction;
        this.coordinates = coordinates;
        this.health = this.shipType.size;
        this.sunk = false;
    }
    // Create a function to place a ship on the board
    // checkPlacement(size, direction, x, y, z) {
    //     // Check if the ship will fit on the board
    //     // Check if the ship will overlap another ship
    //     // If it will fit and not overlap, place the ship
    //     // If not, try again

    //     // Check if the ship will fit on the board
    //     if (direction === 'x+' || direction === 'x-') {
    //         if (x + size > 10) {
    //             return false;
    //         }
    //     } else if (direction === 'y+' || direction === 'y-') {
    //         if (y + size > 10) {
    //             return false;
    //         }
    //     } else if (direction === 'z+' || direction === 'z-') {
    //         if (z + size > 10) {
    //             return false;
    //         }
    //     }
    //     // Check if the ship will overlap another ship
    //     for (let i = 0; i < ship.size; i++) {
    //         if (direction === 'x+') {
    //             if (board[x + i][y][z]) {
    //                 return false;
    //             }
    //         } else if (direction === 'x-') {
    //             if (board[x - i][y][z]) {
    //                 return false;
    //             }
    //         } else if (direction === 'y+') {
    //             if (board[x][y + i][z]) {
    //                 return false;
    //             }
    //         } else if (direction === 'y-') {
    //             if (board[x][y - i][z]) {
    //                 return false;
    //             }
    //         } else if (direction === 'z+') {
    //             if (board[x][y][z + i]) {
    //                 return false;
    //             }
    //         } else if (direction === 'z-') {
    //             if (board[x][y][z - i]) {
    //                 return false;
    //             }
    //         }
    //     }
    // }
}

class Player implements PlayerInterface {
    name;
    ships: Ship[];
    hits: CoordinateInterface[];
    misses: CoordinateInterface[];

    constructor(name: String) {
        this.name = name;
        this.ships = [];
        this.hits = [];
        this.misses = [];
    }
}

class Game implements GameInterface {
    turn;
    players;
    board;
    state: GameInterface['state'];

    constructor(players?: Array<String>, boardSize: Number = 10) {
        this.turn = 0;
        this.players = [];
        if (players && players.length === 2) {
            players.forEach((player) => {
                this.players.push(new Player(player));
            });
        } else {
            this.players.push(new Player('Player 1'));
            this.players.push(new Player('Player 2'));
        }
        this.board = new Board(boardSize);
        this.state = 'setup';
    }
}

export { Game, Board, Player, Ship };
