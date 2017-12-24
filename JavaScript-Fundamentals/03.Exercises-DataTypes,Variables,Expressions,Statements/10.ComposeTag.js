function composeTag([location, alt]){
let tag = {
  location: "location",
  alternate: "alt",
  }
console.log('<img src="' + location + '" alt="' + alt + '">');
}
console.log(composeTag(['smiley.gif', 'Smiley Face']));
// console.log(composeTag(['55']));
// console.log(composeTag(['11']));
