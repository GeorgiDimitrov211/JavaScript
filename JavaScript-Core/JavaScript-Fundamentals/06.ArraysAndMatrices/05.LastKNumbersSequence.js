function lastKNumbersSequence(n, k) {
  let result = [];
  let sum = 1;
  for(let i = 0; i < n; i++){
    for(let j = 1; j <= k; j++){
      if (i- j< 0){
        continue;
      } else {
      sum += result[i-j];
      }
    }
    result.push(sum);
    sum = 0;
  }
  console.log(result.join(' '))
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);
lastKNumbersSequence(9, 5);