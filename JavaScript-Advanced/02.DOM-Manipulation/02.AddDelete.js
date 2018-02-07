function addItem() {
  let newItemText = document.getElementById('newText')
  let newItem = document.createElement('li');
  newItem.textContent = newItemText.value + ' ';
  let link = document.createElement('a');
  link.textContent = '[Delete]';
  link.href = '#';
  link.addEventListener('click', deleteItem)
  newItem.appendChild(link);
  document.getElementById('items').appendChild(newItem);
  newItemText.value = '';

  function deleteItem() {
    newItem.parentNode.removeChild(newItem);
  }
}