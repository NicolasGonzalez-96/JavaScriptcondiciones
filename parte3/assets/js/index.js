function verificarPassword() {
  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("password2").value;
  const pass3 = document.getElementById("password3").value;
  const passwordResult = document.getElementById("passwordResult");

  if (pass1 === "9" && pass2 === "1" && pass3 === "1") {
      passwordResult.textContent = "Password 1 correcto";
  } else if (pass1 === "7" && pass2 === "1" && pass3 === "4") {
      passwordResult.textContent = "Password 2 es correcto";
  } else {
      passwordResult.textContent = "Password incorrecto";
  }
}