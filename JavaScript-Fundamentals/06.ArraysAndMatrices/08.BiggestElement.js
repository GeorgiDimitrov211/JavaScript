function biggestElement(input) {
  let result = [];
  for(let i = 0; i<input.length; i++){
    result.push(Math.max.apply(null, input[i]));
  }
  console.log(Math.max.apply(null, result));
}
biggestElement([[20, 50, 10], [8, 33, 145]]);
biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
