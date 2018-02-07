function deleteByEmail() {
  let emails = document.querySelectorAll('#customers tr td:last-Child');
  for(let email of emails){
    if(email.textContent == document.getElementsByName('email')[0].value){
      email.parentNode.parentNode.removeChild(email.parentElement);
      document.getElementById('result').textContent = 'Deleted.';
    } else {
      document.getElementById('result').textContent = 'Not found.';
    }
  }
}