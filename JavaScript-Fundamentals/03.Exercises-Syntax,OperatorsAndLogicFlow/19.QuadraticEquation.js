function quadraticEquation(a, b, c){
  a = Number(a);
  b = Number(b);
  c = Number(c);
  let x1 = 0;
  let x2 = 0;
  let D = Math.pow(b,2) - 4*a*c;
  if(D < 0){
    console.log("No");
  }else if(D === 0){
    x1 = -b/(2*a);
    console.log(x1);
  }
  else{
    x1 = (-b + Math.sqrt(D))/ (2*a);
    x2 = (-b - Math.sqrt(D))/ (2*a);
    if(x1>x2){
      console.log(x2);
      console.log(x1);
    }else{
      console.log(x1);
      console.log(x2);
    }
  }
}
quadraticEquation(6, 11, -35);
quadraticEquation(1, -12, 36);
quadraticEquation(5, 2, 1);
