function distanceBetweenPoints(x1, y1, x2, y2){
  x1 = Number(x1);
  y1 = Number(y1);
  x2 = Number(x2);
  y2 = Number(y2);
  let distance = 0; 
  let point1 = {
    x : x1,
    y : y1
  }
  let point2 = {
    x : x2, 
    y : y2
  }
  if(x2>x1){
  distance = Math.sqrt((Math.pow((y1 + y2), 2)) + (Math.pow((x2 - x1), 2)));
  } else{
  distance = Math.sqrt((Math.pow((y1 - y2), 2)) + (Math.pow((x2 - x1), 2)));
  }
  console.log(distance);
}
distanceBetweenPoints ('2', '4', '5', '0');
distanceBetweenPoints ('2.34', '15.66', '-13.55', '-2.9985');
