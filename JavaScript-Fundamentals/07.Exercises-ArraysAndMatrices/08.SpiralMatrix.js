function spiralMatrix(allRows, allCols) {
  let spiralMatrix = [];
  let currentNum = 0; 
  let row = 1;
  let col = -1;
  for (let i = 0; i < allRows; i++) {
    spiralMatrix.push([]);
    for (let j = 0; j < allCols; j++) {
      spiralMatrix[i].push(0);
    }
  }
  while (currentNum < allRows * allCols) {
    row--;
    col++;

    while (col < allCols && spiralMatrix[row][col] === 0) { 
      currentNum++;
      spiralMatrix[row][col] = currentNum;
      col++;
    }
    col--;
    row--;
      
    while (row >= 0 && spiralMatrix[row][col] === 0) {
      currentNum++;
      spiralMatrix[row][col] = currentNum;
      row--;
    }
    row++;
    col--;
       
    while (col >= 0 && spiralMatrix[row][col] === 0) {
      currentNum++;
      spiralMatrix[row][col] = currentNum;
      col--;
    }
    row++;
    col++;
  
    while (row < allRows && spiralMatrix[row][col] === 0) {
      currentNum++;
      spiralMatrix[row][col] = currentNum;
      row++;
    }
  }
  
  console.log(spiralMatrix.map(row => row.join(' ')).join('\n'));
}
spiralMatrix(5, 5);
spiralMatrix(3, 3);



