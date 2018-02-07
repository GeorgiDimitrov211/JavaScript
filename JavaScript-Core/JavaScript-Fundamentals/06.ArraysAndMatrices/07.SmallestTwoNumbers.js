function smallestTwoNumbers(input) {
  let result = [];
  result = input.sort((a, b) => a-b)
  console.log(result.splice(0, 2).join(' '));
}
equal([[20, 50, 10], [8, 33, 145]]);
equal([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
