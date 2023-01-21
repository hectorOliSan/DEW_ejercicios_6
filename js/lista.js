const videoclub = document.getElementById("videoclub");
const genero = document.getElementById("genero");
const texto = document.getElementById("texto");

const opciones = {
  Vídeos: ["Humor", "Drama", "Ficción", "Otros"],
  Discos: ["Pop", "Rock", "Latino", "Otros"],
  Juegos: ["Simulador", "Rol", "Medieval", "Otros"],
};

function cambiarOpciones() {
  let op_generos = "";
  if (opciones[videoclub.value]) {
    op_generos = opciones[videoclub.value]
      .map((opcion) => `<option value='${opcion}'>${opcion}</option>`)
      .join("");
  }
  genero.innerHTML = op_generos;
  mostrarSeleccion();
}
window.onload = cambiarOpciones();
videoclub.addEventListener("change", cambiarOpciones);

function mostrarSeleccion() {
  texto.value = `Texto de ${videoclub.value} -> ${genero.value}`;
}
genero.addEventListener("change", mostrarSeleccion);
