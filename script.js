// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(seccionId) {
    // Obtén todas las secciones
    const secciones = document.querySelectorAll('main > section');

    // Oculta todas las secciones
    secciones.forEach(seccion => {
        seccion.classList.add('seccion-oculta');
        seccion.classList.remove('seccion-activa');
    });

    // Muestra la sección seleccionada
    const seccionActiva = document.getElementById(seccionId);
    if (seccionActiva) {
        seccionActiva.classList.remove('seccion-oculta');
        seccionActiva.classList.add('seccion-activa');
    }
}

// Cargar la sección de inicio al iniciar
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
});
