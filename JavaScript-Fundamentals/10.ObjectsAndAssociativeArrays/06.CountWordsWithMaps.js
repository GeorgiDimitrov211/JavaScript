function countWordsWithMaps(input){
  
  arr = input[0].toLowerCase().split(/\W+/).filter(e => e != '').sort();
  let map = new Map;
  
  for (let i = 0; i < arr.length; i++){
    let word = arr[i];
    let count = countInArr(arr, arr[i]);
    map.set(word, count);
  }

  let arrKey = Array.from(map.keys())

  for(let i = 0; i < arrKey.length; i++){
    console.log(`'${arrKey[i]}' -> ${map.get(arrKey[i])} times`)
  }
  function countInArr(arr, word){
    return arr.filter(e => e == word).length
  }
}   
countWordsWithMaps(["Far too slow, you're far too slow."]);
countWordsWithMaps(["JS devs use Node.js for server-side JS.-- JS for devs"]);
