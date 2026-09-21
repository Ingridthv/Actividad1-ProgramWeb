let estudiantes = [];

function agregarEstudiante() {
    const nombreInput = document.getElementById('nombre');
    const calificacionInput = document.getElementById('calificacion');

    const nombre = nombreInput.value.trim();
    const calificacion = Number(calificacionInput.value.trim());

    if (nombre === "" || calificacionInput.value.trim() === "") {
        alert('Por favor completa el nombre y la calificación');
        return;
    }

    if (isNaN(calificacion)) {
        alert('La calificación debe ser un número válido');
        return;
    }

    const estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(estudiante);

    actualizarLista();

    nombreInput.value = "";
    calificacionInput.value = "";
    nombreInput.focus();
}

function actualizarLista() {
    const lista = document.getElementById('listaEstudiantes');
    lista.innerHTML = "";

    estudiantes.forEach(function (estudiante) {
        const item = document.createElement('li');
        item.textContent = estudiante.nombre + " - " + estudiante.calificacion;
        lista.appendChild(item);
    });
}

function calcular() {
    if (estudiantes.length === 0) {
        alert('Agrega al menos un estudiante antes de calcular');
        return;
    }

    const suma = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = suma / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    const estudianteMasAlto = estudiantes.find(function (e) {
        return e.calificacion === calificacionMaxima;
    });
    const estudianteMasBajo = estudiantes.find(function (e) {
        return e.calificacion === calificacionMinima;
    });

    document.getElementById('promedio').value = promedio.toFixed(2);
    document.getElementById('masAlta').value = estudianteMasAlto.nombre;
    document.getElementById('masBaja').value = estudianteMasBajo.nombre;
}