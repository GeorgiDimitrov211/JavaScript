function evenPositionElement(input) {
  let result = ''; 
  for(let i = 0; i < input.length; i += 2){
    result += input[i] + ' ';
  }
  console.log(result);
}
evenPositionElement(['20', '30', '40']);
evenPositionElement(['5', '10']);