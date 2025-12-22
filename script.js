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
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20herramienta%20Magica.png"
  },
  {
    title: "El Lápiz que Nació del Árbol",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.png"
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
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Lampara de iluciones.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Lampara de ilusiones.png"
  },
  {
    title: "La canción de los números",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Lampara%de%iluciones.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20canción%20de%20los%20números.png"
  },
  {
    title: "El patito feo",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20patito%20feo.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20patito%20feo.png"
  },
  {
    title: "Las ruedas del autobús",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Las%20ruedas%20del%20autobús.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Las%20ruedas%20del%20autobús.png"
  },
  {
    title: "Estrellita dónde estás",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Estrellita%20dónde%20estás.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Estrellita%20dónde%20estás.png"
  },
  {
    title: "La familia dedo",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20familia%20dedo.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20familia%20dedo.png"
  },
  {
    title: "Cumpleaños feliz infantil",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Cumpleaños%20feliz%20infantil.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Cumpleaños%20feliz%20infantil.png"
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
