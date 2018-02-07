function compInt([P, i, n, t]){
  P=Number(P);
  i=Number(i);
  n=Number(n);
  t=Number(t);
  n=12/n;
  i = i/100;
  return (P*(Math.pow((1+i/n),n*t))).toFixed(2);
}
console.log(compInt(['1500', '4.3', '3', '6']));
console.log(compInt(['100000', '5', '12', '25']));
