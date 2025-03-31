let inventario = [];
function mostrarMenu(){
    return parseInt(prompt(
        "Opciones disponibles: \n"  +
        "1: Agregar producto \n" +
        "2: Mostrar todos los productos \n" +
        "3: Buscar produto por nombre \n" +
        "4: Salir \n" +
        "Seleccione una opción: "
    ));
}
function agregarProducto (){   
    let nombreProducto = prompt("Ingrese el nombre del producto: ");
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto: "));
    let precioProducto = parseInt(prompt("Ingrese el precio del producto: "));

if(cantidadProducto > 0 && precioProducto > 0){
    let producto = {
        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto
    };
    inventario.push(producto);
    alert("Producto agregado");
}else {
    alert("Cantidad y precio deben ser mayores a 0");
    }
}

function mostrarProductos(){

    if(inventario.lenght === 0){
        alert("No hay productos en el inventario");
    }else{
        let mensaje = "Productos en el inventario: \n"
        for(let i = 0; i< inventario.length; i++ ){
            mensaje+=   `Producto: ${1+1} \n` + 
                        `Nombre: ${inventario[i].nombre} \n` + 
                        `Cantidad: ${inventario[i].cantidad} \n` +
                        `Precio: ${inventario[i].precio} \n` + 
                        `--------------------- \n`;
        }
        alert(mensaje);
    }
}

function buscarProducto(){
}


function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch (opcion){
            case 1:
                agregarProducto();
            break;
            case 2:
                mostrarProductos();
            break;
            case 3:
                buscarProducto();
            break;
            case 4:
                alert("Saliendo del programa");
                continuar = false;
                alert("Gracias por usar el programa");
            break;
            default:
                alert("Opción no válida, por favor intente de nuevo.");
        }
    }
}

iniciarPrograma();