let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function stop() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById("stopwatch").textContent = formattedTime;
}

function formatTime(time) {
  const ms = String(time % 1000).padStart(3, '0');
  const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((time / (1000 * 60)) % 60)).padStart(2, '0');
  const hours = String(Math.floor((time / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}.${ms}`;
}