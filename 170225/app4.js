var numero1 = 100;
var numero2 = 200;
console.log(numero1 + numero2);

// prompt ---{cuadro de dialogo} ---
// codigo duro

// prompt("Ingresa un numero");
var numero1 = prompt("Ingresa numero 1: ");
var numero2 = prompt("Ingresa numero 2: ");
// var resultado = numero1 + numero2;
var resultado = parseInt(numero1) + parseInt(numero2);
console.log(typeof numero1); // indica y devuelve el tipo de dato
console.log(resultado);
console.log("El resultado de la suma es: " + resultado);