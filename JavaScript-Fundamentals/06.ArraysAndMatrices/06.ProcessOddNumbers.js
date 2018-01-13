function processOddNumbers(input) {
  let result = [];
  for (let i = 1; i < input.length; i+=2){
    result.unshift(input[i] * 2); 
  }
  console.log(result.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3 ]);
