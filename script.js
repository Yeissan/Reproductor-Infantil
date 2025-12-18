const audio = document.getElementById('audio');
const songSelect = document.getElementById('songSelect');
const title = document.getElementById('title');

// Lista de canciones con sus títulos
const songs = [
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20herramienta%20Magica.mp3", title: "La herramienta Mágica"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20payaso%20Risitas.mp3", title: "El payaso Risitas"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Los%20animales%20de%20la%20granja.mp3", title: "Los animales de la granja"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20tren%20chiquitito.mp3", title: "El tren chiquitito"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20marcha%20de%20las%20vocales.mp3", title: "La marcha de las vocales"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20abecedario%20cantado.mp3", title: "El abecedario cantado"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Los%20colores%20del%20arcoiris.mp3", title: "Los colores del arcoiris"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20canción%20de%20los%20números.mp3", title: "La canción de los números"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20patito%20feo.mp3", title: "El patito feo"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Las%20ruedas%20del%20autobús.mp3", title: "Las ruedas del autobús"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Estrellita%20dónde%20estás.mp3", title: "Estrellita dónde estás"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20familia%20dedo.mp3", title: "La familia dedo"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/Cumpleaños%20feliz%20infantil.mp3", title: "Cumpleaños feliz infantil"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/La%20gallina%20turuleca.mp3", title: "La gallina turuleca"},
  {url: "https://raw.githubusercontent.com/Yeissan/Musica-Infantil/main/El%20señor%20don%20Gato.mp3", title: "El señor don Gato"}
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