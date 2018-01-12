function figureOf4Squares(n){
  n = Number(n);
  let line = '';
  if (n%2 == 0){
    for(let row = 1; row<=n-1; row++){
      if(row == 1 || (row == (n-1)/2 + 0.5)){
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '+';
          }else if(col == 2*n-1){
            line += '+';
          }else{
            line += '-';
          }
        }
      } else if(row == n-1){
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '+';
          }else if(col == 2*n-1){
            line += '+';
          }else{
            line += '-';
          }
        }
      } else {
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '|';
          }else if(col == 2*n-1){
            line += '|';
          }else{
            line += ' ';
          }
        }
      }
      console.log(line);
      line = '';
    }
  }else{
    for(let row = 1; row<=n; row++){
      if(row == 1 || (row == (n/2) + 0.5)){
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '+';
          }else if(col == 2*n-1){
            line += '+';
          }else{
            line += '-';
          }
        }
      }else if (row == n){
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '+';
          }else if(col == 2*n-1){
            line += '+';
          }else{
            line += '-';
          }
        }
      }else{
        for(let col = 1; col<=2*n-1; col++){
          if (col == 1 || col == n){
            line += '|';
          }else if(col == 2*n-1){
            line += '|';
          }else{
            line += ' ';
          }
        }
      }
      console.log(line);
      line = '';
    }
  }
}
figureOf4Squares(4);
figureOf4Squares(5);
figureOf4Squares(6);
figureOf4Squares(7);
figureOf4Squares(8);
figureOf4Squares(9);
