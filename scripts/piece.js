const LShape = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 1]
];

const lShape = [
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [0, 1, 0, 0]
];

const JShape = [
  [0, 1, 0],
  [0, 1, 0],
  [1, 1, 0],
];

const OShape = [
  [1, 1],
  [1, 1]
];

const ZShape = [
  [1, 1, 0],
  [0, 1, 1],
  [0, 0, 0],
];

const SShape = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 0, 0],
];

const TShape = [
  [0, 1, 0],
  [1, 1, 1],
  [0, 0, 0],
];


class Piece {
  constructor(position) {
    this.position = { x: 0, y: 0 };
    this.shape = null;
    this.makePiece();

  }

  makePiece() {
    const shapesArray = ['LShape', 'lShape', 'JShape', 'OShape', 'ZShape', 'SShape', 'TShape'];
    this.shape = shapesArray[Math.floor(Math.random() * shapesArray.length)];
  }


}



export default Piece;
