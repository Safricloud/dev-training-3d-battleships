interface CoordinateInterface {
    x: Number;
    y: Number;
    z: Number;
}

interface ShipTypeInterface {
    shipType: 'Carrier' | 'Battleship' | 'Cruiser' | 'Submarine' | 'Destroyer';
    size: Number;
}

interface ShipInterface {
    shipType: ShipTypeInterface;
    direction: 'x+' | 'y+' | 'z+' | 'x-' | 'y-' | 'z-';
    coordinates: CoordinateInterface;
    health: Number;
    sunk: Boolean;
}

interface BoardInterface {
    locations: Array<Array<Array<Number>>>;
    size: Number;
}

interface PlayerInterface {
    name: String;
    ships: Array<ShipInterface>;
    hits: Array<CoordinateInterface>;
    misses: Array<CoordinateInterface>;
}

interface GameInterface {
    turn: Number;
    players: Array<PlayerInterface>;
    board: BoardInterface;
    state: 'setup' | 'playing' | 'finished';
}


export { GameInterface, BoardInterface, PlayerInterface, ShipInterface, CoordinateInterface, ShipTypeInterface };
