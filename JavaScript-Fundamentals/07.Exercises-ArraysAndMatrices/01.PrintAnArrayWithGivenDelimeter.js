function printAnArrayWithGivenDelimeter(input) {
  console.log(input.join(`${input.pop()}`))
}
printAnArrayWithGivenDelimeter(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printAnArrayWithGivenDelimeter(['How about no', 'I', 'will', 'not', 'do', 'it', '_']);

