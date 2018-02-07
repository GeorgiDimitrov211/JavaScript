function sum() {

  let sum = 0;
  arr = document.getElementsByTagName("tr");

  for (let i = 1; i < arr.length - 1; i++) {
    sum += Number(arr[i].lastChild.textContent);
  }
  document.getElementById('sum').textContent = sum;
}