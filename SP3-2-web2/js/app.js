// Obtiene la lista donde se mostrarán las tareas
const lista = document.getElementById("lista");

// Función para agregar una nueva tarea
function agregarTarea() {

    // Obtiene el texto escrito por el usuario
    const tarea = document.getElementById("tarea").value;

    // Verifica que el campo no esté vacío
    if (tarea === "") {
        alert("Escribe una tarea");
        return;
    }

    // Crea un nuevo elemento de lista (li)
    const elemento = document.createElement("li");

    // Agrega el texto de la tarea
    elemento.textContent = tarea;

    // Cuando se haga clic sobre la tarea,
    // se marcará como completada
    elemento.addEventListener("click", function() {

        // Cambia el estilo de la tarea
        this.style.textDecoration = "line-through";
        this.style.color = "gray";

    });

    // Agrega la tarea a la lista
    lista.appendChild(elemento);

    // Limpia la caja de texto
    document.getElementById("tarea").value = "";

}