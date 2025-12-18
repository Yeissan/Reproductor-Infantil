const audio = document.getElementById("audio");
const coverImg = document.getElementById("coverImg");
const trackTitle = document.getElementById("trackTitle");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentTrack = 0;
let isPlaying = false;

const playlist = [
  {
    name: "La herramienta mágica",
    url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La herramienta Magica.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La herramienta Magica.png"
  },
  {
    name: "El lápiz que nació del árbol",
    url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.png"
  },
  {
    name: "La silla amiga",
    url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Silla Amiga.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Silla Amiga.png"
  },
  {
    name: "El zapato explorador",
    url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El zapato explorador.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El zapato explorador.png"
  },
  {
    name: "La Historia del helado",
    url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.png"
  },
];

function loadTrack(index) {
  currentTrack = index;
  audio.src = playlist[index].url;
  coverImg.src = playlist[index].cover;
  trackTitle.textContent = playlist[index].name;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
}

playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

loadTrack(0);
