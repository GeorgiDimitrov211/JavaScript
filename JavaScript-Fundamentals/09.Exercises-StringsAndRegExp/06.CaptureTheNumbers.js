function captureTheNumbers(input) {
  console.log(input.join(' ').match(/\d+/g).join(' '));
}
captureTheNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);