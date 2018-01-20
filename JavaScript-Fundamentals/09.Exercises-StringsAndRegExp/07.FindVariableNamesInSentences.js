function findVariableNamesInSentences(input) {
  let result = [];
  match = input.match(/\b_[A-Za-z0-9]+\b/g);
  for (let i = 0; i < match.length; i++){
    result.push(match[i].slice(1))
  }
  console.log(result.join(','))
}
findVariableNamesInSentences('The _id and _age variables are both integers.');
findVariableNamesInSentences('__invalidVariable _evenMoreInvalidVariable_ _validVariable');