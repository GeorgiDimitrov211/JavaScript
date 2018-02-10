function create(sentences) {
  for (let sentence of sentences){
    let newDiv = document.createElement('div');
    let newParagraph = document.createElement('p');
    newParagraph.textContent = sentence;
    newParagraph.style.display = 'none';
    newDiv.appendChild(newParagraph);
    newDiv.addEventListener('click', function(){
      newParagraph.style.display = 'block';
    });
    console.log(newDiv)
    document.getElementById('content').appendChild(newDiv);
  }
}