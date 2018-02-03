function extractText() {
  let elements = document.getElementsByTagName('li');
  for (let element of elements) {
    document.getElementById('result').value += element.textContent + '\n';
  }
}