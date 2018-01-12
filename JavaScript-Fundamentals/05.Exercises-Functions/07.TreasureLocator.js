function treasureLocator(input) {
  let x = 0;
  let y = 0;
  for(let i = 0; i<input.length; i+=2){
    x = input[i];
    y = input[i+1];
    if(x>=1 && x<=3){
      if(y>=1 && y<=3){
        console.log('Tuvalu');
        continue;
      }
    }
    if(x>=8 && x<=9){
      if(y>=0 && y<=1){
        console.log('Tokelau');
        continue;
      }
    }
    if(x>=5 && x<=7){
      if(y>=3 && y<=6){
        console.log('Samoa');
        continue;
      }
    }
    if(x>=4 && x<=9){
      if(y>=7 && y<=8){
        console.log('Cook');
        continue;
      }
    }
    if(x>=0 && x<=2){
      if(y>=6 && y<=8){
        console.log('Tonga');
        continue;
      }
    }
    console.log('On the bottom of the ocean')
  }
}
treasureLocator(['4', '2', '1.5', '6.5', '1', '3']);
treasureLocator(['6', '4']);
