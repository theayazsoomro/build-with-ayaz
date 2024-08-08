"use strict";

/******************************************
              Stop Watch
*******************************************/
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
function start() {
  timer = true;
  stopWatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("count").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
}

function stopWatch() {
  let countdown = document.getElementById("count");
  let seconds = document.getElementById("sec");
  let minutes = document.getElementById("min");
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      count = 0;
      sec = sec + 1;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      sec = 0;
      min = 0;
    }

    count < 10
      ? (countdown.innerHTML = "0" + count)
      : (countdown.innerHTML = count);
    sec < 10 ? (seconds.innerHTML = "0" + sec) : (seconds.innerHTML = sec);
    min < 10 ? (minutes.innerHTML = "0" + min) : (minutes.innerHTML = min);
    setTimeout("stopWatch()", 10);
  }
}
let emoji = String.fromCodePoint(128153);
let footer = `Made with ${emoji} By : <a href="http://www.youtube.com/@theayazsoomro">Build with Ayaz</a>`;
document.querySelector("footer").innerHTML = footer;
