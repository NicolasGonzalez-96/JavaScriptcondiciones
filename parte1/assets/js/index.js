const imagen = document.getElementById("imagen");
let bordeRojo = false;

imagen.addEventListener("click", () => {
  if (bordeRojo) {
    imagen.style.border = "none";
    bordeRojo = false;
  } else {
    imagen.style.border = "2px solid red";
    bordeRojo = true;
  }
});
