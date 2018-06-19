/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/tetris.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/board.js":
/*!**************************!*\
  !*** ./scripts/board.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window.addEventListener("DOMContentLoaded", function () {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
});

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
    this.matrix = this.make2DBoard(width, height);
  }

  //cols: width, rows: height


  _createClass(Board, [{
    key: 'make2DBoard',
    value: function make2DBoard(cols, rows) {
      var arr = new Array(rows);

      for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols).fill(0);
      }

      return arr;
    }
  }]);

  return Board;
}();

exports.default = Board;

/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(/*! ./board.js */ "./scripts/board.js");

var _board2 = _interopRequireDefault(_board);

var _piece = __webpack_require__(/*! ./piece.js */ "./scripts/piece.js");

var _piece2 = _interopRequireDefault(_piece);

var _player = __webpack_require__(/*! ./player.js */ "./scripts/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas, ctx, player) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.player = player;
    this.board = player.board;
    this.piece = new _piece2.default();
    this.nextPiece = new _piece2.default();
    this.gameOver = false;
    this.dropCounter = 0;
    this.dropInterval = 1000;
    this.lastTime = 0;
    this.update = this.update.bind(this);
    this.draw = this.draw.bind(this);
    this.fall = this.fall.bind(this);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      this.player.score = 0;
      this.update();
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.board.matrix.forEach(function (row) {
        return row.fill(0);
      });
    }
  }, {
    key: 'clearRows',
    value: function clearRows() {
      for (var i = 0; i < this.board.matrix.length; i++) {
        var row = this.board.matrix[i];
        for (var j = 0; j < row.length; j++) {
          if (row[j] === 0) {
            break;
          }

          _player2.default.clearedRows += 1;
          _player2.default.score += 10;
          this.removeRow(this.board.matrix, i);
          this.addNewRow();
        }
      }
    }
  }, {
    key: 'removeRow',
    value: function removeRow(arr, row) {
      arr = arr.slice(0);
      arr.splice(row - 1, 1);
      return arr;
    }
  }, {
    key: 'addNewRow',
    value: function addNewRow() {
      this.board.matrix.unshift(new Array(this.board.width));
    }
  }, {
    key: 'fall',
    value: function fall() {
      this.piece.position.y += 10;
      this.dropCounter = 0;
    }
  }, {
    key: 'update',
    value: function update() {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var deltaTime = time - this.lastTime;
      this.lastTime = time;
      this.dropCounter += deltaTime;

      if (this.dropCounter > this.dropInterval) {
        this.fall();
      }

      this.draw();
      requestAnimationFrame(this.update);
    }
  }, {
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.board.matrix.forEach(function (row, idx) {
        row.forEach(function (element, idx2) {
          if (element === 0) {
            _this.ctx.fillStyle = 'rgb(36, 36, 36)';
          } else {
            _this.ctx.fillStyle = 'green';
          }
          _this.ctx.fillRect(idx2, idx, 1, 1);
        });
      });

      this.piece.shape.forEach(function (row, idx) {
        row.forEach(function (value, idx2) {
          if (value !== 0) {
            _this.ctx.fillStyle = 'blue';
            _this.ctx.fillRect(idx2 + _this.piece.position.x, idx + _this.piece.position.y, 1, 1);
          }
        });
      });

      this.nextPiece.shape.forEach(function (row, idx) {
        row.forEach(function (value, idx2) {
          if (value !== 0) {
            _this.ctx.fillStyle = 'blue';
            _this.ctx.fillRect(idx2 + _this.nextPiece.position.x, idx + _this.nextPiece.position.y, 1, 1);
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

  }, {
    key: 'makeNewPiece',
    value: function makeNewPiece() {
      if (this.piece.pos.y < 1) {
        this.gameOver = true;
      } else {
        this.piece = this.nextPiece;
        this.nextPiece = new _piece2.default();
      }
    }
  }, {
    key: 'rotatePiece',
    value: function rotatePiece() {}
  }, {
    key: 'collide',
    value: function collide() {}
  }, {
    key: 'merge',
    value: function merge() {
      var _this2 = this;

      this.piece.shape.forEach(function (row, y) {
        row.forEach(function (value, x) {
          if (value !== 0) {
            _player2.default.clearedRows += 1;
            _this2.board.matrix[y + _this2.piece.pos.y - 1][x + _this2.piece.pos.x] = value;
          }
        });
      });
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./scripts/piece.js":
/*!**************************!*\
  !*** ./scripts/piece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LShape = [[0, 1, 0], [0, 1, 0], [0, 1, 1]];

var lShape = [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]];

var JShape = [[0, 1, 0], [0, 1, 0], [1, 1, 0]];

var OShape = [[1, 1], [1, 1]];

var ZShape = [[1, 1, 0], [0, 1, 1], [0, 0, 0]];

var SShape = [[0, 1, 1], [1, 1, 0], [0, 0, 0]];

var TShape = [[0, 1, 0], [1, 1, 1], [0, 0, 0]];

var Piece = function () {
  function Piece(position) {
    _classCallCheck(this, Piece);

    this.position = { x: 0, y: 0 };
    this.shape = null;
    this.makePiece();
  }

  _createClass(Piece, [{
    key: "makePiece",
    value: function makePiece() {
      var shapesArray = [LShape, lShape, JShape, OShape, ZShape, SShape, TShape];
      this.shape = shapesArray[Math.floor(Math.random() * shapesArray.length)];
      this.position.x = Math.floor(24 - this.shape[0].length / 2);
    }
  }]);

  return Piece;
}();

exports.default = Piece;

/***/ }),

/***/ "./scripts/player.js":
/*!***************************!*\
  !*** ./scripts/player.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _board = __webpack_require__(/*! ./board.js */ "./scripts/board.js");

var _board2 = _interopRequireDefault(_board);

var _piece = __webpack_require__(/*! ./piece.js */ "./scripts/piece.js");

var _piece2 = _interopRequireDefault(_piece);

var _game = __webpack_require__(/*! ./game.js */ "./scripts/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(board) {
  _classCallCheck(this, Player);

  this.board = board;
  this.clearedRows = 0;
  this.score = 0;
};

exports.default = Player;

/***/ }),

/***/ "./scripts/tetris.js":
/*!***************************!*\
  !*** ./scripts/tetris.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _board = __webpack_require__(/*! ./board.js */ "./scripts/board.js");

var _board2 = _interopRequireDefault(_board);

var _game = __webpack_require__(/*! ./game.js */ "./scripts/game.js");

var _game2 = _interopRequireDefault(_game);

var _piece = __webpack_require__(/*! ./piece.js */ "./scripts/piece.js");

var _piece2 = _interopRequireDefault(_piece);

var _player = __webpack_require__(/*! ./player.js */ "./scripts/player.js");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  var board = new _board2.default(10, 20);
  var player = new _player2.default(board);
  var game = new _game2.default(canvas, ctx, player);
  game.start();
});

function startGame() {
  var game = document.getElementById('start-game');
  game.start();
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map