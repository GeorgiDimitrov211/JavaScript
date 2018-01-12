function binToDec([bin]){
  bin = bin.split("");
  bin = bin.reverse();
  let dec = 0 ;
  for (let index in bin){
    dec = dec + bin[index]*Math.pow(2, index);
  }
  return dec;
}
console.log(binToDec(['00001001']));
console.log(binToDec(['11110000']));

