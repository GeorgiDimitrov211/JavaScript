function rectangleOfStars(n = 5){
n = Number(n);
let stars = '* '.repeat(n);
  for (let i = 1; i<= n; i++){
    console.log(stars);
  } 
}
rectangleOfStars(['1']);
rectangleOfStars(['2']);
rectangleOfStars();