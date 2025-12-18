const audio = document.getElementById('audio');
const songSelect = document.getElementById('songSelect');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');

// Lista de canciones con sus metadatos
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
    title: "La marcha de las vocales",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20marcha%20de%20las%20vocales.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20marcha%20de%20las%20vocales.png"
  },
  {
    title: "El abecedario cantado",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20abecedario%20cantado.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20abecedario%20cantado.png"
  },
  {
    title: "Los colores del arcoiris",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Los%20colores%20del%20arcoiris.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Los%20colores%20del%20arcoiris.png"
  },
  {
    title: "La canción de los números",
    artist: "SkyBooks",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20canción%20de%20los%20números.mp3",
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
    title: "La Historia del helado",
    artist: "SkyBooks+AI",
    audio: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.mp3",
    cover: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/la Historia del helado.png"
  }
];

function fillSongList() {
  songSelect.innerHTML = "";
  songs.forEach((song, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = "🎵 " + song.title;
    songSelect.appendChild(option);
  });
}
// Canción actual
let currentSongIndex = 0;

function changeSong() {
  const selectedIndex = parseInt(songSelect.value);
  
  if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < songs.length) {
    currentSongIndex = selectedIndex;
    loadSong(currentSongIndex);
  }
}

function loadSong(index) {
  const song = songs[index];
  
  // Actualizar metadatos
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.audio;
  
  // Cargar y reproducir automáticamente
  audio.load();
  playSong();
}

function playSong() {
  if (audio.src) {
    audio.play().catch(e => {
      console.log("Error al reproducir:", e);
      alert("Hubo un problema al reproducir la canción. Intenta de nuevo.");
    });
  } else {
    // Si no hay canción seleccionada, cargar la primera
    if (songs.length > 0) {
      currentSongIndex = 0;
      loadSong(currentSongIndex);
    }
  }
}

function pauseSong() {
  audio.pause();
}

// Cargar la primera canción al iniciar
window.onload = function() {
  if (songs.length > 0) {
    fillSongList();
    loadSong(0);
    songSelect.value = "0";
  }
};


// Manejar errores de carga de imagen
cover.onerror = function() {
  this.src = "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/cover.png";
};
