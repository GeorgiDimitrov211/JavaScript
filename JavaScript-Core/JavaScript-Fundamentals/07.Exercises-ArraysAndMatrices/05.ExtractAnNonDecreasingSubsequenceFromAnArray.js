function extractAnNonDecreasingSubsequenceFromAnArray(input) {
  let currentBiggest = Number.NEGATIVE_INFINITY; 
  for (let i = 0; i < input.length; i++){
    if (Number(input[i]) >= currentBiggest){
      currentBiggest = Number(input[i]);
      console.log(currentBiggest)
    }
  }
}
extractAnNonDecreasingSubsequenceFromAnArray(['1', '3', '8', '4', '10', '12', '3', '2', '24']);
extractAnNonDecreasingSubsequenceFromAnArray(['1', '2', '3', '4']);
extractAnNonDecreasingSubsequenceFromAnArray(['20', '3', '2', '15', '6', '1']);


