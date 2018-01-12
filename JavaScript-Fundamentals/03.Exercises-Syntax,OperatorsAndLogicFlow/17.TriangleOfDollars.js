function triangleOfDollars(input){
  let n = Number(input);
  let line = '';
  for (let col = 1; col <= n; col++){
    line += '$';
    console.log(line);
  }
}
triangleOfDollars(['3']);
triangleOfDollars(['2']);
triangleOfDollars(['4']);

