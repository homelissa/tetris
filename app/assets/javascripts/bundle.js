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

var Board = function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.width = width;
    this.height = height;
    // this.matrix = this.make2DBoard(width/12, height/12);
    this.matrix = this.make2DBoard(width / 20, height / 20);

    // this.matrix = this.make2DBoard(this.width, this.height);
  }

  //cols: width, rows: height


  _createClass(Board, [{
    key: "make2DBoard",
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

//


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
  function Game(canvas, ctx, smallCanvas, ctx2, player) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.smallCanvas = smallCanvas;
    this.ctx2 = ctx2;
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
    this.colors = [null, '#e67e22', '#1abc9c', '#3498db', '#f1c40f', '#e74c3c', '#2ecc71', '#9b59b6'];
  }
  //orange, turquoise, blue, yellow, red, green, purple


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

        if (row.filter(function (el) {
          return el === 0;
        }).length === 0) {
          this.player.clearedRows += 1;
          this.player.score += 30;
          this.player.setScore();
          this.board.matrix.splice(i, 1);
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
      this.board.matrix.unshift(new Array(20).fill(0));
    }
  }, {
    key: 'fall',
    value: function fall() {
      this.piece.position.y += 1;
      if (this.collide()) {
        this.merge();
        this.clearRows();
        this.makeNewPiece();
      }
    }
  }, {
    key: 'fullFall',
    value: function fullFall() {
      while (!this.collide()) {
        this.piece.position.y++;
      }

      this.merge();
      this.clearRows();
      this.makeNewPiece();
    }
  }, {
    key: 'update',
    value: function update() {
      var _this = this;

      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;


      var deltaTime = time - this.lastTime;
      this.lastTime = time;
      this.dropCounter += deltaTime;

      if (this.dropCounter > this.dropInterval) {
        this.fall();
      }

      this.draw();
      window.setTimeout(function () {
        requestAnimationFrame(_this.update);
      }, 400);
    }
  }, {
    key: 'collide',
    value: function collide() {
      var shape = this.piece.shape;
      var pos = this.piece.position;
      for (var y = 0; y < shape.length; y++) {
        for (var x = 0; x < shape[y].length; x++) {
          if (shape[y][x] !== 0 && (this.board.matrix[y + pos.y] && this.board.matrix[y + pos.y][x + pos.x]) !== 0) {
            return true;
          }
        }
      }
      return false;
    }
  }, {
    key: 'merge',
    value: function merge() {
      var _this2 = this;

      this.piece.shape.forEach(function (row, y) {
        row.forEach(function (value, x) {
          if (value !== 0) {
            _this2.player.clearedRows += 1;
            _this2.board.matrix[y + _this2.piece.position.y - 1][x + _this2.piece.position.x] = value;
          }
        });
      });
    }
  }, {
    key: 'move',
    value: function move(dir) {
      this.piece.position.x += dir;
      if (this.collide()) {
        this.piece.position.x -= dir;
      }
    }
  }, {
    key: 'rotate',
    value: function rotate() {
      var rotated = [];
      for (var i = 0; i < this.piece.shape[0].length; i++) {
        rotated.push([]);
      }

      for (var x = 0; x < this.piece.shape.length; x++) {
        for (var y = 0; y < this.piece.shape[x].length; y++) {
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
  }, {
    key: 'draw',
    value: function draw() {
      var _this3 = this;

      this.ctx.clearRect(0, 0, 10, 18);
      this.ctx2.clearRect(0, 0, 10, 18);

      this.board.matrix.forEach(function (row, idx) {
        row.forEach(function (value, idx2) {
          if (value === 0) {
            _this3.ctx.fillStyle = 'rgb(36, 36, 36)';
          } else {
            _this3.ctx.fillStyle = _this3.colors[value];
          }
          _this3.ctx.fillRect(idx2, idx, 1, 1);
        });
      });

      this.piece.shape.forEach(function (row, idx) {
        row.forEach(function (value, idx2) {
          if (value !== 0) {
            _this3.ctx.fillStyle = _this3.colors[value];
            _this3.ctx.fillRect(idx2 + _this3.piece.position.x, idx + _this3.piece.position.y, 1, 1);
          }
        });
      });

      console.log(this.nextPiece.shape);
      // debugger
      this.nextPiece.shape.forEach(function (row, idx) {
        row.forEach(function (value, idx2) {
          if (value !== 0) {
            // console.log(value);
            _this3.ctx2.fillStyle = _this3.colors[value];
            _this3.ctx2.fillRect(idx2 + 2, idx + 1, 1, 1);
          }
        });
      });
    }
  }, {
    key: 'makeNewPiece',
    value: function makeNewPiece() {
      if (this.piece.position.y <= 1) {
        this.gameOver = true;
      } else {
        this.piece = this.nextPiece;
        this.nextPiece = new _piece2.default();
      }
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

var lShape = [[0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0], [0, 2, 0, 0]];

var JShape = [[0, 3, 0], [0, 3, 0], [3, 3, 0]];

var OShape = [[4, 4], [4, 4]];

var ZShape = [[5, 5, 0], [0, 5, 5], [0, 0, 0]];

var SShape = [[0, 6, 6], [6, 6, 0], [0, 0, 0]];

var TShape = [[0, 7, 0], [7, 7, 7], [0, 0, 0]];

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
      // this.shape = shapesArray[3];
      this.position.x = Math.floor(12 - this.shape[0].length / 2);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _board = __webpack_require__(/*! ./board.js */ "./scripts/board.js");

var _board2 = _interopRequireDefault(_board);

var _piece = __webpack_require__(/*! ./piece.js */ "./scripts/piece.js");

var _piece2 = _interopRequireDefault(_piece);

var _game = __webpack_require__(/*! ./game.js */ "./scripts/game.js");

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(board) {
    _classCallCheck(this, Player);

    this.board = board;
    this.clearedRows = 0;
    this.score = 0;
  }

  _createClass(Player, [{
    key: 'setScore',
    value: function setScore() {
      document.getElementById('score').innerText = this.score;
    }
  }]);

  return Player;
}();

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
  ctx.scale(20, 20);

  var smallCanvas = document.getElementById('small-canvas');
  var ctx2 = smallCanvas.getContext('2d');
  ctx2.scale(20, 20);

  var board = new _board2.default(canvas.width, canvas.height);
  var player = new _player2.default(board);
  var game = new _game2.default(canvas, ctx, smallCanvas, ctx2, player);

  var button = document.getElementById("start-game").addEventListener("click", function () {
    game.clear();
    game.start();
  });

  // const nextPiece = document.getElementById('next-piece');
  // nextPiece.width =  100;
  // nextPiece.height = 100;
  // const ctx2 = nextPiece.getContext('2d');
  // ctx2.scale(10,10);


  window.addEventListener('keydown', function (event) {
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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map