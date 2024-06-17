const divIds = ["div1", "div2", "div3", "div4"];

function pintarNegro(event) {
  const clickDiv = event.target;
  clickDiv.style.backgroundColor = "black";
}

divIds.forEach((id) => {
  const div = document.getElementById(id);
  div.addEventListener("click", pintarNegro);
});

let guardarColor = "";

function cambiarColor(color) {
  const keyDiv = document.getElementById("key");
  guardarColor = color;
  keyDiv.style.backgroundColor = color;
}

function agregarElemento(color) {
  const nuevoElemento = document.createElement("div");
  nuevoElemento.className = "key2";
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.textContent = "Nuevo div";
  document.body.appendChild(nuevoElemento);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    cambiarColor("pink");
  } else if (event.key === "s") {
    cambiarColor("orange");
  } else if (event.key === "d") {
    cambiarColor("skyblue");
  } else if (event.key === "q") {
    agregarElemento("purple");
  } else if (event.key === "w") {
    agregarElemento("gray");
  } else if (event.key === "e") {
    agregarElemento("brown");
  }
});
