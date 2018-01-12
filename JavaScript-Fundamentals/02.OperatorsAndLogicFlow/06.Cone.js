function cone(r, h){
  r = Number(r);
  h = Number(h);
  let v = (Math.PI * r * r * h) / 3; 
  let a = (Math.PI * r)*(r + Math.sqrt(r * r + h * h))
  console.log(v.toFixed(4));
  console.log(a.toFixed(4));
}
cone('3', '5');
cone('3.3', '7.8');
cone('2.2', '4');