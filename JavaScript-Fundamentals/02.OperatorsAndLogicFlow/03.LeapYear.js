function isLeapYear(year){
  let result = year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ? "yes" : "no";
  return result;  
}
console.log(isLeapYear('1999'));
console.log(isLeapYear('2000'));
console.log(isLeapYear('1900'));