function composeTag([location, alt]){
let tag = {
  location: "location",
  alternate: "alt",
  }
console.log('<img src="' + location + '" alt="' + alt + '">');
}
composeTag(['smiley.gif', 'Smiley Face']);

