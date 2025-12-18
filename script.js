const audio = document.getElementById('audio');

audio.src = "https://github.com/Yeissan/Musica-Infantil/blob/7aa6c2ce33a9ec37de01c5bd91808ed968b45635/La%20herramienta%20Magica.mp3";

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}
