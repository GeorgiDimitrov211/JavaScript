function janSNotation(input) {
  let arr = input.concat();
  let count = 0;

  for (let i = 0; i< input.length; i++){
    let sum = 0
    let signFlag = false
    switch(input[i]){
      case '+': 
        sum = Number(input[i-2]) + Number(input[i-1]);
        signFlag=true
      break;
      case '-': 
        sum = Number(input[i-2]) - Number(input[i-1]);
        signFlag=true
      break;
      case '*': 
        sum = Number(input[i-2]) * Number(input[i-1]);
        signFlag=true
      break;
      case '/': 
        sum = Number(input[i-2]) / Number(input[i-1]);
        signFlag=true
      break;
    }

    if(signFlag){
      input.splice(i-2,3,sum)
      i=0
      count++
    }
  }

  // console.log(count)
  if (count + 1 == arr.length - count){
    console.log(input[0])
  } else if (count < arr.length - count){
    console.log('Error: too many operands!')
  } else {
    console.log('Error: not enough operands!')
  }
}

janSNotation([3, 4,'+']);
janSNotation([5, 3, 4, '*', '-']);
janSNotation([7, 33, 8, '-']);
janSNotation([15, '/']);
janSNotation([31, 2, '+', 11, '/']);
janSNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);