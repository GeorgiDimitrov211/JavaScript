function printEveryNthElementFromAnArray(input) {
  let n = input.pop();
  for(let i = 0; i<input.length;i++){
    if (i % n === 0){
      console.log(input[i]);
    }   
  }
}
printEveryNthElementFromAnArray(['5', '20', '31', '4', '20', '2']);
printEveryNthElementFromAnArray(['dsa', 'asd', 'test', 'tset', '2']);
printEveryNthElementFromAnArray(['1', '2', '3', '4', '5', '6', '1']);

