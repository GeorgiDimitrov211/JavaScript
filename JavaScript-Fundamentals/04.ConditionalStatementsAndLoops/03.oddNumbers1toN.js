function oddNumbers1toN(input){
  let n = Number(input[0]);
  for(let i=1;i<=n;i+=2){
    console.log(i);
  }
  return 0;
}
console.log(oddNumbers1toN(['5']));
console.log(oddNumbers1toN(['4']));
console.log(oddNumbers1toN(['7']));

