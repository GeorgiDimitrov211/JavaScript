function magicMatrices(input) {
  let sumRow = 0; 
  let sumCol = 0; 
  let result = [];
  for (let row = 0; row < input.length; row++){
    sumRow = 0; 
    for (let col = 0; col < input[row].length; col++){
      sumRow += input[row][col]
    }
    result.push(sumRow);
  }
  for (let col = 0; col < input.length; col++){
    sumCol = 0; 
    for (let row = 0; row < input.length; row++){
      sumCol += input[col][row]
    }
    result.push(sumCol);
  }
  for(let i = 0; i< result.length-1; i++){
    if(result[i] != result[i+1]){
      return false
    } 
  }
  return true;
}
console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]))
console.log(magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]))
console.log(magicMatrices([[1, 2, 3], [1, 2]]))


