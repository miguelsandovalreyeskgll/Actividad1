let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;

    if (nombre == "" || calificacion == "") {
        alert("Completa los campos");
        return;
    }

    if (isNaN(calificacion)) {
        alert("Ingresa una calificación válida");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: Number(calificacion)
    };

    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    if (estudiantes.length == 0) {
        return;
    }

    let promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;
    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));
    let nombreAlta = "";
    let nombreBaja = "";

    estudiantes.forEach(estudiante => {
        if (estudiante.calificacion == calificacionMaxima) {
            nombreAlta = estudiante.nombre;
        }

        if (estudiante.calificacion == calificacionMinima) {
            nombreBaja = estudiante.nombre;
        }
    });

    document.getElementById("promedio").value = promedio;
    document.getElementById("alta").value = nombreAlta;
    document.getElementById("baja").value = nombreBaja;
}
