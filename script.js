
// =============================
// VARIABLES ORIGINALES
// =============================

let edad = 0;
let nombre = "nada";
let ti = 1212;
let correo = "adad";
let curso = 1002;
let nota = 0;
let option = "no";
let notas = [];
let suma = 0;
let total = 0;
let contador = 5;


// =============================
// ELEMENTOS HTML
// =============================

const formulario = document.getElementById("studentForm");

const nombreInput = document.getElementById("nombre");
const edadInput = document.getElementById("edad");
const tiInput = document.getElementById("ti");
const correoInput = document.getElementById("correo");
const cursoInput = document.getElementById("curso");

const notasInputs = document.querySelectorAll(".nota");

const emptyState = document.getElementById("emptyState");
const resultContent = document.getElementById("resultContent");


// =============================
// FUNCIÓN PRINCIPAL
// =============================

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    // Obtener datos del estudiante

    nombre = nombreInput.value.trim();
    edad = parseInt(edadInput.value);
    ti = parseInt(tiInput.value);
    correo = correoInput.value.trim();
    curso = cursoInput.value.trim();


    // Validar datos

    if (!nombre || !correo || !curso || !Number.isFinite(edad) || !Number.isFinite(ti)) {

        alert("Por favor, completa correctamente todos los datos.");
        return;

    }


    // =============================
    // LÓGICA DE LAS CINCO NOTAS
    // =============================

    notas = [];
    suma = 0;
    contador = 5;

    const valoresNotas = Array.from(notasInputs);

    while (contador != 0) {

        nota = parseFloat(valoresNotas[5 - contador].value);

        if (!Number.isFinite(nota)) {

            alert("Debes ingresar las cinco notas correctamente.");
            return;

        }

        notas.push(nota);

        suma += nota;

        contador--;

    }


    // =============================
    // CALCULAR DEFINITIVA
    // =============================

    total = suma / 5;


    // =============================
    // RESULTADO ORIGINAL
    // =============================

    if (total >= 35) {

        option = "paso";

    } else {

        option = "perdio";

    }


    // =============================
    // MOSTRAR INFORMACIÓN
    // =============================

    document.getElementById("resNombre").textContent = nombre;

    document.getElementById("resEdad").textContent = edad;

    document.getElementById("resTI").textContent = ti;

    document.getElementById("resCorreo").textContent = correo;

    document.getElementById("resCurso").textContent = curso;

    document.getElementById("avatar").textContent =
        nombre.charAt(0).toUpperCase();


    // =============================
    // MOSTRAR NOTAS
    // =============================

    const contenedorNotas = document.getElementById("resNotas");

    contenedorNotas.innerHTML = "";

    notas.forEach(function(nota) {

        const elemento = document.createElement("span");

        elemento.className = "note-item";

        elemento.textContent = nota;

        contenedorNotas.appendChild(elemento);

    });


    // =============================
    // MOSTRAR PROMEDIO
    // =============================

    document.getElementById("resPromedio").textContent =
        total.toFixed(1);


    // =============================
    // MOSTRAR ESTADO
    // =============================

    const estado = document.getElementById("resEstado");

    if (total >= 35) {

        estado.textContent = "APROBADO";

        estado.classList.remove("failed");

    } else {

        estado.textContent = "REPROBADO";

        estado.classList.add("failed");

    }


    // =============================
    // MOSTRAR PANEL
    // =============================

    emptyState.classList.add("hidden");

    resultContent.classList.remove("hidden");

    document.getElementById("resultados").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

});


// =============================
// LIMPIAR FORMULARIO
// =============================

formulario.addEventListener("reset", function() {

    notas = [];

    suma = 0;

    total = 0;

    contador = 5;

    nota = 0;

    option = "no";

    resultContent.classList.add("hidden");

    emptyState.classList.remove("hidden");

});


// =============================
// NUEVO ESTUDIANTE
// =============================

document.getElementById("nuevoRegistro").addEventListener("click", function() {

    formulario.reset();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =============================
// SALIR
// =============================

window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        const confirmar = confirm("¿Deseas salir del sistema?");

        if (confirmar) {

            window.close();

        }

    }

});
