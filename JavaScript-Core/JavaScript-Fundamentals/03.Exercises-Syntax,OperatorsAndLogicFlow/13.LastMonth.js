function lastMonth([day, month, year]){
  month = month - 1;
  let dateObj = new Date(year,month,0);
  console.log(dateObj.getDate())
}

lastMonth(['17', '1', '2002'])
lastMonth(['13', '12', '2014'])

