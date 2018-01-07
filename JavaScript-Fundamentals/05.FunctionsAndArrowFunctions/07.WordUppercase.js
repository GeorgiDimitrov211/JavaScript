function wordsUppercase(input){
  console.log(input.split(/\W+/g).filter(e => e !== '').join(', ').toUpperCase())
}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');  