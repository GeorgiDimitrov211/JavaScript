function expressionSplit(input) {
  let arr = input.replace(/[,();.\t ]+/g, ' ').trim().split(' ');
  console.log(arr.join('\n'))
}
expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}')





