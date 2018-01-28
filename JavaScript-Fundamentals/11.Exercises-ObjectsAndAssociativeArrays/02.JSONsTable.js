function jsonsTable(input){

  let html = '<table>\n';

  for (let obj of input){

    obj = JSON.parse(obj)

    html += '    <tr>\n'

    html += `        <td>${obj.name}</td>\n`
    html += `        <td>${obj.position}</td>\n`
    html += `        <td>${obj.salary}</td>\n`

    html += '    <tr>\n'
  }

  html += '</table>'
  console.log(html)
}   
jsonsTable(['{"name":"Pesho","position":"Promenliva","salary":100000}', '{"name":"Teo","position":"Lecturer","salary":1000}', '{"name":"Georgi","position":"Lecturer","salary":1000}']);
