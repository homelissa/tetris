var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.matrix = this.make2DBoard(width, height);

    this.draw = function() {
      ctx.beginPath();
      ctx.strokeStyle='red';
      ctx.rect(20, 20, this.width, this.height);
      ctx.stroke();
    };
  }


  //rows: height, cols: width
  make2DBoard(rows, cols) {
    var arr = new Array(rows);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(cols).fill(0);
    }

    return arr;
  }


}

export default Board;
