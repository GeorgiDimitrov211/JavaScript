function biggest(input){
  if(input[0] > input[1] && input[0] > input[2]){
    return input[0];
  }else if(input[1] > input[0] && input[1] > input[2]){
    return input[1];
  }else{
    return input[2];
  }
}
console.log(biggest(['5', '-2', '7']));
console.log(biggest(['43', '43.2', '43.1']));

