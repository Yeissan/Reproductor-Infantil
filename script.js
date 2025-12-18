const audio = document.getElementById('audio');
const songSelect = document.getElementById('songSelect');
const title = document.getElementById('title');

// Lista de canciones con sus títulos
const songs = [
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20herramienta%20Magica.mp3", title: "La herramienta Mágica"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El Lápiz que Nació del Árbol.mp3", title: "El Lápiz que Nació del Árbol"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Silla Amiga.mp3", title: "La Silla Amiga"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El zapato explorador.mp3", title: "El zapato explorador"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La Historia del helado.mp3", title: "La Historia del helado"}
];

function changeSong() {
  const selectedUrl = songSelect.value;
  if (selectedUrl) {
    audio.src = selectedUrl;
    
    // Buscar y mostrar el título correspondiente
    const selectedSong = songs.find(song => song.url === selectedUrl);
    if (selectedSong) {
      title.textContent = selectedSong.title;
    }
    
    // Cargar y reproducir automáticamente
    audio.load();
    playSong();
  }
}

function playSong() {
  if (audio.src) {
    audio.play().catch(e => console.log("Error al reproducir:", e));
  } else {
    alert("Por favor, selecciona una canción primero");
  }
}

function pauseSong() {
  audio.pause();
}
