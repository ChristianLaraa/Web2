const array1 = ['a', 'b', 'c', 'd'];

array1.forEach(element => console.log(element));

// arr.forEach (function callback (currentValue, index, array)){

// }

let frutas = ["manzana", "sandia", "pera", "naranja"];

// frutas.forEach(fruta => console.log(fruta));

frutas.forEach( (fruta, index, array) => {
    console.log(index);
    console.log(fruta);    
    console.log(array);
} );

