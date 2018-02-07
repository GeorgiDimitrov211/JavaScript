function tripLength(input) {
  [x1, y1, x2, y2, x3, y3] = input.map(Number);
  let first = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
  let second = Math.sqrt(((x3 - x2) * (x3 - x2)) + ((y3 - y2) * (y3 - y2)));
  let third = Math.sqrt(((x3 - x1) * (x3 - x1)) + ((y3 - y1) * (y3 - y1)));
  if((first <= third) && (third => second)){
    return `1->2->3: ${first + second}`
  }else if((first <= second) && (third < second)){
    return `2->1->3: ${third + first}`
  }else{
    return `1->3->2: ${second + third}`
  }
}
console.log(tripLength(['0', '0', '2', '0', '4', '0']));
console.log(tripLength(['5', '1', '1', '1', '5', '4']))
console.log(tripLength(['-1', '-2', '3.5', '0', '0', '2']));


