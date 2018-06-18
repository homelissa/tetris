import Board from './board.js';
import Piece from './piece.js';

class Game {
  constructor(){
    this.board = new Board(10, 20);
    this.piece = new Piece();
    this.nextPiece = new Piece();
    this.clearedRows = 0;
    this.score = 0;
    this.gameOver = false;
  }

  clear() {
    this.board.matrix.forEach(row => row.fill(0));
  }

  clearRows() {

  }

}

export default Game;
