function sum() {

  let sum = 0;
  arr = document.getElementsByTagName("td");
  console.log(arr)
  for (let i = 1; i < arr.length-1; i+=2){
    
    sum += Number(arr[i].textContent);
  }
  document.getElementById('sum').textContent = sum;
}