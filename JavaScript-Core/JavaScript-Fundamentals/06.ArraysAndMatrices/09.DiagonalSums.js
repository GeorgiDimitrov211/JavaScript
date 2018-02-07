function diagonalSums(input) {
  let diagonal1 = 0; 
  let diagonal2 = 0; 
  let count = 0;
  for(let i = 0; i<input.length; i++){
    diagonal1 += input[i][count];
    count++;
  }
  count = input.length - 1;
  for(let i = 0; i<input.length; i++){
    diagonal2 += input[count][i];
    count--;
  }
  console.log(diagonal1, diagonal2)
}
diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);
