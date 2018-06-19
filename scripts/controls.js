import Board from './board.js';
import Piece from './piece.js';
import Game from './game.js';


window.addEventListener('keydown', (event) => {

  switch (event.code) {
    case "ArrowDown":
      Game.fall();
      break;
    case "ArrowLeft":
      Game.piece.position.x--;
      break;
    case "ArrowRight":
      Game.piece.position.x++;

  }
});
