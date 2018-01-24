function fromJSONToHTMLTable(input){

  let html = '';
  let arr = JSON.parse(input);
  html += `<table>\n`;

  html += `  <tr>`;
  for (let key of Object.keys(arr[0])){
    html += `<th>${htmlEscape(key)}</th>`;
  }
  html += `</tr>\n`;

  for (let obj of arr){
    html += `  <tr>`;
    for(let prop in obj){
      let value = String(obj[prop]);
      html += `<td>${htmlEscape(value)}</td>`
    }
    html += `</tr>\n`;
  }

  function htmlEscape(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  html += `</table>`;
  console.log(html)
}
fromJSONToHTMLTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);
