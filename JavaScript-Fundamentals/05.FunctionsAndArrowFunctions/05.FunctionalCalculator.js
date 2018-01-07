function functionalCalculator(a,b, op){
  a = Number(a);
  b = Number(b);
  switch(op){
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return 'Wrong operator';
  }
}
functionalCalculator(['2', '4', '+']);
functionalCalculator(['3', '3', '/']);
functionalCalculator(['18', '-1', '*']);