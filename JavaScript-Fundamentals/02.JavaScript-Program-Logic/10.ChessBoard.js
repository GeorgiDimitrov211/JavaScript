function chessBoard(n){
  let chessboard = '<div class="chessboard"> \n';
  let color = 'black';
  for(let row = 1; row <= n; row++){
    chessboard += "  <div> \n";
    if (row % 2 == 0){
      color = 'white';
    }else {
      color = 'black';
    }
    for(let col = 1; col <=n; col++){
      chessboard += '    <span class="' + color + '"></span> \n';
      if (color == 'white'){
        color = 'black'
      } else {
        color = 'white';
      }
    }
    chessboard += "  </div> \n"; 
  }
  chessboard += "</div>";
  return chessboard;
}
console.log(chessBoard('4'));
console.log(chessBoard('3'));
console.log(chessBoard('8'));