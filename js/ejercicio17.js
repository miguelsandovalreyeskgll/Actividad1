function obtenerTareas() {
    let tareas = localStorage.getItem("tareas");
    return tareas ? JSON.parse(tareas) : [];
}

const manejarTareas = (() => {
    let tareas = obtenerTareas();

    function guardar() {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregar(tarea) {
        tareas.push({
            tarea: tarea,
            completada: false
        });
        guardar();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardar();
    }

    function obtener() {
        return tareas;
    }

    return {
        agregar: agregar,
        eliminar: eliminar,
        obtener: obtener
    };
})();

function agregarTarea() {
    let tarea = document.getElementById("tarea").value.trim();

    if (tarea === "") {
        return;
    }

    manejarTareas.agregar(tarea);
    document.getElementById("tarea").value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    Swal.fire({
        title: "¿Eliminar tarea?",
        showCancelButton: true,
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
    }).then(resultado => {
        if (resultado.isConfirmed) {
            manejarTareas.eliminar(indice);
            renderizarTareas();
        }
    });
}

function renderizarTareas() {
    let lista = document.getElementById("listaTareas");
    let tareas = manejarTareas.obtener();

    lista.innerHTML = "";

    tareas.forEach((tarea, indice) => {
        let li = document.createElement("li");
        li.textContent = tarea.tarea;

        let boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.onclick = function () {
            eliminarTarea(indice);
        };

        li.appendChild(boton);
        lista.appendChild(li);
    });
}
