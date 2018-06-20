import Board from './board.js';
import Game from './game.js';
import Piece from './piece.js';
import Player from './player.js';



document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // const board = document.getElementById('canvas');
  // board.width = 100;
  // board.height = 180;
  // const ctx = board.getContext('2d');
  // ctx.scale(10, 10);


  ctx.scale(2, 2);
  // const board = new Board(12, 20);
  // const board = new Board(10, 20);
  const board = new Board(canvas.width, canvas.height);
  const player = new Player(board);
  const game = new Game(canvas, ctx, player);

  const button = document.getElementById("start-game").addEventListener("click", function() {
    game.clear();
    game.start();
  });


  window.addEventListener('keydown', (event) => {

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
    }
  });
});
