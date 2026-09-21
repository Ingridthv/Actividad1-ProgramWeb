
function obtenerTareas() {
    const datos = localStorage.getItem('tareas');
    return datos ? JSON.parse(datos) : [];
}

const manejarTareas = (function () {
    let tareas = obtenerTareas();

    function guardarEnStorage() {
 
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    function agregar(texto) {
        tareas.push(texto);
        guardarEnStorage();
    }

    function eliminar(indice) {
        tareas.splice(indice, 1);
        guardarEnStorage();
    }

    function obtener() {
        return tareas;
    }

    return { agregar, eliminar, obtener };
})();

function agregarTarea() {
    const input = document.getElementById('tarea');
    const texto = input.value.trim(); // "texto" tiene scope local a esta función

    if (texto === "") {
        alert('Escribe una tarea antes de agregarla');
        return;
    }

    manejarTareas.agregar(texto);
    input.value = "";
    renderizarTareas();
}

function eliminarTarea(indice) {
    manejarTareas.eliminar(indice);
    renderizarTareas();
}

function renderizarTareas() {
    const lista = document.getElementById('listaTareas');
    lista.innerHTML = "";

    const tareas = manejarTareas.obtener();

    tareas.forEach(function (tarea, indice) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tarea}</span>
            <button onclick="eliminarTarea(${indice})">Eliminar</button>
        `;
        lista.appendChild(li);
    });
}

renderizarTareas();