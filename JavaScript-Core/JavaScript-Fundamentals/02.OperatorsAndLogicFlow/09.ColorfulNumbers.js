function colorfulNums(n){
  let ul = "<ul> \n" ;
    for (let i = 1; i <= n; i++){
      color = i % 2 == 0 ? "blue" : "green";
      ul += "\t <li><span style='color:" + color + "'>" + i + "</span></li> \n";
    }
  ul += "</ul>";
  return ul;
}
console.log(colorfulNums('10'));
console.log(colorfulNums('12'));
console.log(colorfulNums('19'));