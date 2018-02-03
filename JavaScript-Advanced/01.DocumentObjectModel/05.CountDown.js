function countDown(startTime) {

  let time = startTime;
  let result = document.getElementById('time');
  let interval = setInterval(timer, 1000);

  function timer() {
    time--;
    result.value = `${Math.trunc(time/60)}:${('0' + Math.floor(time%60)).slice(-2)}`;
  }
}