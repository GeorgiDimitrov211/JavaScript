function multiplicationTable(n){
  let headingRow = '<tr><th>x</th>';
  let middleRow = '<tr><th>';
  let multiplication = 1; 
  let multlog = '';
  console.log('<table border="1">');
  for (let i = 1; i<=n; i++){
    headingRow += '<th>' + i + '</th>';
  }
  console.log(headingRow + '</tr>');
  for(let j = 1; j <= n; j++){
    for(let k = 1; k<=n; k++){
      multlog += '<td>' + k*j + '</td>';
    }
    console.log('<tr><th>' + j + '</th>' + multlog + '</tr>');
    multlog = '';
  }
  console.log('<table>');
}
multiplicationTable(5);
multiplicationTable(3);
multiplicationTable(6);
