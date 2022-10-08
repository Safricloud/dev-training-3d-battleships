'use strict';
console.log('Starting game...');
import { Game } from './classes.js';
const main = () => {
    // Create a new game
    const game = new Game(['Player 1', 'Player 2']);
    console.log(game);
};
window.onload = main;
//# sourceMappingURL=main.js.map