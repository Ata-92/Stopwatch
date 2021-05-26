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

    // seconds
    milisecond10.innerHTML === "00" && (second.innerHTML < 9 ? second.innerHTML = "0" + (parseInt(second.innerHTML) + 1) : (second.innerHTML < 59 ? second.innerHTML = parseInt(second.innerHTML) + 1 : second.innerHTML = "00"));

    //minutes
    (milisecond10.innerHTML === "00" && second.innerHTML === "00") && (minute.innerHTML < 9 ? minute.innerHTML = "0" + (parseInt(minute.innerHTML) + 1) : (minute.innerHTML < 59 ? minute.innerHTML = parseInt(minute.innerHTML) + 1 : minute.innerHTML = "00"));
  }
}, 10);

playPauseBtn.addEventListener("click", () => {
  play = !play;
  icons[1 - converter].style.display = "none";
  icons[converter].style.display = "initial";
  converter = 1 - converter;
});
