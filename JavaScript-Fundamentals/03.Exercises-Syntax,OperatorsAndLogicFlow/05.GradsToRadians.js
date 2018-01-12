function gradsToDegrees(grad){
  grad = Number(grad);
  let degrees = grad * 0.9;
  let rad = -1; 
  while ( degrees % 360 == 0){
    rad++;
    return rad; 
  }

  while (degrees > 360){
    degrees -= 360;
  }

  while(degrees < 0){
    degrees += 360;
  }
  return degrees;
}
console.log(gradsToDegrees('100'));
console.log(gradsToDegrees('400'));
console.log(gradsToDegrees('850'));
console.log(gradsToDegrees('-50'));