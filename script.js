// Cargar tareas al iniciar la página
document.addEventListener("DOMContentLoaded", mostrarTareasGuardadas);

function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nueva_tarea").value.trim();

    if (nuevaTareaTexto === "") {
        alert("Por favor, ingrese una tarea");
        return;
    }

    agregarTareaALista(nuevaTareaTexto);
    guardarTarea(nuevaTareaTexto);
    document.getElementById("nueva_tarea").value = "";
}

function agregarTareaALista(texto) {
    let lista = document.getElementById("lista_tarea");

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;

    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
        eliminarTarea(texto);
    };

    nuevaTarea.appendChild(botonEliminar);
    lista.appendChild(nuevaTarea);
}

function guardarTarea(tarea) {
    let tareas = obtenerTareasGuardadas();
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function obtenerTareasGuardadas() {
    let tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
}

function mostrarTareasGuardadas() {
    let tareas = obtenerTareasGuardadas();
    tareas.forEach(tarea => {
        agregarTareaALista(tarea);
    });
}

function eliminarTarea(tareaAEliminar) {
    let tareas = obtenerTareasGuardadas();
    let tareasActualizadas = tareas.filter(t => t !== tareaAEliminar);
    localStorage.setItem("tareas", JSON.stringify(tareasActualizadas));
}
