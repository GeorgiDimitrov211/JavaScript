function aggregateElements(input){
  let sum = 0;
  let sumInverse = 0;
  let concat = '';
  input = input.map(Number);
  for (let num of input){
    sum += num;
    concat += num;
    sumInverse += 1/num;
  }
  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}
aggregateElements(['1', '2', '3']);
aggregateElements(['2', '4', '8', '16']);