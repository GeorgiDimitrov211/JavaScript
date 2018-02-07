function countWordsInAText(input){
  arr = input[0].split(/\W+/).filter(e => e != '');
  let obj = {};
  
  for (let i = 0; i < arr.length; i++){
    let word = arr[i];
    let count = countInArr(arr, arr[i]);
    if(!obj.hasOwnProperty(word)){
      obj[word] = 0; 
    }
    obj[word] = count;
  }
  
  function countInArr(arr, word){
    return arr.filter(e => e == word).length
  }
  console.log(JSON.stringify(obj));
}   
countWordsInAText(["Far too slow, you're far too slow."]);
countWordsInAText(["JS devs use Node.js for server-side JS.-- JS for devs"]);
