import Board from './board.js';
import Game from './game.js';
import Piece from './piece.js';
import Player from './player.js';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  // ctx.scale(20, 20);
  ctx.scale(3, 3);

  // const board = new Board(12, 20);
  // const board = new Board(10, 20);
  const board = new Board(canvas.width, canvas.height);
  const player = new Player(board);
  const game = new Game(canvas, ctx, player);
  game.start();

});


function startGame() {
  const game = document.getElementById('start-game');
  game.start();
}
