function extractUniqueWords(input){

  input = input.join(' ').toLowerCase().split(/\W+/g).filter(e => e != '');
  let unique = new Set()

  for (let word of input){
    unique.add(word);
  }
  
  console.log(Array.from(unique).join(', '))
}   
extractUniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 'Integer ac turpis commodo, varius nulla sed, elementum lectus.', ' Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.']);
