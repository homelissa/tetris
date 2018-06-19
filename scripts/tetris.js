import Board from './board.js';
import Game from './game.js';
import Piece from './piece.js';
import Player from './player.js';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const board = new Board(10, 20);
  const player = new Player(board);
  const game = new Game();

  game.draw(ctx, game.piece);
  game.fall();
  game.draw(ctx, game.piece);
});


function startGame() {
  const game = document.getElementById('start-game');
  // song.play();
}
