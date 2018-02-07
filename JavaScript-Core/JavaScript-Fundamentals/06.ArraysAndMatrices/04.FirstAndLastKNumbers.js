function firstAndLastKNumbers(input) {
  let k = input.shift();
  let result1 = [];
  let result2 = [];
  for(let i = 0; i < k; i++){
    result1.push(input[i]);
    input.reverse();
    result2.push(input[i]);
    input.reverse();
  }
  console.log(result1.join(' ') + '\n' + result2.reverse().join(' '))
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);