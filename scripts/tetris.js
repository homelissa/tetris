import Board from './board.js';
import Game from './game.js';
import Piece from '.piece.js';


document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const board = new Board(10, 20);
  const Player = new Player(board);

});


function startGame() {
  const game = document.getElementById('start-game');
  // song.play();
}
