const botones = document.querySelectorAll(".boton");
const textarea = document.getElementById("textarea");

textarea.value = "El hobbit:";

const colores = {
  mouseover: "orchid",
  click: "skyblue",
  dblclick: "red",
};

function cambiarColor(e) {
  let boton = e.currentTarget;
  let siguiente_p = boton.nextElementSibling;
  let colorActual = boton.style.backgroundColor;
  let colorObjetivo = colores[e.type];
  if (colorActual !== "red") {
    boton.style.backgroundColor = colorObjetivo;
    if (e.type === "dblclick") {
      siguiente_p.style.backgroundColor = "coral";
      textarea.value += ` ${siguiente_p.innerText}`;
    }
  }
}

botones.forEach((boton) => {
  boton.addEventListener("mouseover", cambiarColor);
  boton.addEventListener("click", cambiarColor);
  boton.addEventListener("dblclick", cambiarColor);
});
