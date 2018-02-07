function capitalizeTheWords(string) {

  let str = string.toLowerCase();
  let arr = str.split(' ');
  let result = [];

  for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    result.push(arr[i]);
  }
  console.log(result.join(' '))
}
capitalizeTheWords('Capitalize these words');