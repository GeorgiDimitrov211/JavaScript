function diagonalAttack(input) {

  let matrix = [];
  let diagonal1 = 0;
  let diagonal2 = 0;
  //input to matrix
  for (let i = 0; i < input.length; i++) {
    matrix.push(input[i].split(' '));
  }
  // sum of diagonals
  for (let row = 0; row < matrix.length; row++) {
      diagonal1 += Number(matrix[row][row]);
      diagonal2 += Number(matrix[row][matrix[row].length-1-row]);
  }
  // check if the main diagonals are equal, if yes, set elements which are not in the diagonals to the value of one of the diagonals
  if (diagonal1 == diagonal2) {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if(row != col && col != matrix[row].length-1-row){
          matrix[row][col] = diagonal1;
        }
      }
    }
  }
  console.log(matrix.map(row => row.join(' ')).join('\n'));
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);



