document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
  
    if (passwordInput && togglePassword) {
      togglePassword.addEventListener("click", function () {
        const isPassword = passwordInput.type === "password";
        passwordInput.type = isPassword ? "text" : "password";
  
        // Cambia el icono según el estado
        togglePassword.src = isPassword ? "svg/eye-on0.svg" : "svg/eye-off0.svg";
      });
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío normal del formulario

    const email = document.getElementById("email").value.trim().toLowerCase();

    // Lógica para redirigir según el correo
    if (email === "vacunador@example.com") {
      window.location.href = "/Frontend/Vacunadores/Vacunadores.html";
    } else if (email === "admin@example.com") {
      window.location.href = "/Frontend/Admin-FEDEGAN/Barra-lateral/index.html"; // Cambia esta ruta según corresponda
    } else {
      alert("Correo no reconocido");
    }
  });
});

  