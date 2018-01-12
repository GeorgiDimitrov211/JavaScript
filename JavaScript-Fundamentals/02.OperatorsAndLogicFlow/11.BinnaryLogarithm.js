function binLog(input){
  input = input.map(Number);
  for( let num of input ){   
    console.log(Math.log2(num));
  }
}
binLog(['3', '5', '7']);