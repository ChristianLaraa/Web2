let numero1 = prompt ("Ingresa tu primer número para la operación");
let numero2 = prompt ("Ingresa tu segundo número para la operación");

function suma(n1,n2){
    return parseInt(n1)+parseInt(n2);
}

function resta(n1,n2){
    return parseInt(n1)-parseInt(n2);
}

function multiplicacion(n1,n2){
    return parseInt(n1)*parseInt(n2);
}

function division(n1,n2){
    return parseInt(n1)/parseInt(n2);
}


let opcion = parseInt( prompt(`
    ¿Que Operación quieres realizar?\n
    Elije la opción deseada:
    1-. Suma
    2-. Resta
    3-. Multiplicacion
    4-. Division
    `));
switch(opcion){
    case 1:
        console.log(`La suma es: ${suma(numero1,numero2)}`);
    break;
    case 2:
        console.log(`La resta es: ${resta(numero1,numero2)}`);
    break;
    case 3:
        console.log(`La multiplicacion es: ${multiplicacion(numero1,numero2)}`);
    break;
    case 4:
        console.log(`La division es: ${division(numero1,numero2)}`);
    break;
    default:
        console.log("Error");
    break;

}