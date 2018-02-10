function addItem() {
  let newItemText = document.getElementById('newItemText');
  let newItemValue = document.getElementById('newItemValue');
  let newOptionElement = document.createElement('option');
  newOptionElement.value = newItemValue.value;
  newOptionElement.textContent = newItemText.value;
  document.getElementById('menu').appendChild(newOptionElement)
  newItemValue.value = '';
  newItemText.value = '';
}