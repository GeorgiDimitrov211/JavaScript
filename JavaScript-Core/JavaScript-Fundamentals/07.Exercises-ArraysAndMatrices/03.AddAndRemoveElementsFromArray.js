function addAndRemoveElementsFromAnArray(input) {
  let result = [];
  let count = 0;
  for(let i = 0; i<input.length;i++){
    if (input[i] == 'add') {
      count++;
      result.push(count);
    } else {
      result.pop();
      count++;
    }
  }
  if(result.length == 0){
    console.log('Empty');
  }else{
    console.log(result.join('\n'));
  }
}
addAndRemoveElementsFromAnArray(['add', 'add', 'add', 'add']);
// addAndRemoveElementsFromAnArray(['add', 'add', 'remove', 'add', 'add']);
// addAndRemoveElementsFromAnArray(['remove', 'remove', 'remove']);

