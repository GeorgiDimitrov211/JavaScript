function orbit (input) {
  let createMatrix = function (rows, cols, x, y) {
    let matrix = []
    for (let r = 0; r < rows; r++) {
      let line = []
      for (let c = 0; c < cols; c++) {
        line.push(Math.max(Math.abs(r - x), Math.abs((c - y))) + 1)
      }
      matrix.push(line)
    }
    return matrix
  }

  let rows = input[0]
  let cols = input[1]
  let x = input[2]
  let y = input[3]

  let matrix = createMatrix(rows, cols, x, y)
  console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);
orbit([4, 4, 0, 3]);
orbit([4, 4, 3, 0]);
orbit([4, 4, 3, 3]);




// if (col >= x-firstElement - 1 && col <= firstElement+1){
//   matrix[row][col] = firstElement;
// } else {
//   matrix[row][col] = firstElement + 1 ;
// }