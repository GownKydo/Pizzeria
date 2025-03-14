// Muestra el popup automáticamente al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Muestra el popup inmediatamente después de que la página se haya cargado
    document.getElementById('popup').classList.add('activo');
});

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('popup').classList.remove('activo');
}

//Cerrar segunda ventana
function cerrarX() {
    document.getElementById('popup').classList.remove('activo');
}


document.getElementById('abrirFormulario').addEventListener('click', function() {
    document.getElementById('modal2').style.display = 'flex';
});

// Función para cerrar ventanas modales
function cerrarX(id) {
    document.getElementById(id).style.display = 'none';
}