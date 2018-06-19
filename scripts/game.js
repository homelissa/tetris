import Board from './board.js';
import Piece from './piece.js';
import Player from './player.js';

class Game {
  constructor(ctx){
    this.ctx = ctx;
    this.board = new Board(10, 20);
    this.piece = new Piece();
    this.nextPiece = new Piece();
    this.gameOver = false;
    this.dropCounter = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.interval = setInterval(this.update, 1000);
    this.fall = this.fall.bind(this);
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
    this.dropCounter = 0;
  }

  // update(timeElapsed) {
  //   this.dropCounter += timeElapsed;
  //   if (this.dropCounter > this.dropInterval) {
  //     this.draw();
  //     this.fall();
  //     this.dropCounter = 0;
  //     this.draw();
  //   }
  // }




  update(time = 0) {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.dropCounter += deltaTime;

    if (this.dropCounter > this.dropInterval) {
      this.fall();
    }

    this.draw();
    requestAnimationFrame(this.update);

  }



  draw() {

    this.piece.shape.forEach((row, idx) => {
      row.forEach((value, idx2) => {
        if (value !== 0) {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(idx2 + this.piece.position.x, idx + this.piece.position.y, 1, 1);
        }
      });
    });
  }




  // draw(ctx, piece) {
  //   let x = 0;
  //   let y = 0;
  //
  //   piece.shape.forEach(row => {
  //     row.forEach(value => {
  //       if (value !== 0) {
  //         ctx.beginPath();
  //         ctx.rect(piece.position.x + x, piece.position.y + y, 4, 5);
  //         ctx.fillStyle = 'blue';
  //         ctx.fill();
  //       }
  //   x += 4;
  //     });
  //   y += 5;
  //   x = 0;
  //   });
  //
  // }

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

  merge() {
    this.piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          Player.clearedRows += 1;
          this.board.matrix[y + this.piece.pos.y - 1][x + this.piece.pos.x] = value;
        }
      });
    });
  }



}

export default Game;
