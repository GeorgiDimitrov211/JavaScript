function extract(str) {
  let textToExtract = document.getElementById(str).textContent;
  let arr = textToExtract.match(/\(([^)]+)\)/g)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(1, -1)
  }
  return arr.join('; ')
}