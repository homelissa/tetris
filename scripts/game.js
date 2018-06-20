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

      if (row.filter((el) => el === 0).length === 0) {
        this.player.clearedRows += 1;
        this.player.score += 30;
        this.player.setScore();
        this.board.matrix.splice(i, 1);
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
    this.piece.position.y += 1;
    if (this.collide()) {
      this.merge();
      this.clearRows();
      this.makeNewPiece();
    }
  }

  fullFall() {
    while (!this.collide()) {
      this.piece.position.y++;

    }

    this.merge();
    this.clearRows();
    this.makeNewPiece();
  }



  update(time = 0) {
    const deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.dropCounter += deltaTime;

    if (this.dropCounter > this.dropInterval) {
      this.fall();
    }

    this.draw();
    window.setTimeout(() => {
      requestAnimationFrame(this.update);
    }, 100);

  }


  collide() {
    const shape = this.piece.shape;
    const pos = this.piece.position;
    for (let y = 0; y < shape.length; y++) {
     for (let x = 0; x < shape[y].length; x++) {
       if (shape[y][x] !== 0 && (this.board.matrix[y + pos.y] && this.board.matrix[y + pos.y][x + pos.x]) !== 0) {
         return true;
       }
     }
   }
   return false;
 }


 merge() {
   this.piece.shape.forEach((row, y) => {
     row.forEach((value, x) => {
       if (value !== 0) {
         this.player.clearedRows += 1;
         this.board.matrix[y + this.piece.position.y - 1][x + this.piece.position.x] = value;
       }
     });
   });
 }

  move(dir) {
    this.piece.position.x += dir;
    if (this.collide()) {
      this.piece.position.x -= dir;
    }
  }

  rotate() {
    let rotated = [];
    for (let i = 0; i < this.piece.shape[0].length; i++) {
      rotated.push([]);
    }

    for (let x = 0; x < this.piece.shape.length; x++) {
      for (let y = 0; y < this.piece.shape[x].length; y++) {
        rotated[y].unshift(this.piece.shape[x][y]);
      }
    }

    this.piece.shape = rotated;

    if (this.collide()) {
      this.merge();
      this.clearRows();
      this.makeNewPiece();
    }
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


  makeNewPiece() {
    if (this.piece.position.y <= 1) {
      this.gameOver = true;
    } else {
      this.piece = this.nextPiece;
      this.nextPiece = new Piece();
    }
  }


}

export default Game;
