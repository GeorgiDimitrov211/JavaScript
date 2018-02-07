function townsToJSON(input) {

  let result = [];
  let row = input.map(e => e.split(/\s*\|\s*/).filter(e => e != ''));
  let firstRow = row.shift();

  for(let i = 0; i < row.length; i++){
    let resultObject = {};
    resultObject[firstRow[0]] = row[i][0];
    resultObject[firstRow[1]] = Number(row[i][1]);
    resultObject[firstRow[2]] = Number(row[i][2]);
    result.push(resultObject);
  }
  console.log(JSON.stringify(result));
}
townsToJSON([
'| Town | Latitude | Longitude |', 
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'
]);
