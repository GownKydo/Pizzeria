// Mostrar el formulario de login
function mostrarLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'block';
}

// Cerrar el popup
function cerrarPopup() {
    document.getElementById('popup').classList.remove('activo');
}

// Mostrar alerta al enviar el formulario de login
function loginSubmit(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Lógica para manejar el login (puedes agregar validaciones aquí si lo necesitas)
    alert('¡Datos enviados correctamente!');

    // Cerrar el popup después de enviar
    cerrarPopup();
}

// Si se requiere abrir el popup al cargar la página
window.onload = function() {
    document.getElementById('popup').classList.add('activo');
};
