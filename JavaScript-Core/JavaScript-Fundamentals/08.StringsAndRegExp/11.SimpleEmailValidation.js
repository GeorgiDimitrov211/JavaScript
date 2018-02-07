function simpleEmailValidation(input) {
  return /^[a-zA-Z0-9]+@+[a-z]+\.+[a-z]+$/.test(input) ? 'Valid' : 'Invalid';
}
simpleEmailValidation('valid@email.bg');
simpleEmailValidation('invalid@emai1.bg')





