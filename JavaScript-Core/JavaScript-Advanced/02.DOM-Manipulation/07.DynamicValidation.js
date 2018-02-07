function validate() {
  let regex = /^[a-z]+@[a-z]+.[a-z]+$/g;
  let inputEmail = document.getElementById('email');
  inputEmail.addEventListener('change', function () {
    if (!regex.test(inputEmail.value)) {
      inputEmail.setAttribute('class', 'error')
    } else {
      inputEmail.removeAttribute('class')
    }
  })
  inputEmail.addEventListener('click', function () {
    inputEmail.removeAttribute('class')
  })
}