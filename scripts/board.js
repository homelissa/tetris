window.addEventListener("DOMContentLoaded", () => {
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');
});

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.make2DBoard(width, height);
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
