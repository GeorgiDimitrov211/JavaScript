function sortAnArrayByTwoCriteria(input) {
  input.sort((a,b) => {
    if (a.toLowerCase().length != b.toLowerCase().length){
      return (a.toLowerCase().length - b.toLowerCase().length);
   } else {
      if(a.toLowerCase() < b.toLowerCase()) return -1;
      if(a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
   }
  })
  console.log(input.join('\n'))
  
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);


