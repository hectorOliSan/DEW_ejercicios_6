const boton = document.getElementById("boton");
boton.style = "position: absolute;";

let posicionX;
let posicionY;

function generarPosiciones() {
  posicionX = Math.floor(
    Math.random() * (window.innerWidth - boton.offsetWidth)
  );
  posicionY = Math.floor(
    Math.random() * (window.innerHeight - boton.offsetHeight)
  );
}

function generarColor() {
  return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}
  )`;
}

function moverBoton() {
  generarPosiciones();
  boton.style.transition = "all .3s ease-in-out";
  boton.style.left = `${posicionX}px`;
  boton.style.top = `${posicionY}px`;
  boton.style.backgroundColor = generarColor();
}

boton.addEventListener("click", function () {
  alert("Me pillaste");
});

window.onload = moverBoton();
setInterval(moverBoton, 1000);
