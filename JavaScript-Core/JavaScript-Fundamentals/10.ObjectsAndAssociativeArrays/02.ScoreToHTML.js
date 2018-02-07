function scoreToHTML(input) {

  let html = '';
  input = JSON.parse(input);
  html += `<table>\n`;
  html += `  <tr><th>name</th><th>score</th></tr>\n`
  
  for (let i = 0; i < input.length; i++){
    let values = Object.values(input[i]);
    html += `  <tr><td>${htmlEscape(values[0])}</td><td>${values[1]}</td></tr>\n`
  }

  function htmlEscape(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }


  html += `</table>`;
  console.log(html);
}
scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
