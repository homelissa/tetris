import Board from './board.js';
import Game from './game.js';
import Piece from './piece.js';
import Player from './player.js';



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.scale(5, 5);

  const smallCanvas = document.getElementById('small-canvas');
  const ctx2 = smallCanvas.getContext('2d');
  ctx2.scale(3, 3);

  const board = new Board(canvas.width, canvas.height);
  const player = new Player(board);
  const game = new Game(canvas, ctx, smallCanvas, ctx2, player);

  const button = document.getElementById("start-game").addEventListener("click", function() {
    game.clear();
    game.start();
  });


  const nextPiece = document.getElementById('next-piece');
  nextPiece.width =  100;
  nextPiece.height = 100;
  // const ctx2 = nextPiece.getContext('2d');
  // ctx2.scale(10,10);



  window.addEventListener('keydown', (event) => {
    event.preventDefault();

    switch (event.code) {
      case "ArrowDown":
        game.fall();
        break;
      case "ArrowLeft":
        game.move(-1);
        break;
      case "ArrowRight":
        game.move(1);
        break;
      case "Space":
        game.fullFall();
        break;
      case "ArrowUp":
        game.rotate();
        break;

    }
  });
});
