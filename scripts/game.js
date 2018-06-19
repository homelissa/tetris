import Board from './board.js';
import Piece from './piece.js';
import Player from './player.js';

class Game {
  constructor(){
    this.board = new Board(10, 20);
    this.piece = new Piece();
    this.nextPiece = new Piece();
    this.gameOver = false;
    this.dropCounter = 0;
    this.dropInterval = 1000;
  }

  clear() {
    this.board.matrix.forEach(row => row.fill(0));
  }


  clearRows() {
    for (var i = 0; i < this.board.matrix.length; i++) {
      let row = this.board.matrix[i];
      for (var j = 0; j < row.length; j++) {
        if (row[j] === 0) {
          break;
        }

        Player.clearedRows += 1;
        Player.score += 10;
        this.removeRow(this.board.matrix, i);
        this.addNewRow();
      }
    }
  }

  removeRow(arr, row) {
    arr = arr.slice(0);
    arr.splice(row - 1, 1);
    return arr;
  }

  addNewRow() {
    this.board.matrix.unshift(new Array(this.board.width));
  }


  fall() {
    this.piece.position.y += 10;
  }

  update(timeElapsed) {
    this.dropCounter += timeElapsed;
    if (this.dropCounter > this.dropInterval) {
      this.fall();
      this.dropCounter = 0;
    }
  }

  draw(ctx, piece) {
    let x = 0;
    let y = 0;

    piece.shape.forEach(row => {
      row.forEach(value => {
        if (value !== 0) {
          ctx.beginPath();
          ctx.rect(piece.position.x + x, piece.position.y + y, 4, 5);
          ctx.fillStyle = 'blue';
          ctx.fill();
        }
    x += 4;
      });
    y += 5;
    x = 0;
    });
  }

  makeNewPiece() {
    if (this.piece.pos.y < 1) {
      this.gameOver = true;
    } else {
      this.piece = this.nextPiece;
      this.nextPiece = new Piece();
    }
  }

  rotatePiece() {

  }

  collide() {

  }



}

export default Game;
