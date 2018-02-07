function focus() {

  arr = document.getElementsByTagName('input');

  for (let input of arr) {
    input.addEventListener('focus', function () {
      input.parentNode.setAttribute('class', 'focused')
    })
    input.addEventListener('blur', function () {
      input.parentNode.removeAttribute('class')
    })
  }
}