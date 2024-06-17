function pintar(div, color) {
  div.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
