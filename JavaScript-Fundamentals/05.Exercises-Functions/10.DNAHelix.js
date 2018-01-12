function dnaHelix(n) {

  function cropLastLines(x, lines) {
    if(x.lastIndexOf("\n")>0) {
      for(let i = 0; i<=lines; i++){
        x = x.substring(0, x.lastIndexOf("\n"));
      }
    }
    return x;
  }
  
  let str = '';
  let arr = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
  let change = [];
  for(let i = 1; i <= n; i+=4) {
      str+= "**"+arr[0]+''+arr[1]+"**\n";
      change.push(arr.shift());
      change.push(arr.shift());
      arr.push(change[0]);
      arr.push(change[1]);
      str+= "*"+arr[0]+"--"+arr[1]+"*\n";
      change = [];
      change.push(arr.shift());
      change.push(arr.shift());
      arr.push(change[0]);
      arr.push(change[1]);
      str+= arr[0]+"----" + arr[1]+"\n";
      change = [];
      change.push(arr.shift());
      change.push(arr.shift())
      arr.push(change[0]);
      arr.push(change[1]);
      str+= "*"+arr[0]+"--"+arr[1]+"*\n";
      change = [];
      change.push(arr.shift());
      change.push(arr.shift());
      arr.push(change[0]);
      arr.push(change[1]);
      change = [];
  }
  let linesToDelete = n%4 === 0 ? 0 : Math.abs(n%4 - 4);
  console.log(cropLastLines(str, linesToDelete));
}
dnaHelix(3);
dnaHelix(11);