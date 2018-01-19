function extractText(string) {

  let regex = /\(([^)]+)\)/g;
  let arr = string.match(regex);
  let result = [];
  
  for (let i in arr){
    result.push(arr[i].substr(1, arr[i].length - 2));
  }
  console.log(result.join(', '));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');






