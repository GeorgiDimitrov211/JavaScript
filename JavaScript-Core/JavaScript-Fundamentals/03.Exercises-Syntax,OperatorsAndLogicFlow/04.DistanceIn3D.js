function distanceIn3D(x, y, z, x1, y1, z1){
  x = Number(x);
  y = Number(y);
  z = Number(z);
  x1 = Number(x1);
  y1 = Number(y1);
  z1 = Number(z1);
  return Math.pow(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2) + Math.pow((z1 - z), 2), 0.5);
}
console.log(distanceIn3D('1', '1', '0', '5', '4', '0'));
console.log(distanceIn3D('3.5', '0', '1', '0', '2', '-1'));
console.log(distanceIn3D('2', '-1', '5', '3', '0', '1'));