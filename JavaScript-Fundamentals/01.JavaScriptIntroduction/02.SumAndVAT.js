function sumAndVat(input){
  let sum = 0;
  for (let num of input){
    sum += Number(num); 
  }
  let vat = sum * 20/100; 
  let total = sum + vat; 
  console.log("sum = " + sum);
  console.log("VAT = " + vat);
  console.log("total = " + total);
}
sumAndVat ([-6, 2, 5]);
