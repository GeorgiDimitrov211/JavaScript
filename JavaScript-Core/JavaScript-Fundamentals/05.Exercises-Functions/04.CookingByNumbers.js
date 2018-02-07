function cookingByNumbers(input){
  let n = Number(input[0]);
  for(let i of input){
    switch (i){
      case 'chop': 
      n= n/2;
      console.log(n);
      break;
      case 'dice': 
      n = Math.sqrt(n);
      console.log(n);
      break;
      case 'spice': 
      n = n+1;
      console.log(n);
      break;
      case 'bake': 
      n = n*3; 
      console.log(n);
      break;
      case 'fillet': 
      n = n-n/5;
      console.log(n);
      break;
    }
  }
}
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop',]);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
