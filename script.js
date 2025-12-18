const audio = document.getElementById('audio');

audio.src = "audio.mp3";

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}
