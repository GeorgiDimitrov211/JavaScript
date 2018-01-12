function distanceOverTime(v1, v2, t){
  v1 = Number(v1) / 3.6;
  v2 = Number(v2) / 3.6;
  t = Number(t); 
  let s1 = v1 * t; 
  let s2 = v2 * t; 
  return Math.abs(s1 - s2);
}
console.log(distanceOverTime('0', '60', '3600'));
console.log(distanceOverTime('11', '10', '120'));
console.log(distanceOverTime('5', '-5', '40'));