// ========================================== // PORTAFOLIO DE MARÍA RUIZ // ==========================================
// ========================================== // MENÚ HAMBURGUESA // ==========================================
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function () {
navLinks.classList.toggle("activo");


const menuAbierto =
    navLinks.classList.contains("activo");


menuBtn.setAttribute(
    "aria-expanded",
    menuAbierto
);


if (menuAbierto) {

    menuBtn.textContent = "✕";

} else {

    menuBtn.textContent = "☰";

}
});
// Cerrar menú cuando se selecciona una opción
const enlacesMenu = document.querySelectorAll(".nav-links a");
enlacesMenu.forEach(function (enlace) {
enlace.addEventListener(
    "click",
    function () {

        navLinks.classList.remove("activo");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    }
);
});
// ========================================== // BARRAS DE HABILIDADES ANIMADAS // ==========================================
const barras = document.querySelectorAll(".progreso");
function animarHabilidades() {
barras.forEach(function (barra) {

    const porcentaje =
        barra.dataset.porcentaje;

    barra.style.width =
        porcentaje + "%";

});
}
// ========================================== // OBSERVER // Hace que las barras se animen // cuando aparecen en pantalla. // ==========================================
const seccionHabilidades = document.getElementById("habilidades");
const observador = new IntersectionObserver(
    function (entradas) {

        entradas.forEach(
            function (entrada) {

                if (
                    entrada.isIntersecting
                ) {

                    animarHabilidades();

                    observador.unobserve(
                        seccionHabilidades
                    );

                }

            }
        );

    },

    {
        threshold: 0.3
    }

);
observador.observe( seccionHabilidades );
// ========================================== // PROYECTOS INTERACTIVOS // ==========================================
const botonesProyecto = document.querySelectorAll( ".proyecto-boton[data-proyecto]" );
const modal = document.getElementById( "modalProyecto" );
const cerrarModal = document.getElementById( "cerrarModal" );
const modalTitulo = document.getElementById( "modalTitulo" );
const modalTexto = document.getElementById( "modalTexto" );
const modalIcono = document.getElementById( "modalIcono" );
const modalAccion = document.getElementById( "modalAccion" );
// Información de los proyectos
const proyectos = {
interactiva: {

    titulo:
        "Página Web Interactiva 💻",

    icono:
        "💻",

    texto:
        "Proyecto realizado para practicar " +
        "JavaScript, eventos, manipulación " +
        "del DOM y elementos interactivos."

},


creativo: {

    titulo:
        "Diseño Web Creativo ✨",

    icono:
        "✨",

    texto:
        "Proyecto enfocado en practicar " +
        "diseño web, CSS, animaciones y " +
        "adaptación responsive para diferentes dispositivos."

}
};
// Abrir modal
botonesProyecto.forEach( function (boton) {
    boton.addEventListener(
        "click",
        function () {

            const proyectoSeleccionado =
                boton.dataset.proyecto;


            const proyecto =
                proyectos[
                    proyectoSeleccionado
                ];


            modalTitulo.textContent =
                proyecto.titulo;


            modalIcono.textContent =
                proyecto.icono;


            modalTexto.textContent =
                proyecto.texto;


            modal.classList.add(
                "activo"
            );

        }
    );

}
);
// ========================================== // CERRAR MODAL // ==========================================
function cerrarVentana() {
modal.classList.remove(
    "activo"
);
}
cerrarModal.addEventListener( "click", cerrarVentana );
modalAccion.addEventListener( "click", cerrarVentana );
// Cerrar haciendo clic fuera
modal.addEventListener( "click", function (evento) {
    if (
        evento.target === modal
    ) {

        cerrarVentana();

    }

}
);
// Cerrar con tecla ESC
document.addEventListener( "keydown", function (evento) {
    if (
        evento.key === "Escape"
    ) {

        cerrarVentana();

    }

}
);
// ========================================== // FORMULARIO // VALIDACIÓN EN TIEMPO REAL // ==========================================
const formulario = document.getElementById( "formularioContacto" );
const nombre = document.getElementById( "nombre" );
const email = document.getElementById( "email" );
const mensaje = document.getElementById( "mensaje" );
const errorNombre = document.getElementById( "errorNombre" );
const errorEmail = document.getElementById( "errorEmail" );
const errorMensaje = document.getElementById( "errorMensaje" );
const mensajeExito = document.getElementById( "mensajeExito" );
// ========================================== // VALIDAR NOMBRE // ==========================================
function validarNombre() {
const valor =
    nombre.value.trim();


if (valor === "") {

    errorNombre.textContent =
        "Escribe tu nombre.";

    nombre.classList.add(
        "input-error"
    );

    nombre.classList.remove(
        "input-correcto"
    );

    return false;

}


if (valor.length < 3) {

    errorNombre.textContent =
        "El nombre debe tener al menos 3 caracteres.";

    nombre.classList.add(
        "input-error"
    );

    nombre.classList.remove(
        "input-correcto"
    );

    return false;

}


errorNombre.textContent = "";

nombre.classList.remove(
    "input-error"
);

nombre.classList.add(
    "input-correcto"
);

return true;
}
// ========================================== // VALIDAR EMAIL // ==========================================
function validarEmail() {
const valor =
    email.value.trim();


const expresionEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if (valor === "") {

    errorEmail.textContent =
        "Escribe tu correo electrónico.";

    email.classList.add(
        "input-error"
    );

    email.classList.remove(
        "input-correcto"
    );

    return false;

}


if (
    !expresionEmail.test(valor)
) {

    errorEmail.textContent =
        "Escribe un correo electrónico válido.";

    email.classList.add(
        "input-error"
    );

    email.classList.remove(
        "input-correcto"
    );

    return false;

}


errorEmail.textContent = "";

email.classList.remove(
    "input-error"
);

email.classList.add(
    "input-correcto"
);

return true;
}
// ========================================== // VALIDAR MENSAJE // ==========================================
function validarMensaje() {
const valor =
    mensaje.value.trim();


if (valor === "") {

    errorMensaje.textContent =
        "Escribe un mensaje.";

    mensaje.classList.add(
        "input-error"
    );

    mensaje.classList.remove(
        "input-correcto"
    );

    return false;

}


if (valor.length < 10) {

    errorMensaje.textContent =
        "El mensaje debe tener al menos 10 caracteres.";

    mensaje.classList.add(
        "input-error"
    );

    mensaje.classList.remove(
        "input-correcto"
    );

    return false;

}


errorMensaje.textContent = "";

mensaje.classList.remove(
    "input-error"
);

mensaje.classList.add(
    "input-correcto"
);

return true;
}
// ========================================== // EVENT LISTENERS // VALIDACIÓN EN TIEMPO REAL // ==========================================
nombre.addEventListener( "input", validarNombre );
email.addEventListener( "input", validarEmail );
mensaje.addEventListener( "input", validarMensaje );
// ========================================== // ENVIAR FORMULARIO // ==========================================
formulario.addEventListener( "submit", function (evento) {
    evento.preventDefault();


    const nombreValido =
        validarNombre();


    const emailValido =
        validarEmail();


    const mensajeValido =
        validarMensaje();


    if (
        nombreValido &&
        emailValido &&
        mensajeValido
    ) {

        mensajeExito.textContent =
            "¡Mensaje enviado correctamente! 💕";


        formulario.reset();


        nombre.classList.remove(
            "input-correcto"
        );


        email.classList.remove(
            "input-correcto"
        );


        mensaje.classList.remove(
            "input-correcto"
        );

    } else {

        mensajeExito.textContent = "";

    }

}
);
