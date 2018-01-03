function pointsInRectangle(input){
  let x = Number(input[0]);
  let y = Number(input[1]);
  let xMin = Number(input[2]);
  let xMax = Number(input[3]);
  let yMin = Number(input[4]);
  let yMax = Number(input[5]);
  if((xMax >= x >= xMin) && (yMax >= y >= xMin)){
    console.log('inside');
  }else {
    console.log('outside');
  }
}
pointsInRectangle(['5', '-2', '7']);
pointsInRectangle(['43', '43.2', '43.1']);

