const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const songGrid = document.getElementById('songGrid');

const songs = [
  {
    title: "La herramienta Mágica",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20herramienta%20Magica.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La herramienta Magica.png"
  },
  {
    title: "El Lápiz que Nació del Árbol",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El lapiz.png"
  },
  {
    title: "La Silla Amiga",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Silla Amiga.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Silla Amiga.png"
  },
  {
    title: "El zapato explorador",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El zapato explorador.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El zapato explorador.png"
  },
  {
    title: "El libro Sabio",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El libro Sabio.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El libro Sabio.png"
  },
  {
    title: "El reloj maestro",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El reloj maestro.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El reloj maestro.png"
  },
  {
    title: "Lampara de ilusiones",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/lampara.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Lampara de ilusiones.png"
  },
  {
    title: "La cuchara que viene y va",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La cuchara que viene y va.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La cuchara que viene y va.png"
  },
  {
    title: "El balón pum pum",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El balon.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El balon.png"
  },
  {
    title: "La Gorra",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20gorra.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La gorra.png"
  },
  {
    title: "Telefono",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/el telefono.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Telefono.png"
  },
  {
    title: "Auto",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Auto.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Auto.png"
  },
  {
    title: "Computadora",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Computadora.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Computadora.png"
  },
  {
    title: "La gallina turuleca",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20gallina%20turuleca.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20gallina%20turuleca.png"
  },
  {
    title: "La Historia del Helado",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.png"
  }
];

let currentSongIndex = 0;

function loadSong(index) {
  const song = songs[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.audio;
  audio.load();
  audio.play();
}

function playSong() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}

function createSongGrid() {
  songGrid.innerHTML = "";

  songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `<img src="${song.cover}" alt="${song.title}">`;
    card.onclick = () => loadSong(index);
    songGrid.appendChild(card);
  });
}

window.onload = () => {
  createSongGrid();
  loadSong(0);
};
