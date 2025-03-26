let tareas = [];

function mostrarMenu() {
    return parseInt(prompt(
        "Opciones dispnibles:\n" +
        "1. Agregar tarea \n" +
        "2. Ver todas las tareas \n" +
        "3. Marcara tarea como completada \n" +
        "4. Salir \n" +
        "Elige una ocpion"
    ));
}




function agregarTarea() {
    let nombre = prompt("Introduce el nombre de la tarea:");
    if (nombre) {
        let tarea = {
            nombre: nombre,
            completado: false
        };
        tareas.push(tarea);
        alert("Tarea agregada exitosamente!");
    } else {
        alert("El nombre de la tarea no puede estar vacio")
    }
}

function verTareas(){
    if(tareas.lenght === 0){
        alert("No hay tareas en lista");
    } else {
        let mensaje = "Lista de tareas: \n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1} . ${tarea.nombre} [ ${tarea.completada ? "Completada": "Pendiente"}] \n`;
        });
        alert(mensaje);
    }
}



function marcarTareaCompletada() {
    let numero = parseInt(prompt("Introduce el numero de la tarea a completar"));
    if (numero > 0 && numero <= tareas.length) {
        tareas[numero - 1].completado = true;
        alert(`La tarea "${tareas[numero - 1].nombre}" ha sido completada`);
    } else {
        alert("Numero de tarea invalido");
    }
}




function iniciarPrograma() {
    let continuar = true;
    while (continuar) {



        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                vertarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta de nuevo");
        }


        
    }
    alert = ("Programa terminado");
}





iniciarPrograma();