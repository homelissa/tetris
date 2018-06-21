const LShape = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 1]
];

const lShape = [
  [0, 2, 0, 0],
  [0, 2, 0, 0],
  [0, 2, 0, 0],
  [0, 2, 0, 0]
];

const JShape = [
  [0, 3, 0],
  [0, 3, 0],
  [3, 3, 0],
];

const OShape = [
  [4, 4],
  [4, 4]
];

const ZShape = [
  [5, 5, 0],
  [0, 5, 5],
  [0, 0, 0],
];

const SShape = [
  [0, 6, 6],
  [6, 6, 0],
  [0, 0, 0],
];

const TShape = [
  [0, 7, 0],
  [7, 7, 7],
  [0, 0, 0],
];


class Piece {
  constructor(position) {
    this.position = { x: 0, y: 0 };
    this.shape = null;
    this.makePiece();

  }

  makePiece() {
    const shapesArray = [LShape, lShape, JShape, OShape, ZShape, SShape, TShape];
    this.shape = shapesArray[Math.floor(Math.random() * shapesArray.length)];
    // this.shape = shapesArray[3];
    this.position.x = Math.floor(5- this.shape[0].length/2);
  }


}

export default Piece;
