const playPauseBtn = document.querySelector(".play-pause");
const stopBtn = document.querySelector(".stop");
const icons = document.querySelectorAll("i");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const milisecond10 = document.querySelector(".milisecond-10");

let converter = 1;
icons[converter].style.display = "none";

minute.innerHTML = "00";
second.innerHTML = "00";
milisecond10.innerHTML = "00";

let play = false;

setInterval(() => {
  if (play) {
    // miliseconds
    milisecond10.innerHTML < 9 ? milisecond10.innerHTML = "0" + (parseInt(milisecond10.innerHTML) + 1) : (milisecond10.innerHTML < 99 ? milisecond10.innerHTML = parseInt(milisecond10.innerHTML) + 1 : milisecond10.innerHTML = "00");
  }
}, 10);
