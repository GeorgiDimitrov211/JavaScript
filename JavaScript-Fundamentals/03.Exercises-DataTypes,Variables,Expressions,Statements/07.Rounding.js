function round([n, p]){
  n=Number(n);
  p=Number(p);
  if (p>15){
    p=15;
  }
  n=n.toFixed(p);
  return parseFloat(n);
}
console.log(round(['3.1415926535897932384626433832795', '2']));
console.log(round(['10.5', '3']));
