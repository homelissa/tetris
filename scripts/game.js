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
    this.dropCounter = 0;
    this.dropInterval = 1000;
  }

  clear() {
    this.board.matrix.forEach(row => row.fill(0));
  }

  clearRows() {

  }

  fall() {
    this.piece.position.y++;
  }

  update(timeElapsed) {
    this.dropCounter += timeElapsed;
    if (this.dropCounter > this.dropInterval) {
      this.fall();
      this.dropCounter = 0;
    }
  }

  draw(piece) {
    piece.forEach(row => {
      row.forEach(value => {
        if (value !== 0) {
          ctx.beginPath();
          ctx.rect(this.piece.position.x, this.piece.position.y, w, h);
          ctx.fill();
        }
      });
    });
  }



}

export default Game;
