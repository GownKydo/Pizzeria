// Función para abrir el popup principal (para crear cuenta)
function abrirPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Función para cerrar el popup principal
function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

// Función para mostrar el popup de login
function mostrarLogin() {
    document.getElementById('popupLogin').style.display = 'block'; // Muestra el popup de login
    document.getElementById('popup').style.display = 'none'; // Oculta el popup principal
}

// Función para cerrar el popup de login
function cerrarPopupLogin() {
    document.getElementById('popupLogin').style.display = 'none';
    document.getElementById('popup').style.display = 'block'; // Muestra de nuevo el popup principal
}

// Función para gestionar el submit del formulario de login
function loginSubmit(event) {
    event.preventDefault();
    // Aquí va la lógica para hacer el login (validaciones, envío de datos, etc.)
    console.log('Iniciar sesión con', document.getElementById('usuario').value, document.getElementById('contrasena').value);
}

// Función para mostrar u ocultar la contraseña
function togglePassword() {
    var passwordInput = document.getElementById('contrasena');
    var toggleButton = document.getElementById('togglePassword');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Ocultar";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Ver";
    }
}
