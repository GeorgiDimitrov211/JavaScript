function oddOrEven(num){
  if(num % 2 == 0){
    return "even";
  } else if(num % 2 == 1 || num % 2 == -1){
    return "odd";
  } else{
    return "invalid";
  }
}
console.log(oddOrEven('5'));
console.log(oddOrEven('8'));
console.log(oddOrEven('1.5'));