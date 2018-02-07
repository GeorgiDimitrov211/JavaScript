function stopwatch() {

  let start = document.getElementById('startBtn');
  let stop = document.getElementById('stopBtn');
  let time = 0; 
  let timer;
  function tick(){
    time++;
    document.getElementById('time').textContent = `${('0' + Math.trunc(time/60)).slice(-2)}:${('0' + Math.floor(time%60)).slice(-2)}`;
  }
  start.addEventListener('click', function () {
    start.setAttribute('disabled', 'true');
    stop.removeAttribute('disabled');
    time = 0;
    document.getElementById('time').textContent = '00:00';
    timer = setInterval(tick, 1000);
  })
  stop.addEventListener('click', function () {
    stop.setAttribute('disabled', 'true');
    start.removeAttribute('disabled');
    clearInterval(timer);
  })

}