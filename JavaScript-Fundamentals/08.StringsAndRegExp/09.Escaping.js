function htmlEscape(input) {
  console.log(`<ul>`)
  for(let i = 0; i < input.length; i++){
      console.log(`<li>${input[i].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}</li>`);
  }
  console.log(`</ul>`)
}
htmlEscape(['<b></b>unescaped text</b>', 'normal text']);
htmlEscape(['<div style=\"color: red;\"></div>Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell2</td><tr>'])





