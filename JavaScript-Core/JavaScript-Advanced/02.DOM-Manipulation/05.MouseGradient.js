function attachGradientEvents() {
  let gradient = document.getElementById('gradient');
  gradient.addEventListener('mousemove', move);
  gradient.addEventListener('mouseout', out);

  function move(event) {
    let percentage = event.offsetX / (event.target.clientWidth - 1);
    percentage = Math.trunc(percentage * 100);
    document.getElementById('result').textContent = percentage + '%';
  };

  function out(event) {
    document.getElementById('result').textContent = '';
  };
}