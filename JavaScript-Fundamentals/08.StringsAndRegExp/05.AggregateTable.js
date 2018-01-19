function aggregateTable(input) {
  
  let sum = 0;
  let list = [];
  
  for(let line of input){
    let townData = line.split('|');
    let townName = townData[1].trim();
    list.push(townName);
    sum += Number(townData[2]);
  }
  console.log(list.join(', '));
  console.log(sum);
}
aggregateTable(['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']);




