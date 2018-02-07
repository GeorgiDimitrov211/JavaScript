function censorship(str, arr) {
  for (let i = 0; i < arr.length; i++){
    let replaced = '-'.repeat(arr[i].length);
    while (str.indexOf(arr[i]) > -1){
      str = str.replace(arr[i], replaced);
    }
  }
  console.log(str);
  
}
censorship('roses are red, violets are blue', ['red', 'violets are']);





