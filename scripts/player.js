import Board from './board.js';
import Piece from './piece.js';
import Game from './game.js';

class Player {
  constructor(board) {
    this.board = board;
    this.clearedRows = 0;
    this.score = 0;
  }

  setScore() {
    document.getElementById('score').innerText = this.score;
  }


}

export default Player;
