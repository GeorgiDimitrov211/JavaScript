function toggle() {
  let toggleBtn = document.getElementsByClassName('button')[0];
  let textToShow = document.getElementById('extra');
  if (toggleBtn.textContent === 'More'){
    toggleBtn.textContent = 'Less';
    textToShow.style.display = 'block';
  } else {
    toggleBtn.textContent = 'More';
    textToShow.style.display = 'none';
  }
}