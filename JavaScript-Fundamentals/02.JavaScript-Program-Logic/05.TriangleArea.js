function triangleArea(a, b, c){
  a = Number(a);
  b = Number(b);
  c = Number(c);
  let sp = (a + b + c) / 2; 
  return (Math.sqrt(sp * ((sp - a) * (sp - b) * (sp - c))));
}
console.log(triangleArea('3', '4', '5'));
console.log(triangleArea('2', '3.5', '4'));