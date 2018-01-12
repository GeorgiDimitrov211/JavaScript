function modifyAverage(input) {
  function sum(number) {
    return number.toString().split('').reduce((a,b) => Number(a) + Number(b))
  }
  let number = input
  let s = Number(sum(number))
  let digits = number.toString().length

  while(s / digits <= 5) { 
    number+='9'
    digits=number.length
    s = Number(sum(number))
  }
  console.log(Number(number))
}
modifyAverage(101);
modifyAverage(5835);
