function validityChecker(input) {
  let x1 = input[0];
  let y1 = input[1];
  let x2 = input[2];
  let y2 = input[3];
  let distance = Math.hypot(x1 - 0, y1 - 0);
  if (Number.isInteger(distance)){
    console.log('{' + x1 + ', ' + y1 + '} to ' + '{' + '0' + ', ' + '0' + '} is valid');
  }else{
  console.log('{' + x1 + ', ' + y1 + '} to ' + '{' + '0' + ', ' + '0' + '} is invalid');
  }
  distance = Math.hypot(x2 - 0, y2 - 0);
  if (Number.isInteger(distance)){
    console.log('{' + x2 + ', ' + y2 + '} to ' + '{' + '0' + ', ' + '0' + '} is valid');
  }else{
  console.log('{' + x2 + ', ' + y2 + '} to ' + '{' + '0' + ', ' + '0' + '} is invalid');
  }
  distance = Math.hypot(x2-x1, y2-y1)
  if (Number.isInteger(distance)){
    console.log('{' + x1 + ', ' + y1 + '} to ' + '{' + x2 + ', ' + y2 + '} is valid');
  }else{
  console.log('{' + x1 + ', ' + y1 + '} to ' + '{' + x2 + ', ' + y2 + '} is invalid');
  }
}


validityChecker(['3', '0', '0', '4', '2', '1', '1', '1']);
validityChecker(['2', '1', '1', '1']);