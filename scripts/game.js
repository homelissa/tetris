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


  // fall() {
  //
  //   while (!this.collide()) {
  //     this.piece.position.y += 1;
  //     this.dropCounter = 0;
  //   }
  //
  //   if (this.collide()) {
  //     this.merge(this.piece);
  //     this.clearRows();
  //     this.makeNewPiece();
  //   }
  // }

  fall() {
    this.piece.position.y += 1;
    // this.piece.position.x = 0;
    if (this.collide()) {
      this.merge();
      this.clearRows();
      this.makeNewPiece();
    }
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

  // collide(matrix, piece) {
  //   if (piece.position.y > 120) return true;
  //   console.log(piece.position);
  //   const [m, o] = [piece.shape, piece.position];
  //   for (let y = 0; y < m.length; ++y) {
  //     for (let x = 0; x < m[y].length; ++x) {
  //       if (m[y][x] !== 0 &&
  //       (matrix[y + o.y] &&
  //         matrix[y + o.y][x + o.x]) !== 0) {
  //           return true;
  //         }
  //       }
  //     }
  //
  //   return false;
  // }

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
    if (this.board.collide()) {
      this.piece.position.x -= dir;
    }
  }


  draw() {
    // this.ctx.clearRect(0, 0, this.board.width, this.board.height);

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

  // draw() {
  //    this.ctx.fillStyle = '#202328';
  //    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  //    this.drawMatrix(this.board.matrix, {x: 0, y: 0});
  //    this.drawMatrix(this.piece.shape, this.piece.position);
  //  }
  //
  //  drawMatrix(matrix, offset) {
  //    matrix.forEach((row, y) => {
  //      row.forEach((value, x) => {
  //        if (value !== 0) {
  //          this.ctx.fillStyle = 'red'; //red
  //          this.ctx.fillRect(x + offset.x,
  //            y + offset.y,
  //            1, 1);
  //            this.ctx.lineWidth = 1/20;
  //            this.ctx.strokeStyle = "white";
  //            this.ctx.strokeRect(x + offset.x,
  //              y + offset.y,
  //              1, 1);
  //              // context.fill();
  //            }
  //          });
  //        });
  //      }




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
    if (this.piece.position.y <= 1) {
      this.gameOver = true;
    } else {
      this.piece = this.nextPiece;
      this.nextPiece = new Piece();
    }
  }

  rotatePiece() {

  }




}

export default Game;
