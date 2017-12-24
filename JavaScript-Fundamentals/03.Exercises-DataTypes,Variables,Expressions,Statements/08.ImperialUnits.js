function imperialUnits([inches]){
  inches=Number(inches);
  feet = Math.floor(inches / 12);
  inches = inches % 12;
  console.log(feet + '\'-' + inches + '"' );
}
console.log(imperialUnits(['36']));
console.log(imperialUnits(['55']));
console.log(imperialUnits(['11']));
