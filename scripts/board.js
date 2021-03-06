class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.make2DBoard(width/20, height/20);
  }

  //cols: width, rows: height
  make2DBoard(cols, rows) {
    var arr = new Array(rows);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols).fill(0);
    }

    return arr;
  }

}

export default Board;
