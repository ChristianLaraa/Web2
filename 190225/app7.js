let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));
let num3 = parseInt(prompt("Ingresa el tercer número: "));

if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else if (num1 >= num2 && num1 >= num3) {
    console.log("El primer número es el mayor de los tres.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("El segundo número es el mayor.");
} else {
    console.log("El tercer número es el mayor.");
}
