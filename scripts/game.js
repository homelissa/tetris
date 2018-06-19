import Board from './board.js';
import Piece from './piece.js';
import Player from './player.js';

class Game {
  constructor(canvas, ctx, player){
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = player;
    this.board = player.board;
    this.piece = new Piece();
    this.nextPiece = new Piece();
    this.gameOver = false;
    this.dropCounter = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.fall = this.fall.bind(this);
  }

  start() {
    this.player.score = 0;
    this.update();

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


    this.board.matrix.forEach((row, idx) => {
      row.forEach((element, idx2) => {
        if (element === 0) {
          this.ctx.fillStyle = 'rgb(36, 36, 36)';
        } else {
          this.ctx.fillStyle = 'green';
        }
        this.ctx.fillRect(idx2, idx, 1, 1);
      });
    });


    this.piece.shape.forEach((row, idx) => {
      row.forEach((value, idx2) => {
        if (value !== 0) {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(idx2 + this.piece.position.x, idx + this.piece.position.y, 1, 1);
        }
      });
    });


    this.nextPiece.shape.forEach((row, idx) => {
      row.forEach((value, idx2) => {
        if (value !== 0) {
          this.ctx.fillStyle = 'blue';
          this.ctx.fillRect(idx2 + this.nextPiece.position.x, idx + this.nextPiece.position.y, 1, 1);
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
