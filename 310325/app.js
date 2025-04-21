// Christian Gael Lara Martinez
let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles \n"+
        "1. Agregar producto \n"+
        "2. Mostrar productos \n"+
        "3. Buscar producto por nombre \n"+
        "4. Salir\n"+
        "Elige una opción: "
    
    ));
}

function agregarProducto(){
    let nombreProducto = prompt("Introduce el nombre del producto:");
    let cantidadProducto = parseInt(prompt ("Introduce la cantidad del producto:"));
    let precioProducto = parseInt(prompt("Introduce el precio del producto"));

    if(cantidadProducto > 0  && precioProducto > 0){
        let producto ={
            nombre:nombreProducto,
            cantidad:cantidadProducto,
            precio:precioProducto
        };
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("La cantiadd y precio debe ser numeros positivos");
    }
    
}



function mostrarProducto(){
    if( inventario.length === 0 ){
        alert("No hay productos");

    }else{
        let mensaje= "Productos en inventario \n";
        for ( let i=0 ; i< inventario.length; i++){
              mensaje +=`Producto ID ${i+1}\n`+
                        `Nombre: ${inventario[i].nombre}\n`+
                        `Cantidad: ${inventario[i].cantidad}\n`+
                        `Precio: ${inventario[i].precio}\n`+
                        "---------------------\n";  
        }
        alert(mensaje);
    }
}


function buscarProducto() { 
    let nombreBuscado = prompt("Introduce el nombre del producto a buscar:");
    let productoEncontrado = inventario.find(producto => producto.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (productoEncontrado) {
        alert(`Producto encontrado: \nNombre: ${productoEncontrado.nombre}\nCantidad: ${productoEncontrado.cantidad}\nPrecio: ${productoEncontrado.precio}`);
    } else {
        alert("Producto no encontrado");
    }
}

function iniciarprograma(){
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                continuar = false;
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida, intenta de nuevo.");
        }
    }
    alert("Programa finalizado.");
}
iniciarprograma();