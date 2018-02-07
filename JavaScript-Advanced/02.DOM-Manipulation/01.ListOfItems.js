function addItem() {
  let newItemText = document.getElementById('newItemText').value;
  let newItem = document.createElement('li');
  let newContent = document.createTextNode(newItemText);
  newItem.appendChild(newContent);
  document.getElementById('items').appendChild(newItem)
  document.getElementById('newItemText').value = '';
}