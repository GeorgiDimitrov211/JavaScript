function multiplicationTable(n){
n = Number(n);
let row = '<tr><th>x</th>';
  console.log('<table border="1">');
  for (let col=1; col<=n; col++){
    row += '<th>' + col + '</th>'; 
  }
  console.log(row + '</tr>');
  console.log('<table>');
}
multiplicationTable(5);
multiplicationTable(3);
multiplicationTable(6);
