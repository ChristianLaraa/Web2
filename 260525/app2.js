//Funcion declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//invoco la funcion
console.log(numeroAleatorio(1, 11));

//funcion expresada
const miNumero = function (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(miNumero(10, 35));

// funcion declarativa 
function dato (a){
    return a + 100;
}

// funcion flecha
const datos1 = function (a){
    return a + 100;
}

var datos2 =  (a) => { return a + 100; };

var datos = a => a + 100;


const array = ['a', 'b', 'c', 'd'];

array1.foreach(element => console.log(element));