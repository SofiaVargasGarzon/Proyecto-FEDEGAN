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
  